import { Router } from "express";
import * as accommodationController from "./accommodation.controller";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import {
  createAccommodationSchema,
  getMyAccommodationsSchema,
  accommodationIdParamSchema,
  updateAccommodationSchema,
} from "./accommodation.validation";
import { ROLE } from "../../constants/role";
import { uploadAccommodationPhotos } from "../../middlewares/upload.middleware";

const router = Router();

// Only a Host can create/view/edit/delete their own accommodations
router.post(
  "/",
  authenticate,
  authorizeRoles(ROLE.HOST),
  uploadAccommodationPhotos.array("photos", 10),
  validate(createAccommodationSchema),
  accommodationController.createAccommodation
);

router.get(
  "/",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(getMyAccommodationsSchema),
  accommodationController.getMyAccommodations
);

router.get(
  "/:id",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(accommodationIdParamSchema),
  accommodationController.getAccommodationById
);

router.patch(
  "/:id",
  authenticate,
  authorizeRoles(ROLE.HOST),
  uploadAccommodationPhotos.array("photos", 10),
  validate(updateAccommodationSchema),
  accommodationController.updateAccommodation
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles(ROLE.HOST),
  validate(accommodationIdParamSchema),
  accommodationController.deleteAccommodation
);

export default router;