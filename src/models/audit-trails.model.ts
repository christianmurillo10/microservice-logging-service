import { v4 as uuidv4 } from "uuid";
import AuditTrails, { AuditTrailsActionValue } from "../entities/audit-trails.entity";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class AuditTrailsModel implements AuditTrails {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  entity_type: string = "";
  entity_id!: string;
  action: AuditTrailsActionValue = "CREATE";
  old_details: GenericObject = {};
  new_details: GenericObject = {};
  business_id: number | null = null;
  created_user_id!: string;
  created_at: Date = new Date();

  constructor(props: AuditTrails) {
    Object.assign(this, props);
  };
};

export default AuditTrailsModel;