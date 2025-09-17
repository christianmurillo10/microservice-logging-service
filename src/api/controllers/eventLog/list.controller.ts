import { Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import { getPagination } from "../../../shared/helpers/common.helper";
import EventLogService from "../../../services/event-log.service";

const eventLogService = new EventLogService();

const listController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { params, query } = req;
    const condition = params.organizationId ? { organizationId: params.organizationId } : undefined;
    const eventLog = await eventLogService.getAll({ condition, query });
    const allEventLogCount = await eventLogService.count({ condition, query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (eventLog.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      statusCode: 200,
      message,
      data: eventLog,
      pagination: getPagination(
        allEventLogCount,
        eventLog.length,
        Number(query.page ?? 1),
        Number(query.pageSize ?? 10)
      )
    });
  } catch (error) {
    console.error(`${ERROR_ON_LIST}: `, error);
    next(error);
  };
};

export default listController;