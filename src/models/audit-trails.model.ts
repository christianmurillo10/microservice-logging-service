import { v4 as uuidv4 } from "uuid";
import IAuditTrailsEntity, { TAuditTrailsAction } from "../entities/audit-trails.entity";
import { TGenericObject, TServiceName } from "../shared/types/common.type";

class AuditTrails implements IAuditTrailsEntity {
  id?: string = uuidv4();
  service_name: TServiceName = "USER_SERVICE";
  entity_type: string = "";
  entity_id!: string;
  action: TAuditTrailsAction = "CREATE";
  old_details: TGenericObject = {};
  new_details: TGenericObject = {};
  created_user_id!: string;
  created_at: Date = new Date();

  constructor(props: IAuditTrailsEntity) {
    Object.assign(this, props);
  };
};

export default AuditTrails;