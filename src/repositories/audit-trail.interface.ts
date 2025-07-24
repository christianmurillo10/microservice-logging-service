import AuditTrailModel from "../models/audit-trail.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface AuditTrailRepository {
  findAll: (args: FindAllArgs) => Promise<AuditTrailModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<AuditTrailModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<AuditTrailModel | null>;

  create: (args: CreateArgs<AuditTrailModel>) => Promise<AuditTrailModel>;

  count: (args?: CountArgs) => Promise<number>;
};