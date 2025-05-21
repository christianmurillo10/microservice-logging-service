import { TGenericObject } from "../shared/types/common.type";

export default interface IUserActions {
  id?: string;
  service_name: string;
  action: string;
  action_details: TGenericObject;
  ip_address: string;
  user_agent: string;
  session_id: string;
  user_id: string;
  created_at: Date;
};