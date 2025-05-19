import { v4 as uuidv4 } from "uuid";
import AuditTrailsEntity, { AuditTrailsAction } from "../entities/audit-trails.entity";
import { GenericObject } from "../shared/types/common.type";

class AuditTrails implements AuditTrailsEntity {
  id?: string = uuidv4();
  service_name: string = "";
  entity_type: string = "";
  entity_id!: string;
  action: AuditTrailsAction = "CREATE";
  old_details: GenericObject = {};
  new_details: GenericObject = {};
  created_user_id!: string;
  created_at: Date = new Date();

  constructor(props: AuditTrailsEntity) {
    Object.assign(this, props);
  };
};

export default AuditTrails;