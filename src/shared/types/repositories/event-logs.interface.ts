import EventLogs from "../../../models/event-logs.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
} from "../repository.type";

export default interface EventLogsRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<EventLogs[]>;

  findById: (args: FindByIdArgs<string>) => Promise<EventLogs | null>;

  create: (args: CreateArgs<EventLogs>) => Promise<EventLogs>;
};