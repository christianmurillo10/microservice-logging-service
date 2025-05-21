import { TGenericObject } from "../shared/types/common.type";

export default interface IEventLogsEntity {
  id?: string;
  service_name: string;
  event_type: string;
  payload: TGenericObject;
  created_at: Date;
};