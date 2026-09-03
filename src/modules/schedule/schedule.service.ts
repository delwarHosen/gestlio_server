import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { SCHEDULE_STATUS } from "../../constants/schedule";
import { ASSIGNMENT_STATUS } from "../../constants/assignment";

interface CreateScheduleInput {
  cleanerId: string;
  date: Date;
  checkOutTime: string;
  checkInTime: string;
  notes?: string;
}

interface EditScheduleInput {
  date?: Date;
  checkOutTime?: string;
  checkInTime?: string;
  notes?: string;
}

const CLEANER_SUMMARY_SELECT = {
  id: true,
  firstName: true,
  lastName: true,
  phone: true,
  profileImage: true,
} as const;

const ACCOMMODATION_SUMMARY_SELECT = {
  id: true,
  name: true,
  address: true,
  city: true,
  accommodationType: true,
} as const;

const SCHEDULE_INCLUDE = {
  cleaner: { select: CLEANER_SUMMARY_SELECT },
  accommodation: { select: ACCOMMODATION_SUMMARY_SELECT },
} as const;


// Confirms the accommodation exists AND belongs to this host
async function findOwnedAccommodationOrThrow(accommodationId: string, hostId: string) {
  const accommodation = await prisma.accommodation.findUnique({
    where: { id: accommodationId },
  });

  if (!accommodation || accommodation.hostId !== hostId) {
    throw new ApiError(404, "Accommodation not found");
  }

  return accommodation;
}

// Fetches a schedule and confirms the requester is either the host
// or the cleaner attached to it. Used by almost every action below.
async function findScheduleOrThrow(scheduleId: string) {
  const schedule = await prisma.schedule.findUnique({
    where: { id: scheduleId },
    include: SCHEDULE_INCLUDE,
  });

  if (!schedule) {
    throw new ApiError(404, "Schedule not found");
  }

  return schedule;
}


// HOST: CREATE SCHEDULE
// Only allowed if the cleaner has an ACCEPTED assignment on this
// accommodation - this is the core business rule requested.

async function createSchedule(
  hostId: string,
  accommodationId: string,
  data: CreateScheduleInput
) {
  await findOwnedAccommodationOrThrow(accommodationId, hostId);

  const assignment = await prisma.assignment.findUnique({
    where: {
      accommodationId_cleanerId: {
        accommodationId,
        cleanerId: data.cleanerId,
      },
    },
  });

  if (!assignment || assignment.status !== ASSIGNMENT_STATUS.ACCEPTED) {
    throw new ApiError(
      400,
      "This cleaner has not accepted an assignment for this accommodation yet"
    );
  }

  const schedule = await prisma.schedule.create({
    data: {
      accommodationId,
      assignmentId: assignment.id,
      hostId,
      cleanerId: data.cleanerId,
      date: data.date,
      checkOutTime: data.checkOutTime,
      checkInTime: data.checkInTime,
      notes: data.notes,
      status: SCHEDULE_STATUS.PENDING,
    },
    include: SCHEDULE_INCLUDE,
  });

  return schedule;
}


// HOST: MY SCHEDULES

async function getHostSchedules(hostId: string) {
  return prisma.schedule.findMany({
    where: { hostId },
    include: SCHEDULE_INCLUDE,
    orderBy: { date: "desc" },
  });
}


// CLEANER: MY SCHEDULES
async function getCleanerSchedules(cleanerId: string) {
  return prisma.schedule.findMany({
    where: { cleanerId },
    include: SCHEDULE_INCLUDE,
    orderBy: { date: "desc" },
  });
}


// GET SCHEDULE BY ID (host or cleaner - whoever it belongs to)
async function getScheduleById(userId: string, scheduleId: string) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.hostId !== userId && schedule.cleanerId !== userId) {
    throw new ApiError(403, "You do not have access to this schedule");
  }

  return schedule;
}


// HOST: EDIT SCHEDULE
// If the cleaner had already accepted, editing the time/date resets the
// status back to PENDING so the cleaner has to re-confirm the new slot.

async function editSchedule(hostId: string, scheduleId: string, data: EditScheduleInput) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.hostId !== hostId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (
    schedule.status === SCHEDULE_STATUS.PROOF_SUBMITTED ||
    schedule.status === SCHEDULE_STATUS.COMPLETED
  ) {
    throw new ApiError(400, "This schedule can no longer be edited");
  }

  const updateData: Record<string, unknown> = {};
  if (data.date !== undefined) updateData.date = data.date;
  if (data.checkOutTime !== undefined) updateData.checkOutTime = data.checkOutTime;
  if (data.checkInTime !== undefined) updateData.checkInTime = data.checkInTime;
  if (data.notes !== undefined) updateData.notes = data.notes;

  // Any date/time change requires the cleaner to accept again
  const timeChanged = data.date !== undefined || data.checkOutTime !== undefined || data.checkInTime !== undefined;
  if (timeChanged && schedule.status === SCHEDULE_STATUS.ACCEPTED) {
    updateData.status = SCHEDULE_STATUS.PENDING;
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: updateData,
    include: SCHEDULE_INCLUDE,
  });
}


// HOST: DELETE SCHEDULE

async function deleteSchedule(hostId: string, scheduleId: string) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.hostId !== hostId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status === SCHEDULE_STATUS.COMPLETED) {
    throw new ApiError(400, "A completed schedule cannot be deleted");
  }

  await prisma.schedule.delete({ where: { id: scheduleId } });
}


// CLEANER: ACCEPT / REFUSE SCHEDULE

async function respondToSchedule(
  cleanerId: string,
  scheduleId: string,
  action: "accept" | "refuse"
) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.cleanerId !== cleanerId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status !== SCHEDULE_STATUS.PENDING) {
    throw new ApiError(400, "This schedule has already been responded to");
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: {
      status: action === "accept" ? SCHEDULE_STATUS.ACCEPTED : SCHEDULE_STATUS.REFUSED,
    },
    include: SCHEDULE_INCLUDE,
  });
}


// CLEANER: SUBMIT PROOF (photos + notes)

async function submitProof(
  cleanerId: string,
  scheduleId: string,
  proofNotes: string | undefined,
  photoPaths: string[]
) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.cleanerId !== cleanerId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status !== SCHEDULE_STATUS.ACCEPTED) {
    throw new ApiError(400, "Proof can only be submitted for an accepted schedule");
  }

  if (photoPaths.length === 0) {
    throw new ApiError(400, "At least one proof photo is required");
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: {
      proofPhotos: photoPaths,
      proofNotes,
      status: SCHEDULE_STATUS.PROOF_SUBMITTED,
    },
    include: SCHEDULE_INCLUDE,
  });
}


// HOST: INVALIDATE TASK (proof rejected)

async function invalidateTask(hostId: string, scheduleId: string, reason: string) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.hostId !== hostId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status !== SCHEDULE_STATUS.PROOF_SUBMITTED) {
    throw new ApiError(400, "Only a schedule with submitted proof can be invalidated");
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: { status: SCHEDULE_STATUS.INVALIDATED, invalidReason: reason },
    include: SCHEDULE_INCLUDE,
  });
}


// HOST: COMPLETE TASK (proof approved)
// NOTE: this is the point where payment should eventually be triggered
// (cash for now, per the current requirement - see the payment module).

async function completeTask(hostId: string, scheduleId: string) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.hostId !== hostId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status !== SCHEDULE_STATUS.PROOF_SUBMITTED) {
    throw new ApiError(400, "Only a schedule with submitted proof can be completed");
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: { status: SCHEDULE_STATUS.COMPLETED },
    include: SCHEDULE_INCLUDE,
  });
}


// CLEANER: REPORT A DISPUTE
// Used when the cleaner disagrees with an INVALIDATED task.

async function reportDispute(cleanerId: string, scheduleId: string, reason: string) {
  const schedule = await findScheduleOrThrow(scheduleId);

  if (schedule.cleanerId !== cleanerId) {
    throw new ApiError(404, "Schedule not found");
  }

  if (schedule.status !== SCHEDULE_STATUS.INVALIDATED) {
    throw new ApiError(400, "A dispute can only be reported for an invalidated task");
  }

  return prisma.schedule.update({
    where: { id: scheduleId },
    data: { status: SCHEDULE_STATUS.DISPUTED, disputeReason: reason },
    include: SCHEDULE_INCLUDE,
  });
}


// GET CLEANER HOME (today's cleaning + upcoming)
// Matches the Figma "Home" screen: X missions today, completed count,
// today's cleaning list, and upcoming tasks list.

async function getCleanerHome(cleanerId: string) {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date(startOfToday);
  endOfToday.setHours(23, 59, 59, 999);

  const [todayMissions, upcomingMissions, completedTodayCount] = await Promise.all([
    // Today's missions still in progress (accepted or proof already submitted)
    prisma.schedule.findMany({
      where: {
        cleanerId,
        date: { gte: startOfToday, lte: endOfToday },
        status: { in: [SCHEDULE_STATUS.ACCEPTED, SCHEDULE_STATUS.PROOF_SUBMITTED] },
      },
      include: SCHEDULE_INCLUDE,
      orderBy: { checkOutTime: "asc" },
    }),

    // Future missions (pending or accepted), soonest first
    prisma.schedule.findMany({
      where: {
        cleanerId,
        date: { gt: endOfToday },
        status: { in: [SCHEDULE_STATUS.PENDING, SCHEDULE_STATUS.ACCEPTED] },
      },
      include: SCHEDULE_INCLUDE,
      orderBy: { date: "asc" },
      take: 10,
    }),

    // How many of today's missions are already fully completed
    prisma.schedule.count({
      where: {
        cleanerId,
        date: { gte: startOfToday, lte: endOfToday },
        status: SCHEDULE_STATUS.COMPLETED,
      },
    }),
  ]);

  return {
    missionsToday: todayMissions.length,
    completedToday: completedTodayCount,
    todayMissions,
    upcomingMissions,
  };
}


export const scheduleService = {
  createSchedule,
  getHostSchedules,
  getCleanerSchedules,
  getScheduleById,
  editSchedule,
  deleteSchedule,
  respondToSchedule,
  submitProof,
  invalidateTask,
  completeTask,
  reportDispute,
  getCleanerHome,
};