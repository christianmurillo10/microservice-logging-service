import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

export type UserActionsActionValue =
  "LOGIN" |
  "LOGOUT" |
  "CREATE" |
  "UPDATE" |
  "DELETE" |
  "DELETE_MANY" |
  "CHANGE_PASSWORD";

export default interface UserActions {
  id?: string;
  service_name: ServiceNameValue;
  action: UserActionsActionValue;
  action_details: GenericObject;
  ip_address: string;
  user_agent: string;
  business_id?: number | null;
  user_id: string;
  created_at: Date;
};