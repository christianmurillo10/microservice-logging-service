import { v4 as uuidv4 } from "uuid";
import UserActionsEntity from "../entities/user-actions.entity";
import { GenericObject } from "../shared/types/common.type";

class UserActions implements UserActionsEntity {
  id?: string = uuidv4();
  service_name: string = "";
  action: string = "";
  action_details: GenericObject = {};
  ip_address: string = "";
  user_agent: string = "";
  session_id!: string;
  user_id!: string;
  created_at: Date = new Date();

  constructor(props: UserActionsEntity) {
    Object.assign(this, props);
  };
};

export default UserActions;