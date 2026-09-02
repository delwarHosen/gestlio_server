import { Router } from "express";
import * as paymentController from "./payment.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import { setPaymentAcceptedSchema } from "./payment.validation";
import { ROLE } from "../../constants/role";

const router = Router();

// Cleaner-only: turn payment-receiving ON/OFF
router.patch(
  "/accept",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  validate(setPaymentAcceptedSchema),
  paymentController.setPaymentAccepted
);

router.get(
  "/accept",
  authenticate,
  authorizeRoles(ROLE.CLEANER),
  paymentController.getPaymentAccepted
);

export default router;