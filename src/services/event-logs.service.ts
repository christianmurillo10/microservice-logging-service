import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import EventLogsRepository from "../repositories/event-logs.repository";
import EventLogs from "../models/event-logs.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class EventLogsService {
  private repository: EventLogsRepository;

  constructor() {
    this.repository = new EventLogsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<EventLogs[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<EventLogs[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (id: string): Promise<EventLogs> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: EventLogs): Promise<EventLogs> => {
    return await this.repository.create({
      params: new EventLogs(data),
      exclude: ["deleted_at"]
    });
  };
};