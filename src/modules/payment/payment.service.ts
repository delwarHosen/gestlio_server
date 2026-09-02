import { prisma } from "../../config/database";
import { ApiError } from "../../utils/ApiError";
import { ROLE } from "../../constants/role";


// SET PAYMENT ACCEPTED STATUS (Cleaner only)
// Simple manual toggle - no payment gateway involved yet. The host
// pays the cleaner in cash for now; this flag just tells the host
// "this cleaner is ready/active to receive payment".

async function setPaymentAccepted(userId: string, isPaymentAccepted: boolean) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  if (user.role !== ROLE.CLEANER) {
    throw new ApiError(403, "Only cleaner accounts can set payment status");
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { isPaymentAccepted },
  });

  return { isPaymentAccepted: updatedUser.isPaymentAccepted };
}


// GET PAYMENT ACCEPTED STATUS (Cleaner only)

async function getPaymentAccepted(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  if (user.role !== ROLE.CLEANER) {
    throw new ApiError(403, "Only cleaner accounts have a payment status");
  }

  return { isPaymentAccepted: user.isPaymentAccepted };
}

export const paymentService = {
  setPaymentAccepted,
  getPaymentAccepted,
};