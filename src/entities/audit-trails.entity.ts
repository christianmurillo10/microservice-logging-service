import { GenericObject } from "../shared/types/common.type";

export type AuditTrailsAction = "CREATE" | "UPDATE" | "DELETE" | "DELETE_MANY" | "CHANGE_PASSWORD";

export default interface AuditTrailsEntity {
  id?: string;
  service_name: string;
  entity_type: string;
  entity_id: string;
  action: AuditTrailsAction;
  old_details: GenericObject;
  new_details: GenericObject;
  created_user_id: string;
  created_at: Date;
};