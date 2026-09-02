import { z } from "zod";

export const setPaymentAcceptedSchema = z.object({
  body: z.object({
    // true = cleaner turns payment-receiving ON
    // false = cleaner turns it OFF
    isPaymentAccepted: z.boolean(),
  }),
});