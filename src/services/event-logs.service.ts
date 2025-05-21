import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import EventLogsRepository from "../repositories/event-logs.repository";
import EventLogs from "../models/event-logs.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { TCountAllArgs, TGetAllArgs, TGetAllBetweenCreatedAtArgs, TGetByIdArgs } from "../shared/types/service.type";

export default class EventLogsService {
  private repository: EventLogsRepository;

  constructor() {
    this.repository = new EventLogsRepository();
  };

  getAll = async (args?: TGetAllArgs): Promise<EventLogs[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: TGetAllBetweenCreatedAtArgs): Promise<EventLogs[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (args: TGetByIdArgs<string>): Promise<EventLogs> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: EventLogs): Promise<EventLogs> => {
    return await this.repository.create({
      params: new EventLogs(data),
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });
  };

  count = async (args: TCountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};