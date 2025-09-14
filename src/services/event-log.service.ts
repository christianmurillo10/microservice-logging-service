import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaEventLogRepository from "../repositories/prisma/event-log.repository";
import EventLogEntity from "../entities/event-log.entity";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class EventLogService {
  private repository: PrismaEventLogRepository;

  constructor() {
    this.repository = new PrismaEventLogRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<EventLogEntity[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<EventLogEntity[]> => {
    const record = await this.repository.findAllBetweenCreatedAt(args);

    return record;
  };

  getById = async (id: string): Promise<EventLogEntity> => {
    const record = await this.repository.findById({ id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: EventLogEntity): Promise<EventLogEntity> => {
    return await this.repository.create({
      params: new EventLogEntity(data),
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};