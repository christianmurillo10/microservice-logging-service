import EventLogsModel from "../models/event-logs.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface EventLogsRepository {
  findAll: (args: FindAllArgs) => Promise<EventLogsModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<EventLogsModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<EventLogsModel | null>;

  create: (args: CreateArgs<EventLogsModel>) => Promise<EventLogsModel>;

  count: (args?: CountArgs) => Promise<number>;
};