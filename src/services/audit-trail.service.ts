import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaAuditTrailRepository from "../repositories/prisma/audit-trail.repository";
import AuditTrailModel from "../models/audit-trail.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class AuditTrailService {
  private repository: PrismaAuditTrailRepository;

  constructor() {
    this.repository = new PrismaAuditTrailRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<AuditTrailModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["business"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<AuditTrailModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["business"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<AuditTrailModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["business"],
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: AuditTrailModel): Promise<AuditTrailModel> => {
    return await this.repository.create({
      params: new AuditTrailModel(data),
      // include: ["business"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};