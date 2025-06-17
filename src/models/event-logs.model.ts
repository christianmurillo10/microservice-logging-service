import { v4 as uuidv4 } from "uuid";
import EventLogs from "../entities/event-logs.entity";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class EventLogsModel implements EventLogs {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  event_type: string = "";
  payload: GenericObject = {};
  business_id?: number | null = null;
  created_at: Date = new Date();

  constructor(props: EventLogs) {
    this.id = props.id;
    this.service_name = props.service_name;
    this.event_type = props.event_type;
    this.payload = props.payload;
    this.business_id = props.business_id;
    this.created_at = props.created_at;
  };
};

export default EventLogsModel;