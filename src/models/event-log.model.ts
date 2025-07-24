import { v4 as uuidv4 } from "uuid";
import EventLog from "../entities/event-log.entity";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class EventLogModel implements EventLog {
  id?: string = uuidv4();
  serviceName: ServiceNameValue = "USER_SERVICE";
  eventType: string = "";
  payload: GenericObject = {};
  businessId?: number | null = null;
  createdAt: Date = new Date();

  constructor(props: EventLog) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.eventType = props.eventType;
    this.payload = props.payload;
    this.businessId = props.businessId;
    this.createdAt = props.createdAt;
  };
};

export default EventLogModel;