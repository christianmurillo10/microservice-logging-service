import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaAuditTrailsRepository from "../repositories/audit-trails.repository";
import AuditTrailsModel from "../models/audit-trails.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class AuditTrailsService {
  private repository: PrismaAuditTrailsRepository;

  constructor() {
    this.repository = new PrismaAuditTrailsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<AuditTrailsModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["businesses"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<AuditTrailsModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["businesses"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<AuditTrailsModel> => {
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

  save = async (data: AuditTrailsModel): Promise<AuditTrailsModel> => {
    return await this.repository.create({
      params: new AuditTrailsModel(data),
      // include: ["businesses"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};