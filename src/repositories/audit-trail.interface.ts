import AuditTrailEntity from "../entities/audit-trail.entity";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface AuditTrailRepository {
  findAll: (args: FindAllArgs) => Promise<AuditTrailEntity[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<AuditTrailEntity[]>;

  findById: (args: FindByIdArgs<string>) => Promise<AuditTrailEntity | null>;

  create: (args: CreateArgs<AuditTrailEntity>) => Promise<AuditTrailEntity>;

  count: (args?: CountArgs) => Promise<number>;
};