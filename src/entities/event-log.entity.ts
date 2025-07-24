import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface EventLog {
  id?: string;
  serviceName: ServiceNameValue;
  eventType: string;
  payload: GenericObject;
  businessId?: number | null;
  createdAt: Date;
};