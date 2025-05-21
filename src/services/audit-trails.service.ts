import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import AuditTrailsRepository from "../repositories/audit-trails.repository";
import AuditTrails from "../models/audit-trails.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class AuditTrailsService {
  private repository: AuditTrailsRepository;

  constructor() {
    this.repository = new AuditTrailsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<AuditTrails[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<AuditTrails[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (id: string): Promise<AuditTrails> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: AuditTrails): Promise<AuditTrails> => {
    return await this.repository.create({
      params: new AuditTrails(data),
      exclude: ["deleted_at"]
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};