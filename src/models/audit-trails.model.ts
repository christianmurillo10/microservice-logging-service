import { v4 as uuidv4 } from "uuid";
import AuditTrails from "../entities/audit-trails.entity";
import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

class AuditTrailsModel implements AuditTrails {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  table_name: string = "";
  table_id!: string;
  action: ActionValue = "CREATE";
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