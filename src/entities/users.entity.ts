export enum EUserAccess {
  PORTAL = "PORTAL",
  BUSINESS = "BUSINESS",
  APP_RECOGNIZED = "APP_RECOGNIZED"
};

export type TAccessType = EUserAccess.PORTAL | EUserAccess.BUSINESS | EUserAccess.APP_RECOGNIZED;

export default interface IUsersEntity {
  id?: string;
  name: string;
  username: string;
  email: string;
  access_type: TAccessType;
  business_id?: number | null;
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
};