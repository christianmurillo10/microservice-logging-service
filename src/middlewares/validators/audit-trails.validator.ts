import { Request, Response, NextFunction } from "express";
import joi from "joi";
import _ from "lodash";
import { validateInput } from "../../shared/helpers/common.helper";
import { ServiceName } from "../../shared/types/common.type";

export const list = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    req.query?.filters ? req.query.filters = JSON.parse(<string>req.query.filters) : undefined;
    req.query?.sorting ? req.query.sorting = JSON.parse(<string>req.query.sorting) : undefined;

    const schema = joi.object({
      filters: joi.object({
        created_at: joi.date().label("Date Created").empty(),
        service_name: joi.string().label("Service Name").valid(ServiceName.AuthService, ServiceName.UserService).max(100).empty(),
        entity_type: joi.string().label("Entity Type").max(100).empty(),
        action: joi.string().label("Action").max(100).empty(),
      }).label("Filters").empty(),
      sorting: joi.object({
        created_at: joi.string().label("Date Created").valid("asc", "desc").empty(),
        service_name: joi.string().label("Service Name").valid("asc", "desc").empty(),
        entity_type: joi.string().label("Entity Type").valid("asc", "desc").empty(),
        action: joi.string().label("Action").valid("asc", "desc").empty(),
      }).label("Sorting").empty(),
      offset: joi.number().label("Offset").empty(),
      limit: joi.number().label("Limit").empty(),
    });
    const stringifyQuery = JSON.stringify(await validateInput(req.query, schema));
    req.query = JSON.parse(stringifyQuery);
    next();
  } catch (error) {
    next(error);
  };
};