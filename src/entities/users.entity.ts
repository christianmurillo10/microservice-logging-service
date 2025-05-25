export enum UsersAccessType {
  Portal = "PORTAL",
  Business = "BUSINESS",
  AppRecognized = "APP_RECOGNIZED"
};

export type UsersAccessTypeValue = UsersAccessType.Portal | UsersAccessType.Business | UsersAccessType.AppRecognized;

export default interface Users {
  id?: string;
  name: string;
  username: string;
  email: string;
  access_type: UsersAccessTypeValue;
  business_id?: number | null;
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
};