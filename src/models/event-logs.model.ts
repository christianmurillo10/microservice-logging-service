import { v4 as uuidv4 } from "uuid";
import IEventLogsEntity from "../entities/event-logs.entity";
import { TGenericObject, TServiceName } from "../shared/types/common.type";

class EventLogs implements IEventLogsEntity {
  id?: string = uuidv4();
  service_name: TServiceName = "USER_SERVICE";
  event_type: string = "";
  payload: TGenericObject = {};
  business_id?: number;
  created_at: Date = new Date();

  constructor(props: IEventLogsEntity) {
    Object.assign(this, props);
  };
};

export default EventLogs;