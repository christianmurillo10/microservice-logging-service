import { GenericObject } from "../shared/types/common.type";

export default interface EventLogsEntity {
  id?: string;
  service_name: string;
  event_type: string;
  payload: GenericObject;
  created_at: Date;
};