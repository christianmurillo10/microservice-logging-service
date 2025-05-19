import AuditTrails from "../../../models/audit-trails.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
} from "../repository.type";

export default interface AuditTrailsRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<AuditTrails[]>;

  findById: (args: FindByIdArgs<string>) => Promise<AuditTrails | null>;

  create: (args: CreateArgs<AuditTrails>) => Promise<AuditTrails>;
};