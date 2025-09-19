export enum UserAccessType {
  Portal = "PORTAL",
  Organization = "BUSINESS",
  AppRecognized = "APP_RECOGNIZED"
};

export type UserAccessTypeValue = UserAccessType.Portal | UserAccessType.Organization | UserAccessType.AppRecognized;

export interface User {
  id?: string;
  name: string;
  username: string;
  email: string;
  accessType: UserAccessTypeValue;
  organizationId?: string | null;
  isActive: boolean;
  isLogged: boolean;
  isSuperAdmin: boolean;
  lastLoggedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
};

class UserEntity implements User {
  id?: string;
  name: string;
  username: string;
  email: string;
  accessType: UserAccessTypeValue;
  organizationId?: string | null;
  isActive: boolean;
  isLogged: boolean;
  isSuperAdmin: boolean;
  lastLoggedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;

  constructor(props: User) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.email = props.email;
    this.accessType = props.accessType;
    this.organizationId = props.organizationId;
    this.isActive = props.isActive;
    this.isLogged = props.isLogged;
    this.isSuperAdmin = props.isSuperAdmin;
    this.lastLoggedAt = props.lastLoggedAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  };
};

export default UserEntity;