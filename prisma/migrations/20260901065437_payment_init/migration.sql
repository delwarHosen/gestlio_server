-- AlterTable
ALTER TABLE "accommodations" ADD COLUMN     "checkOutDateTime" TIMESTAMP(3),
ADD COLUMN     "nextCheckinDateTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isPaymentAccepted" BOOLEAN NOT NULL DEFAULT false;
