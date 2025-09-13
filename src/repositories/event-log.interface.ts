import EventLogEntity from "../entities/event-log.entity";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface EventLogRepository {
  findAll: (args: FindAllArgs) => Promise<EventLogEntity[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<EventLogEntity[]>;

  findById: (args: FindByIdArgs<string>) => Promise<EventLogEntity | null>;

  create: (args: CreateArgs<EventLogEntity>) => Promise<EventLogEntity>;

  count: (args?: CountArgs) => Promise<number>;
};