import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { list as validator } from "../../../middlewares/validators/audit-trails.validator";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import AuditTrailsService from "../../../services/audit-trails.service";

const router = Router();
const auditTrailsService = new AuditTrailsService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { query } = req;
    const auditTrails = await auditTrailsService.getAll();
    const auditTrailsCount = auditTrails.length;
    const allAuditTrailsCount = await auditTrailsService.count({ query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (auditTrails.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      status_code: 200,
      message,
      result: {
        all_data_count: allAuditTrailsCount,
        data_count: auditTrailsCount,
        data: auditTrails
      }
    });
  } catch (error) {
    console.error(`${ERROR_ON_LIST}: `, error);
    next(error);
  };
};

export default router.get(
  "/",
  authenticate,
  validator,
  controller
);