import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface EventLogs {
  id?: string;
  service_name: ServiceNameValue;
  event_type: string;
  payload: GenericObject;
  business_id?: number | null;
  created_at: Date;
};