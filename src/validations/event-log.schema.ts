import Joi from "joi";
import { ServiceName } from "../shared/types/common.type";

export const listSchema = Joi.object({
  filters: Joi.object({
    createdAt: Joi.date().label("Date Created").empty(),
    serviceName: Joi.string().label("Service Name").valid(ServiceName.AuthService, ServiceName.UserService).max(100).empty(),
    tableName: Joi.string().label("Entity Type").max(100).empty(),
  }).label("Filters").empty(),
  sorting: Joi.object({
    createdAt: Joi.string().label("Date Created").valid("asc", "desc").empty(),
    serviceName: Joi.string().label("Service Name").valid("asc", "desc").empty(),
    tableName: Joi.string().label("Entity Type").valid("asc", "desc").empty(),
  }).label("Sorting").empty(),
  page: Joi.number().min(1).label("Page").empty(),
  pageSize: Joi.number().min(1).label("Page Size").empty(),
});