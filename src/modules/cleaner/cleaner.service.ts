import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { ROLE } from "../../constants/role";

interface GetCleanersQuery {
  page: number;
  limit: number;
  search?: string;
  city?: string;
  availability?: string;
}

// Only expose fields that are safe/relevant for a Host to see when
// browsing cleaners - never expose password or internal auth fields.
const CLEANER_PUBLIC_SELECT = {
  id: true,
  firstName: true,
  lastName: true,
  phone: true,
  profileImage: true,
  about: true,
  siretNumber: true,
  isProfessionalVerified: true,
  workCity: true,
  workLatitude: true,
  workLongitude: true,
  serviceRadius: true,
  availability: true,
  licenseNumber: true,
  biography: true,
  interventionZone: true,
  languages: true,
  servicesOffered: true,
  isCleanerProfileSetupComplete: true,
  createdAt: true,
} as const;


// GET CLEANERS (Host only - filter + pagination)

async function getCleaners(query: GetCleanersQuery) {
  const { page, limit, search, city, availability } = query;

  const where = {
    role: ROLE.CLEANER,
    // Only show cleaners who have finished the mandatory setup wizard,
    // otherwise a Host could assign a task to an incomplete profile
    // isCleanerProfileSetupComplete: true,
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: "insensitive" as const } },
        { lastName: { contains: search, mode: "insensitive" as const } },
      ],
    }),
    ...(city && { workCity: { equals: city, mode: "insensitive" as const } }),
    ...(availability && { availability }),
  };

  const [cleaners, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: CLEANER_PUBLIC_SELECT,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.user.count({ where }),
  ]);

  return {
    cleaners,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}


// GET CLEANER BY ID (Host only)

async function getCleanerById(id: string) {
  const cleaner = await prisma.user.findUnique({
    where: { id },
    select: CLEANER_PUBLIC_SELECT,
  });

  // We fetch by id without a role filter first so we can tell "not found"
  // apart from "found, but not a cleaner" - both return the same 404
  // to the client either way, this is just for clearer server-side intent.
  if (!cleaner) {
    throw new ApiError(404, "Cleaner not found");
  }

  const fullUser = await prisma.user.findUnique({ where: { id } });
  if (fullUser?.role !== ROLE.CLEANER) {
    throw new ApiError(404, "Cleaner not found");
  }

  return cleaner;
}

export const cleanerService = {
  getCleaners,
  getCleanerById,
};