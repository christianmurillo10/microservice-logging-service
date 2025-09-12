import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaEventLogRepository from "../repositories/prisma/event-log.repository";
import EventLogModel from "../models/event-log.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class EventLogService {
  private repository: PrismaEventLogRepository;

  constructor() {
    this.repository = new PrismaEventLogRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<EventLogModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["organization"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<EventLogModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["organization"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<EventLogModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["organization"],
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: EventLogModel): Promise<EventLogModel> => {
    return await this.repository.create({
      params: new EventLogModel(data),
      // include: ["organization"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};