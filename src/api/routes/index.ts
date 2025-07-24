import { Router, Request, Response } from "express";
import { apiResponse } from "../../shared/utils/api-response";
import config from "../../config/server.config";
import auditTrailRoute from "./audit-trail.route";
import eventLogRoute from "./event-log.route";
import userActionRoute from "./user-action.route";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  apiResponse(res, {
    statusCode: 200,
    message: `Welcome to ${config.appName}`
  }).end();
});

router.use("/audit-trail", auditTrailRoute);
router.use("/event-log", eventLogRoute);
router.use("/user-action", userActionRoute);

export default router;