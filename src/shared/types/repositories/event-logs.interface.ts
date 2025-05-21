import EventLogs from "../../../models/event-logs.model";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../repository.type";

export default interface IEventLogsRepository {
  findAll: (args: TFindAllArgs) => Promise<EventLogs[]>;

  findAllBetweenCreatedAt: (args: TFindAllBetweenCreatedAtArgs) => Promise<EventLogs[]>;

  findById: (args: TFindByIdArgs<string>) => Promise<EventLogs | null>;

  create: (args: TCreateArgs<EventLogs>) => Promise<EventLogs>;

  count: (args?: TCountArgs) => Promise<number>;
};