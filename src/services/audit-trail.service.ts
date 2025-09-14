import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaAuditTrailRepository from "../repositories/prisma/audit-trail.repository";
import AuditTrailEntity from "../entities/audit-trail.entity";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class AuditTrailService {
  private repository: PrismaAuditTrailRepository;

  constructor() {
    this.repository = new PrismaAuditTrailRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<AuditTrailEntity[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<AuditTrailEntity[]> => {
    const record = await this.repository.findAllBetweenCreatedAt(args);

    return record;
  };

  getById = async (id: string): Promise<AuditTrailEntity> => {
    const record = await this.repository.findById({ id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: AuditTrailEntity): Promise<AuditTrailEntity> => {
    return await this.repository.create({
      params: new AuditTrailEntity(data),
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};