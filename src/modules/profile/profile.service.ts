import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { ROLE } from "../../constants/role";

interface UpdateMeInput {
  firstName?: string;
  lastName?: string;
  phone?: string;
  about?: string;
  playerId?: string;
  workCity?: string;
  serviceRadius?: number;
  availability?: string;
  licenseNumber?: string;
  biography?: string;
  interventionZone?: string;
  languages?: string; // comma separated
  servicesOffered?: string; // comma separated
}

interface SetupCleanerProfileInput {
  siretNumber: string;
  workCity: string;
  workLatitude: number;
  workLongitude: number;
  serviceRadius: number;
  availability: string;
  licenseNumber: string;
  interventionZone?: string;
  languages?: string; // comma separated
  servicesOffered?: string; // comma separated
  biography?: string;
}

// Fields every role shares
const COMMON_FIELDS = [
  "id",
  "email",
  "firstName",
  "lastName",
  "phone",
  "profileImage",
  "role",
  "about",
  "playerId",
  "isEmailVerified",
  "isProfileComplete",
  "createdAt",
  "updatedAt",
] as const;

// Fields that only make sense for a Cleaner
const CLEANER_ONLY_FIELDS = [
  "siretNumber",
  "isProfessionalVerified",
  "workCity",
  "workLatitude",
  "workLongitude",
  "serviceRadius",
  "availability",
  "licenseNumber",
  "biography",
  "interventionZone",
  "languages",
  "servicesOffered",
  "isCleanerProfileSetupComplete",
] as const;

// Picks only the fields relevant to the user's role, so a Host never
// sees Cleaner-only fields (like siretNumber) in the response, and vice versa.
function shapeProfileByRole(user: Record<string, any>) {
  const fieldsToInclude: readonly string[] =
    user.role === ROLE.CLEANER
      ? [...COMMON_FIELDS, ...CLEANER_ONLY_FIELDS]
      : COMMON_FIELDS;

  const shaped: Record<string, unknown> = {};
  for (const field of fieldsToInclude) {
    shaped[field] = user[field];
  }
  return shaped;
}


// Get My Profile (protected)
async function getMyProfile(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  return shapeProfileByRole(user);
}


// Update My Profile (protected)
// Shared by Host and Cleaner - only the fields that are sent get updated.

async function updateMe(
  userId: string,
  data: UpdateMeInput,
  profileImagePath?: string
) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  // A Host is not allowed to set Cleaner-only fields, even if they send them
  if (user.role === ROLE.HOST) {
    const cleanerOnlyKeysSent = CLEANER_ONLY_FIELDS.filter(
      (key) => (data as Record<string, unknown>)[key] !== undefined
    );
    if (cleanerOnlyKeysSent.length > 0) {
      throw new ApiError(
        400,
        `These fields are only for Cleaner profiles: ${cleanerOnlyKeysSent.join(", ")}`
      );
    }
  }

  // Build the update object dynamically - only include fields that were sent
  const updateData: Record<string, unknown> = {};

  if (data.firstName !== undefined) updateData.firstName = data.firstName;
  if (data.lastName !== undefined) updateData.lastName = data.lastName;
  if (data.phone !== undefined) updateData.phone = data.phone;
  if (data.about !== undefined) updateData.about = data.about;
  if (data.playerId !== undefined) updateData.playerId = data.playerId;

  if (data.workCity !== undefined) updateData.workCity = data.workCity;
  if (data.serviceRadius !== undefined) updateData.serviceRadius = data.serviceRadius;
  if (data.availability !== undefined) updateData.availability = data.availability;
  if (data.licenseNumber !== undefined) updateData.licenseNumber = data.licenseNumber;
  if (data.biography !== undefined) updateData.biography = data.biography;
  if (data.interventionZone !== undefined) updateData.interventionZone = data.interventionZone;

  // comma separated string -> string array, trimming extra spaces
  if (data.languages !== undefined) {
    updateData.languages = data.languages.split(",").map((s) => s.trim()).filter(Boolean);
  }
  if (data.servicesOffered !== undefined) {
    updateData.servicesOffered = data.servicesOffered.split(",").map((s) => s.trim()).filter(Boolean);
  }

  if (profileImagePath) {
    updateData.profileImage = profileImagePath;
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });

  return shapeProfileByRole(updatedUser);
}


// Setup Cleaner Profile (protected, Cleaner-only, one-time & mandatory)
// This is the wizard shown right after signup for a Cleaner.
// It cannot be skipped and is submitted as ONE request at the end,
// unlike updateMe which is used for later, optional edits.
async function setupCleanerProfile(
  userId: string,
  data: SetupCleanerProfileInput,
  profileImagePath?: string
) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  if (user.role !== ROLE.CLEANER) {
    throw new ApiError(403, "Only Cleaner accounts can complete this setup");
  }

  if (user.isCleanerProfileSetupComplete) {
    throw new ApiError(400, "Profile setup has already been completed");
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      siretNumber: data.siretNumber,
      isProfessionalVerified: true, // a valid 14-digit SIRET auto-verifies the cleaner
      workCity: data.workCity,
      workLatitude: data.workLatitude,
      workLongitude: data.workLongitude,
      serviceRadius: data.serviceRadius,
      availability: data.availability,
      licenseNumber: data.licenseNumber,
      interventionZone: data.interventionZone,
      languages: data.languages
        ? data.languages.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      servicesOffered: data.servicesOffered
        ? data.servicesOffered.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
      biography: data.biography,
      profileImage: profileImagePath ?? user.profileImage,
      isCleanerProfileSetupComplete: true,
    },
  });

  return shapeProfileByRole(updatedUser);
}

export const profileService = {
  getMyProfile,
  updateMe,
  setupCleanerProfile,
};