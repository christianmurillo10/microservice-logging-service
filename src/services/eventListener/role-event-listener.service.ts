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
    eventType: string,
    userId: string,
    data: EventMessageData<any>,
    header: Header
  ) => {
    const loggingService = new LoggingService({
      serviceName: "USER_SERVICE",
      action: action,
      eventType: eventType,
      tableName: "roles",
      tableId: data.newDetails.id,
      payload: data,
      header: {
        ipAddress: header.ipAddress,
        userAgent: header.userAgent
      },
      userId,
      organizationId: data.newDetails.organizationId ?? undefined
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
        const roleIds = value.newDetails.ids;

        for (const roleId of roleIds) {
          const data = {
            oldDetails: {
              id: roleId,
              deletedAt: null,
            },
            newDetails: {
              id: roleId,
              deletedAt: new Date(),
            }
          }
          await this.executeLoggingService("DELETE_MANY", eventType, userId, data, header);
        }
        break;
    };

    console.info(`Event Notification: Successfully logged role updates.`);
  };
};