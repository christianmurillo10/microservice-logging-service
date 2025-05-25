import AuditTrailsModel from "../../../models/audit-trails.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../repository.type";

export default interface AuditTrailsRepository {
  findAll: (args: FindAllArgs) => Promise<AuditTrailsModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<AuditTrailsModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<AuditTrailsModel | null>;

  create: (args: CreateArgs<AuditTrailsModel>) => Promise<AuditTrailsModel>;

  count: (args?: CountArgs) => Promise<number>;
};