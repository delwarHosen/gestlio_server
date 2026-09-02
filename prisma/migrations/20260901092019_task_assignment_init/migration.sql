-- CreateEnum
CREATE TYPE "AssignmentRole" AS ENUM ('PRIMARY', 'SUBSTITUTE');

-- CreateEnum
CREATE TYPE "AssignmentStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REFUSED', 'COMPLETED');

-- CreateTable
CREATE TABLE "assignments" (
    "id" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "cleanerId" TEXT NOT NULL,
    "role" "AssignmentRole" NOT NULL DEFAULT 'SUBSTITUTE',
    "pricePerCleaning" DOUBLE PRECISION NOT NULL,
    "message" TEXT,
    "status" "AssignmentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assignments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "assignments_accommodationId_cleanerId_key" ON "assignments"("accommodationId", "cleanerId");

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_cleanerId_fkey" FOREIGN KEY ("cleanerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
