import { GenericObject } from "../shared/types/common.type";

export default interface UserActions {
  id?: string;
  service_name: string;
  action: string;
  action_details: GenericObject;
  ip_address: string;
  user_agent: string;
  session_id: string;
  user_id: string;
  created_at: Date;
};