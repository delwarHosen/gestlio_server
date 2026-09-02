import { Router } from "express";
import * as cleanerController from "./cleaner.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import { getCleanersSchema, cleanerIdParamSchema } from "./cleaner.validation";
import { ROLE } from "../../constants/role";

const router = Router();

// Only a Host can browse/view cleaners (needed before assigning one to a task)
router.get(
  "/",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(getCleanersSchema),
  cleanerController.getCleaners
);

router.get(
  "/:id",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(cleanerIdParamSchema),
  cleanerController.getCleanerById
);

export default router;