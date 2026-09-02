-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REFUSED', 'PROOF_SUBMITTED', 'COMPLETED', 'INVALIDATED', 'DISPUTED');

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "cleanerId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "checkOutTime" TEXT NOT NULL,
    "checkInTime" TEXT NOT NULL,
    "notes" TEXT,
    "status" "ScheduleStatus" NOT NULL DEFAULT 'PENDING',
    "proofPhotos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "proofNotes" TEXT,
    "invalidReason" TEXT,
    "disputeReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "assignments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_cleanerId_fkey" FOREIGN KEY ("cleanerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
