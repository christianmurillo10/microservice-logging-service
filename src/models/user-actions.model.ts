import { v4 as uuidv4 } from "uuid";
import UserActions from "../entities/user-actions.entity";
import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

class UserActionsModel implements UserActions {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  table_name: string = "";
  table_id: string = "";
  action: ActionValue = "LOGIN";
  action_details: GenericObject = {};
  ip_address: string = "";
  user_agent: string = "";
  business_id?: number | null = null;
  user_id!: string;
  created_at: Date = new Date();

  constructor(props: UserActions) {
    this.id = props.id;
    this.service_name = props.service_name;
    this.table_name = props.table_name;
    this.table_id = props.table_id;
    this.action = props.action;
    this.action_details = props.action_details;
    this.ip_address = props.ip_address;
    this.user_agent = props.user_agent;
    this.business_id = props.business_id;
    this.user_id = props.user_id;
    this.created_at = props.created_at;
  };
};

export default UserActionsModel;