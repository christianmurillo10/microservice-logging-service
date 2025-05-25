import { v4 as uuidv4 } from "uuid";
import EventLogs from "../entities/event-logs.entity";
import { GenericObject, ServiceNameValue } from "../shared/types/common.type";

class EventLogsModel implements EventLogs {
  id?: string = uuidv4();
  service_name: ServiceNameValue = "USER_SERVICE";
  event_type: string = "";
  payload: GenericObject = {};
  business_id: number | null = null;
  created_at: Date = new Date();

  constructor(props: EventLogs) {
    Object.assign(this, props);
  };
};

export default EventLogsModel;