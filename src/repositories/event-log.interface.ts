import EventLogModel from "../models/event-log.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface EventLogRepository {
  findAll: (args: FindAllArgs) => Promise<EventLogModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<EventLogModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<EventLogModel | null>;

  create: (args: CreateArgs<EventLogModel>) => Promise<EventLogModel>;

  count: (args?: CountArgs) => Promise<number>;
};