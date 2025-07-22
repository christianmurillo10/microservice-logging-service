import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { list as validator } from "../../../middlewares/validators/event-logs.validator";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import { getPagination } from "../../../shared/helpers/common.helper";
import EventLogsService from "../../../services/event-logs.service";

const router = Router();
const eventLogsService = new EventLogsService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { query } = req;
    const eventLogs = await eventLogsService.getAll({ query });
    const eventLogsCount = eventLogs.length;
    const allEventLogsCount = await eventLogsService.count({ query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (eventLogs.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      status_code: 200,
      message,
      data: eventLogs,
      pagination: getPagination(
        allEventLogsCount,
        eventLogsCount,
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