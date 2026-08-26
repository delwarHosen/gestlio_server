-- CreateEnum
CREATE TYPE "AccommodationType" AS ENUM ('APARTMENT', 'HOUSE', 'STUDIO', 'VILLA', 'OTHER');

-- CreateTable
CREATE TABLE "accommodations" (
    "id" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accommodationType" "AccommodationType" NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "floor" TEXT,
    "doorCode" TEXT,
    "numberOfRooms" INTEGER NOT NULL,
    "surface" DOUBLE PRECISION,
    "hasElevator" BOOLEAN NOT NULL DEFAULT false,
    "cleaningRate" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "keys" TEXT,
    "accessCode" TEXT,
    "instructions" TEXT,
    "frequency" TEXT,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accommodations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accommodations" ADD CONSTRAINT "accommodations_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
