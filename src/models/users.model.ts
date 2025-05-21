import { v4 as uuidv4 } from "uuid";
import IUsersEntity, { TAccessType, EUserAccess } from "../entities/users.entity";

class Users implements IUsersEntity {
  id?: string = uuidv4();
  name: string = "";
  username: string = "";
  email: string = "";
  access_type: TAccessType = EUserAccess.BUSINESS;
  business_id: number | null = null;
  created_at: Date = new Date();
  updated_at?: Date | null = new Date();
  deleted_at?: Date | null = null;

  constructor(props: IUsersEntity) {
    Object.assign(this, props);
  };
};

export default Users;