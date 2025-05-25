import { v4 as uuidv4 } from "uuid";
import UserActions, { UserActionsActionValue } from "../entities/user-actions.entity";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class UserActionsModel implements UserActions {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  action: UserActionsActionValue = "LOGIN";
  action_details: GenericObject = {};
  ip_address: string = "";
  user_agent: string = "";
  business_id: number | null = null;
  user_id!: string;
  created_at: Date = new Date();

  constructor(props: UserActions) {
    Object.assign(this, props);
  };
};

export default UserActionsModel;