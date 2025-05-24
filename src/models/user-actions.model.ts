import { v4 as uuidv4 } from "uuid";
import UserActionsEntity, { TUserActionsAction } from "../entities/user-actions.entity";
import { TGenericObject, TServiceName } from "../shared/types/common.type";

class UserActions implements UserActionsEntity {
  id?: string = uuidv4();
  service_name: TServiceName = "USER_SERVICE";
  action: TUserActionsAction = "LOGIN";
  action_details: TGenericObject = {};
  ip_address: string = "";
  user_agent: string = "";
  business_id: number | null = null;
  session_id!: string;
  user_id!: string;
  created_at: Date = new Date();

  constructor(props: UserActionsEntity) {
    Object.assign(this, props);
  };
};

export default UserActions;