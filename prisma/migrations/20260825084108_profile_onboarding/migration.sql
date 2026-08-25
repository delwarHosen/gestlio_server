-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isCleanerProfileSetupComplete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "workLatitude" DOUBLE PRECISION,
ADD COLUMN     "workLongitude" DOUBLE PRECISION;
