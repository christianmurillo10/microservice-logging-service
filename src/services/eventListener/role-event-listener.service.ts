import EventListenerAbstract from "./event-listener.abstract";
import EventListenerService from "./event-listener.interface";
import { ActionValue, EventMessageData } from "../../shared/types/common.type";
import LoggingService, { Header } from "../logging.service";
import { EVENT_ROLE_BULK_DELETED, EVENT_ROLE_CREATED, EVENT_ROLE_DELETED, EVENT_ROLE_UPDATED } from "../../shared/constants/events.constant";

export default class RoleEventListenerService extends EventListenerAbstract<any> implements EventListenerService<any> {
  constructor() {
    super();
  };

  private executeLoggingService = async (
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
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const { eventType, userId, value, header } = this.state;

    switch (eventType) {
      case EVENT_ROLE_CREATED:
        await this.executeLoggingService("CREATE", eventType, userId, value, header);
        break;
      case EVENT_ROLE_UPDATED:
        await this.executeLoggingService("UPDATE", eventType, userId, value, header);
        break;
      case EVENT_ROLE_DELETED:
        await this.executeLoggingService("DELETE", eventType, userId, value, header);
        break;
      case EVENT_ROLE_BULK_DELETED:
        const roleIds = value.new_details.ids;

        for (const roleId of roleIds) {
          const data = {
            old_details: {
              id: roleId,
              deleted_at: null,
            },
            new_details: {
              id: roleId,
              deleted_at: new Date(),
            }
          }
          await this.executeLoggingService("DELETE_MANY", eventType, userId, data, header);
        }
        break;
    };

    console.info(`Event Notification: Successfully logged role updates.`);
  };
};