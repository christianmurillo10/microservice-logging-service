import { Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import { getPagination } from "../../../shared/helpers/common.helper";
import UserActionService from "../../../services/user-action.service";

const userActionService = new UserActionService();

const listController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { query, auth } = req;
    const condition = auth.organizationId ? { organizationId: auth.organizationId } : undefined;
    const userAction = await userActionService.getAll({ condition, query });
    const allUserActionCount = await userActionService.count({ condition, query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (userAction.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      statusCode: 200,
      message,
      data: userAction,
      pagination: getPagination(
        allUserActionCount,
        userAction.length,
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