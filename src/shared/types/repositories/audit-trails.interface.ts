import AuditTrails from "../../../models/audit-trails.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
} from "../repository.type";

export default interface AuditTrailsRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<AuditTrails[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<AuditTrails[]>;

  findById: (args: FindByIdArgs<string>) => Promise<AuditTrails | null>;

  create: (args: CreateArgs<AuditTrails>) => Promise<AuditTrails>;
};