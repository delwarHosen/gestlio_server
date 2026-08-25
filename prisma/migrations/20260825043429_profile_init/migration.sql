-- AlterTable
ALTER TABLE "users" ADD COLUMN     "about" TEXT,
ADD COLUMN     "availability" TEXT,
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "interventionZone" TEXT,
ADD COLUMN     "isProfessionalVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "languages" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "licenseNumber" TEXT,
ADD COLUMN     "playerId" TEXT,
ADD COLUMN     "serviceRadius" INTEGER,
ADD COLUMN     "servicesOffered" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "siretNumber" TEXT,
ADD COLUMN     "workCity" TEXT;
