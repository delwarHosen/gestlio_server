import { prisma } from "../../config/database";
import { AccommodationType } from "../../constants/accommodationType";
import { ApiError } from "../../utils/ApiError";

interface CreateAccommodationInput {
  name: string;
  accommodationType: AccommodationType;
  address: string;
  city: string;
  zipCode: string;
  floor?: string;
  doorCode?: string;
  numberOfRooms: number;
  surface?: number;
  hasElevator?: boolean;
  cleaningRate: number;
  notes?: string;
  keys?: string;
  accessCode?: string;
  instructions?: string;
  frequency?: string;
}

interface GetMyAccommodationsQuery {
  page: number;
  limit: number;
  search?: string;
  city?: string;
  accommodationType?: AccommodationType;
}

// CREATE ACCOMMODATION (Host only)

async function createAccommodation(
  hostId: string,
  data: CreateAccommodationInput,
  photoPaths: string[],
) {
  const accommodation = await prisma.accommodation.create({
    data: {
      hostId,
      name: data.name,
      accommodationType: data.accommodationType,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      floor: data.floor,
      doorCode: data.doorCode,
      numberOfRooms: data.numberOfRooms,
      surface: data.surface,
      hasElevator: data.hasElevator ?? false,
      cleaningRate: data.cleaningRate,
      notes: data.notes,
      keys: data.keys,
      accessCode: data.accessCode,
      instructions: data.instructions,
      frequency: data.frequency,
      photos: photoPaths,
    },
  });

  return accommodation;
}

// GET MY ACCOMMODATIONS (Host only - filter + pagination)

async function getMyAccommodations(
  hostId: string,
  query: GetMyAccommodationsQuery,
) {
  const { page, limit, search, city, accommodationType } = query;

  const where = {
    hostId,
    ...(search && {
      name: { contains: search, mode: "insensitive" as const },
    }),
    ...(city && { city: { equals: city, mode: "insensitive" as const } }),
    ...(accommodationType && { accommodationType }),
  };

  const [accommodations, total] = await Promise.all([
    prisma.accommodation.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.accommodation.count({ where }),
  ]);

  return {
    accommodations,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

// Small helper: fetches the accommodation and makes sure the requesting
// host actually owns it. Used by getById, update, and delete.
async function findOwnedAccommodationOrThrow(id: string, hostId: string) {
  const accommodation = await prisma.accommodation.findUnique({
    where: { id },
  });

  // Returning the same "not found" message whether the id doesn't exist
  // or belongs to someone else - this avoids leaking which ids exist.
  if (!accommodation || accommodation.hostId !== hostId) {
    throw new ApiError(404, "Accommodation not found");
  }

  return accommodation;
}

// GET ACCOMMODATION BY ID
async function getAccommodationById(id: string, hostId: string) {
  return findOwnedAccommodationOrThrow(id, hostId);
}

// UPDATE ACCOMMODATION (Host only - must own it)
async function updateAccommodation(
  id: string,
  hostId: string,
  data: Partial<CreateAccommodationInput>,
  newPhotoPath?: string[],
) {
  // Confirms the accommodation exists AND belongs to this host before updating
  await findOwnedAccommodationOrThrow(id, hostId);

  const updateData: Record<string, unknown> = {};

  if (data.name !== undefined) updateData.name = data.name;
  if (data.accommodationType !== undefined)
    updateData.accommodationType = data.accommodationType;
  if (data.address !== undefined) updateData.address = data.address;
  if (data.city !== undefined) updateData.city = data.city;
  if (data.zipCode !== undefined) updateData.zipCode = data.zipCode;
  if (data.floor !== undefined) updateData.floor = data.floor;
  if (data.doorCode !== undefined) updateData.doorCode = data.doorCode;
  if (data.numberOfRooms !== undefined)
    updateData.numberOfRooms = data.numberOfRooms;
  if (data.surface !== undefined) updateData.surface = data.surface;
  if (data.hasElevator !== undefined) updateData.hasElevator = data.hasElevator;
  if (data.cleaningRate !== undefined)
    updateData.cleaningRate = data.cleaningRate;
  if (data.notes !== undefined) updateData.notes = data.notes;
  if (data.keys !== undefined) updateData.keys = data.keys;
  if (data.accessCode !== undefined) updateData.accessCode = data.accessCode;
  if (data.instructions !== undefined)
    updateData.instructions = data.instructions;
  if (data.frequency !== undefined) updateData.frequency = data.frequency;

  if (newPhotoPath && newPhotoPath.length > 0) {
    updateData.photos = newPhotoPath;
  }

  const updatedAccommodation = await prisma.accommodation.update({
    where: { id },
    data: updateData,
  });
}


// DELETE ACCOMMODATION
async function deleteAccommodation(id: string, hostId: string) {
  // Confirms the accommodation exists AND belongs to this host before deleting
  await findOwnedAccommodationOrThrow(id, hostId);

  await prisma.accommodation.delete({ where: { id } });
}


export const accommodationService = {
  createAccommodation,
  getMyAccommodations,
  getAccommodationById,
  updateAccommodation,
  deleteAccommodation,
};
