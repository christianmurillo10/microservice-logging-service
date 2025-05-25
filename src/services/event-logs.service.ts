import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaEventLogsRepository from "../repositories/prisma/event-logs.repository";
import EventLogsModel from "../models/event-logs.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class EventLogsService {
  private repository: PrismaEventLogsRepository;

  constructor() {
    this.repository = new PrismaEventLogsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<EventLogsModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["businesses"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<EventLogsModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["businesses"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<EventLogsModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["businesses"],
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: EventLogsModel): Promise<EventLogsModel> => {
    return await this.repository.create({
      params: new EventLogsModel(data),
      // include: ["businesses"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};