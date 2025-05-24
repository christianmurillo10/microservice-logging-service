import { TGenericObject, TServiceName } from "../shared/types/common.type";

export type TAuditTrailsAction =
  "CREATE" |
  "UPDATE" |
  "DELETE" |
  "DELETE_MANY" |
  "CHANGE_PASSWORD";

export default interface IAuditTrailsEntity {
  id?: string;
  service_name: TServiceName;
  entity_type: string;
  entity_id: string;
  action: TAuditTrailsAction;
  old_details: TGenericObject;
  new_details: TGenericObject;
  business_id?: number | null;
  created_user_id: string;
  created_at: Date;
};