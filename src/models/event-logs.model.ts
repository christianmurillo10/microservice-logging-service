import { v4 as uuidv4 } from "uuid";
import EventLogsEntity from "../entities/event-logs.entity";
import { GenericObject } from "../shared/types/common.type";

class EventLogs implements EventLogsEntity {
  id?: string = uuidv4();
  service_name: string = "";
  event_type: string = "";
  payload: GenericObject = {};
  created_at: Date = new Date();

  constructor(props: EventLogsEntity) {
    Object.assign(this, props);
  };
};

export default EventLogs;