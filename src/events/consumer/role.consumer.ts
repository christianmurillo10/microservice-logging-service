import { KafkaMessage } from "kafkajs";
import {
  EVENT_ROLE_BULK_DELETED,
  EVENT_ROLE_CREATED,
  EVENT_ROLE_DELETED,
  EVENT_ROLE_UPDATED
} from "../../shared/constants/events.constant";
import { ActionValue, EventMessageData } from "../../shared/types/common.type";
import LoggingService, { Header } from "../../services/logging.service";

const executeLoggingService = async (
  action: ActionValue,
  event_type: string,
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
    user_id: undefined,
    business_id: data.new_details.business_id ?? undefined
  });
  await loggingService.execute();
};

const roleConsumer = async (message: KafkaMessage) => {
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value) {
    return;
  };

  const header = {
    ip_address: message.headers!.ip_address!.toString(),
    user_agent: message.headers!.user_agent!.toString()
  };
  const eventType = value.eventType;

  switch (eventType) {
    case EVENT_ROLE_CREATED:
      await executeLoggingService("CREATE", eventType, value.data, header);
      break;
    case EVENT_ROLE_UPDATED:
      await executeLoggingService("UPDATE", eventType, value.data, header);
      break;
    case EVENT_ROLE_DELETED:
      await executeLoggingService("DELETE", eventType, value.data, header);
      break;
    case EVENT_ROLE_BULK_DELETED:
      const roleIds = value.data.new_details.ids;

      for (const roleId of roleIds) {
        const data = {
          old_details: {},
          new_details: {
            id: roleId,
            deleted_at: new Date(),
          }
        }
        await executeLoggingService("DELETE_MANY", eventType, data, header);
      }
      break;
  };

  console.info(`Event Notification: Successfully logged role updates.`);
};

export default roleConsumer;