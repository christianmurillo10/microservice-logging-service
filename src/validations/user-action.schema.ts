import Joi from "joi";
import { ServiceName } from "../shared/types/common.type";

export const listSchema = Joi.object({
  filters: Joi.object({
    createdAt: Joi.date().label("Date Created").empty(),
    userId: Joi.string().label("User").max(100).empty(),
    serviceName: Joi.string().label("Service Name").valid(ServiceName.AuthService, ServiceName.UserService).max(100).empty(),
    action: Joi.string().label("Action").max(100).empty(),
  }).label("Filters").empty(),
  sorting: Joi.object({
    createdAt: Joi.string().label("Date Created").valid("asc", "desc").empty(),
    userId: Joi.string().label("User").valid("asc", "desc").empty(),
    serviceName: Joi.string().label("Service Name").valid("asc", "desc").empty(),
    action: Joi.string().label("Action").valid("asc", "desc").empty(),
  }).label("Sorting").empty(),
  page: Joi.number().min(1).label("Page").empty(),
  pageSize: Joi.number().min(1).label("Page Size").empty(),
});