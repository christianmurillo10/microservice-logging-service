import EventListenerAbstract from "./event-listener.abstract";
import EventListenerService from "./event-listener.interface";
import { ActionValue, EventMessageData } from "../../shared/types/common.type";
import LoggingService, { Header } from "../logging.service";

export default class RoleEventListenerService extends EventListenerAbstract<unknown> implements EventListenerService<unknown> {
  executeLoggingService = async (
    action: ActionValue,
    event_type: string,
    user_id: string,
    data: EventMessageData<any>,
    header: Header
  ) => {
    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: action,
      event_type: event_type,
      table_name: "roles",
      table_id: data.new_details.id,
      payload: data,
      header: {
        ip_address: header.ip_address,
        user_agent: header.user_agent
      },
      user_id,
      business_id: data.new_details.business_id ?? undefined
    });
    await loggingService.execute();
  };

  execute = async (): Promise<void> => {

  };
};