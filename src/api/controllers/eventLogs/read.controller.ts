import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { MESSAGE_DATA_FIND, MESSAGE_INVALID_PARAMETER } from "../../../shared/constants/message.constant";
import { ERROR_ON_READ } from "../../../shared/constants/error.constant";
import EventLogsService from "../../../services/event-logs.service";
import BadRequestException from "../../../shared/exceptions/bad-request.exception";

const router = Router();
const eventLogsService = new EventLogsService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { params, businesses } = req;
    const id = params.id;

    if (id === ":id") {
      throw new BadRequestException([MESSAGE_INVALID_PARAMETER]);
    }

    const condition = businesses ? { business_id: businesses.id } : undefined;
    const eventLog = await eventLogsService.getById({ id, condition });

    apiResponse(res, {
      status_code: 200,
      message: MESSAGE_DATA_FIND,
      result: eventLog
    });
  } catch (error) {
    console.error(`${ERROR_ON_READ}: `, error);
    next(error);
  };
};

export default router.get(
  "/:id",
  authenticate,
  controller
);