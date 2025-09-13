import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface EventLog {
  id?: string;
  serviceName: ServiceNameValue;
  eventType: string;
  payload: GenericObject;
  organizationId?: string | null;
  createdAt: Date;
};