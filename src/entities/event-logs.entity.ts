import { TGenericObject, TServiceName } from "../shared/types/common.type";

export default interface IEventLogsEntity {
  id?: string;
  service_name: TServiceName;
  event_type: string;
  payload: TGenericObject;
  business_id?: number;
  created_at: Date;
};