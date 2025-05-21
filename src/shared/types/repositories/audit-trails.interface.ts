import AuditTrails from "../../../models/audit-trails.model";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../repository.type";

export default interface IAuditTrailsRepository {
  findAll: (args: TFindAllArgs) => Promise<AuditTrails[]>;

  findAllBetweenCreatedAt: (args: TFindAllBetweenCreatedAtArgs) => Promise<AuditTrails[]>;

  findById: (args: TFindByIdArgs<string>) => Promise<AuditTrails | null>;

  create: (args: TCreateArgs<AuditTrails>) => Promise<AuditTrails>;

  count: (args?: TCountArgs) => Promise<number>;
};