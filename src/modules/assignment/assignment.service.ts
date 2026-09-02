import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { ROLE } from "../../constants/role";
import {
  ASSIGNMENT_ROLE,
  ASSIGNMENT_STATUS,
  AssignmentRoleType,
} from "../../constants/assignment";

interface AssignCleanerInput {
  cleanerId: string;
  role: AssignmentRoleType;
  pricePerCleaning: number;
  message?: string;
}

// Only return the fields a host/cleaner actually needs to see about
// the other side of an assignment - never leak the password field.
const CLEANER_SUMMARY_SELECT = {
  id: true,
  firstName: true,
  lastName: true,
  phone: true,
  profileImage: true,
  workCity: true,
  availability: true,
} as const;

const ACCOMMODATION_SUMMARY_SELECT = {
  id: true,
  name: true,
  address: true,
  city: true,
  accommodationType: true,
  cleaningRate: true,
  checkOutDateTime: true,
  nextCheckinDateTime: true,
} as const;

// Confirms the accommodation exists AND belongs to this host.
// Used by every host-side action in this module.
async function findOwnedAccommodationOrThrow(
  accommodationId: string,
  hostId: string,
) {
  const accommodation = await prisma.accommodation.findUnique({
    where: { id: accommodationId },
  });

  if (!accommodation || accommodation.hostId !== hostId) {
    throw new ApiError(404, "Accommodation not found");
  }

  return accommodation;
}

// ASSIGN CLEANER (Host only - sends an invitation, status starts as PENDING)

async function assignCleaner(
  hostId: string,
  accommodationId: string,
  data: AssignCleanerInput,
) {
  await findOwnedAccommodationOrThrow(accommodationId, hostId);

  const cleaner = await prisma.user.findUnique({
    where: { id: data.cleanerId },
  });
  if (!cleaner || cleaner.role !== ROLE.CLEANER) {
    throw new ApiError(404, "Cleaner not found");
  }

  const existingAssignment = await prisma.assignment.findUnique({
    where: {
      accommodationId_cleanerId: {
        accommodationId,
        cleanerId: data.cleanerId,
      },
    },
  });

  if (existingAssignment) {
    throw new ApiError(
      409,
      "This cleaner is already assigned or invited for this accommodation",
    );
  }

  const assignment = await prisma.assignment.create({
    data: {
      accommodationId,
      cleanerId: data.cleanerId,
      role: data.role,
      pricePerCleaning: data.pricePerCleaning,
      message: data.message,
      status: ASSIGNMENT_STATUS.PENDING,
    },
    include: { cleaner: { select: CLEANER_SUMMARY_SELECT } },
  });

  return assignment;
}

// GET ACCOMMODATION'S ASSIGNED CLEANERS (Host only)

async function getAssignedCleaners(hostId: string, accommodationId: string) {
  await findOwnedAccommodationOrThrow(accommodationId, hostId);

  return prisma.assignment.findMany({
    where: { accommodationId },
    include: { cleaner: { select: CLEANER_SUMMARY_SELECT } },
    orderBy: { createdAt: "desc" },
  });
}

// CHANGE CLEANER ROLE (Host only - toggle PRIMARY <-> SUBSTITUTE)

async function changeCleanerRole(
  hostId: string,
  assignmentId: string,
  role: AssignmentRoleType,
) {
  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
    include: { accommodation: true },
  });

  if (!assignment || assignment.accommodation.hostId !== hostId) {
    throw new ApiError(404, "Assignment not found");
  }

  // Business rule: only one PRIMARY cleaner per accommodation at a time.
  // If this assignment is being promoted to PRIMARY, demote whichever
  // cleaner currently holds that role on the same accommodation first.
  if (role === ASSIGNMENT_ROLE.PRIMARY) {
    await prisma.assignment.updateMany({
      where: {
        accommodationId: assignment.accommodationId,
        role: ASSIGNMENT_ROLE.PRIMARY,
        id: { not: assignmentId },
      },
      data: { role: ASSIGNMENT_ROLE.SUBSTITUTE },
    });
  }

  return prisma.assignment.update({
    where: { id: assignmentId },
    data: { role },
    include: { cleaner: { select: CLEANER_SUMMARY_SELECT } },
  });
}

// REMOVE CLEANER FROM ACCOMMODATION (Host only)

async function removeCleaner(hostId: string, assignmentId: string) {
  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
    include: { accommodation: true },
  });

  if (!assignment || assignment.accommodation.hostId !== hostId) {
    throw new ApiError(404, "Assignment not found");
  }

  await prisma.assignment.delete({ where: { id: assignmentId } });
}

// CLEANER: MY REQUESTS (INBOX) - pending invitations only

async function getMyRequests(cleanerId: string) {
  return prisma.assignment.findMany({
    where: { cleanerId, status: ASSIGNMENT_STATUS.PENDING },
    include: { accommodation: { select: ACCOMMODATION_SUMMARY_SELECT } },
    orderBy: { createdAt: "desc" },
  });
}

// CLEANER: ACCEPT / REFUSE REQUEST

async function respondToRequest(
  cleanerId: string,
  assignmentId: string,
  action: "accept" | "refuse",
) {
  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
  });

  if (!assignment || assignment.cleanerId !== cleanerId) {
    throw new ApiError(404, "Request not found");
  }

  if (assignment.status !== ASSIGNMENT_STATUS.PENDING) {
    throw new ApiError(400, "This request has already been responded to");
  }

  return prisma.assignment.update({
    where: { id: assignmentId },
    data: {
      status:
        action === "accept"
          ? ASSIGNMENT_STATUS.ACCEPTED
          : ASSIGNMENT_STATUS.REFUSED,
    },
    include: { accommodation: { select: ACCOMMODATION_SUMMARY_SELECT } },
  });
}

// CLEANER: MY ACCEPTED ACCOMMODATIONS

async function getMyAcceptedAccommodations(cleanerId: string) {
  return prisma.assignment.findMany({
    where: { cleanerId, status: ASSIGNMENT_STATUS.ACCEPTED },
    include: { accommodation: { select: ACCOMMODATION_SUMMARY_SELECT } },
    orderBy: { createdAt: "desc" },
  });
}

// MARK ASSIGNMENT AS COMPLETED (Host only)
// Different from removeCleaner - this keeps the record in the database
// (for history/audit purposes) instead of deleting it. Use this when a
// contract naturally ends; use removeCleaner when the host wants the
// record gone entirely.

async function completeAssignment(hostId: string, assignmentId: string) {
  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
    include: { accommodation: true },
  });

  if (!assignment || assignment.accommodation.hostId !== hostId) {
    throw new ApiError(404, "Assignment not found");
  }

  if (assignment.status !== ASSIGNMENT_STATUS.ACCEPTED) {
    throw new ApiError(
      400,
      "Only an accepted assignment can be marked as completed",
    );
  }

  return prisma.assignment.update({
    where: { id: assignmentId },
    data: { status: ASSIGNMENT_STATUS.COMPLETED },
    include: { cleaner: { select: CLEANER_SUMMARY_SELECT } },
  });
}

export const assignmentService = {
  assignCleaner,
  getAssignedCleaners,
  changeCleanerRole,
  removeCleaner,
  completeAssignment,
  getMyRequests,
  respondToRequest,
  getMyAcceptedAccommodations,
};
