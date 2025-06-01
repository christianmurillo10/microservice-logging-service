import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface UserActions {
  id?: string;
  service_name: ServiceNameValue;
  action: ActionValue;
  action_details: GenericObject;
  ip_address: string;
  user_agent: string;
  business_id?: number | null;
  user_id: string;
  created_at: Date;
};