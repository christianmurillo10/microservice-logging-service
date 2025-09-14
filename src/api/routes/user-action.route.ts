import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import authorize from "../../middlewares/authoriza.middleware";
import {
  list as listValidation
} from "../../middlewares/validators/user-action.validator";
import * as UserActionController from "../controllers/userAction";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  authorize("list", "user-action"),
  listValidation,
  UserActionController.list
);

router.get(
  "/:id",
  authorize("read", "user-action"),
  authenticate,
  UserActionController.read
);

export default router;