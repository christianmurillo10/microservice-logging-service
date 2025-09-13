import EventLog from "../models/event-log.model";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class EventLogEntity implements EventLog {
  id?: string;
  serviceName: ServiceNameValue;
  eventType: string;
  payload: GenericObject;
  organizationId?: string | null;
  createdAt: Date;

  constructor(props: EventLog) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.eventType = props.eventType;
    this.payload = props.payload;
    this.organizationId = props.organizationId;
    this.createdAt = props.createdAt;
  };
};

export default EventLogEntity;