import { Router } from "express";
import authenticate from "../../middlewares/authenticate.middleware";
import authorize from "../../middlewares/authoriza.middleware";
import { validateQuery } from "../../middlewares/validate.middleware";
import { listSchema } from "../../validations/event-log.schema";
import * as UserActionController from "../controllers/userAction";

const router = Router({ mergeParams: true });

router.get(
  "/",
  authenticate,
  authorize("list", "user-action"),
  validateQuery(listSchema),
  UserActionController.list
);

router.get(
  "/:id",
  authorize("read", "user-action"),
  authenticate,
  UserActionController.read
);

export default router;