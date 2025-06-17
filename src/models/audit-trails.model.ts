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
  business_id?: number | null = null;
  created_user_id!: string;
  created_at: Date = new Date();

  constructor(props: AuditTrails) {
    this.id = props.id;
    this.service_name = props.service_name;
    this.table_name = props.table_name;
    this.table_id = props.table_id;
    this.action = props.action;
    this.old_details = props.old_details;
    this.new_details = props.new_details;
    this.business_id = props.business_id;
    this.created_user_id = props.created_user_id;
    this.created_at = props.created_at;
  };
};

export default AuditTrailsModel;