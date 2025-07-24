import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { list as validator } from "../../../middlewares/validators/audit-trail.validator";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import { getPagination } from "../../../shared/helpers/common.helper";
import AuditTrailService from "../../../services/audit-trail.service";

const router = Router();
const auditTrailService = new AuditTrailService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { query } = req;
    const auditTrail = await auditTrailService.getAll({ query });
    const auditTrailCount = auditTrail.length;
    const allAuditTrailCount = await auditTrailService.count({ query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (auditTrail.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      statusCode: 200,
      message,
      data: auditTrail,
      pagination: getPagination(
        allAuditTrailCount,
        auditTrailCount,
        Number(query.page ?? 1),
        Number(query.limit ?? 10)
      )
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