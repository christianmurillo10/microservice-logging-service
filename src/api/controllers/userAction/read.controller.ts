import { Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import { MESSAGE_DATA_FIND, MESSAGE_INVALID_PARAMETER } from "../../../shared/constants/message.constant";
import { ERROR_ON_READ } from "../../../shared/constants/error.constant";
import UserActionService from "../../../services/user-action.service";
import BadRequestException from "../../../shared/exceptions/bad-request.exception";

const userActionService = new UserActionService();

const readController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { params } = req;
    const id = params.id;

    if (id === ":id") {
      throw new BadRequestException([MESSAGE_INVALID_PARAMETER]);
    }

    const userAction = await userActionService.getById({ id });

    apiResponse(res, {
      statusCode: 200,
      message: MESSAGE_DATA_FIND,
      data: userAction
    });
  } catch (error) {
    console.error(`${ERROR_ON_READ}: `, error);
    next(error);
  };
};

export default readController;