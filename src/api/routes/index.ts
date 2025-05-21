import { Router, Request, Response } from "express";
import { apiResponse } from "../../shared/utils/api-response";
import config from "../../config/server.config";
import auditTrailsRoute from "./audit-trails.route";
import eventLogsRoute from "./event-logs.route";
import userActionsRoute from "./user-actions.route";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  apiResponse(res, {
    status_code: 200,
    message: `Welcome to ${config.app_name}`
  }).end();
});

router.use("/audit-trails", auditTrailsRoute);
router.use("/event-logs", eventLogsRoute);
router.use("/user-actions", userActionsRoute);

export default router;