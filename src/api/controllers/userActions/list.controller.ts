import { Router, Request, Response, NextFunction } from "express";
import { apiResponse } from "../../../shared/utils/api-response";
import authenticate from "../../../middlewares/authenticate.middleware";
import { list as validator } from "../../../middlewares/validators/user-actions.validator";
import { MESSAGE_DATA_FIND_ALL, MESSAGE_DATA_NOT_FOUND } from "../../../shared/constants/message.constant";
import { ERROR_ON_LIST } from "../../../shared/constants/error.constant";
import UserActionsService from "../../../services/user-actions.service";

const router = Router();
const userActionsService = new UserActionsService();

const controller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { query } = req;
    const userActions = await userActionsService.getAll();
    const userActionsCount = userActions.length;
    const allUserActionsCount = await userActionsService.count({ query });
    let message = MESSAGE_DATA_FIND_ALL;

    if (userActions.length < 1) {
      message = MESSAGE_DATA_NOT_FOUND;
    };

    apiResponse(res, {
      status_code: 200,
      message,
      result: {
        all_data_count: allUserActionsCount,
        data_count: userActionsCount,
        data: userActions
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