import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { list as validator } from "../../../middlewares/validators/event-logs.validator";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import EventLogsService from "../../../services/event-logs.service";

const router = Router();
const service = new EventLogsService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise.resolve(req)
  .then(async (req) => {
    const { query } = req;
    const record = await service.getAll();
    const record_count = record.length;
    const all_record_count = await service.count({ query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (record.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    return {
      message,
      result: {
        all_data_count: all_record_count,
        data_count: record_count,
        data: record
      }
    };
  })
  .then(({ message, result }) => {
    apiResponse(res, {
      status_code: 200,
      message,
      result
    })
  })
  .catch(err => {
    console.error(`${ERROR_ON_LIST}: `, err);
    next(err)
  });

export default router.get(
  "/",
  authenticate,
  validator,
  controller
);