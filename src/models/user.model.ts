import { v4 as uuidv4 } from "uuid";
import User, { UserAccessTypeValue, UserAccessType } from "../entities/user.entity";

class UserModel implements User {
  id?: string = uuidv4();
  name: string = "";
  username: string = "";
  email: string = "";
  accessType: UserAccessTypeValue = UserAccessType.Organization;
  organizationId?: number | null = null;
  isActive: boolean = true;
  isLogged: boolean = false;
  lastLoggedAt?: Date | null = null;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  deletedAt?: Date | null = null;

  constructor(props: User) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.email = props.email;
    this.accessType = props.accessType;
    this.organizationId = props.organizationId;
    this.isActive = props.isActive;
    this.isLogged = props.isLogged;
    this.lastLoggedAt = props.lastLoggedAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  };
};

export default UserModel;