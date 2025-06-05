import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface AuditTrails {
  id?: string;
  service_name: ServiceNameValue;
  table_name: string;
  table_id: string;
  action: ActionValue;
  old_details: GenericObject;
  new_details: GenericObject;
  business_id?: number | null;
  created_user_id: string;
  created_at: Date;
};