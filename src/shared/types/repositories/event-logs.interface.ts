import EventLogs from "../../../models/event-logs.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../repository.type";

export default interface EventLogsRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<EventLogs[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<EventLogs[]>;

  findById: (args: FindByIdArgs<string>) => Promise<EventLogs | null>;

  create: (args: CreateArgs<EventLogs>) => Promise<EventLogs>;

  count: (args?: CountArgs) => Promise<number>;
};