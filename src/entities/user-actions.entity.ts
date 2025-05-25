import { TGenericObject, TServiceName } from "../shared/types/common.type";

export type TUserActionsAction =
  "LOGIN" |
  "LOGOUT" |
  "CREATE" |
  "UPDATE" |
  "DELETE" |
  "DELETE_MANY" |
  "CHANGE_PASSWORD";

export default interface IUserActions {
  id?: string;
  service_name: TServiceName;
  action: TUserActionsAction;
  action_details: TGenericObject;
  ip_address: string;
  user_agent: string;
  business_id?: number | null;
  user_id: string;
  created_at: Date;
};