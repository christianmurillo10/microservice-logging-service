import { KafkaMessage } from "kafkajs";
import {
  EVENT_ROLE_CREATED,
  EVENT_ROLE_DELETED,
  EVENT_ROLE_UPDATED
} from "../../shared/constants/events.constant";
import { ActionValue } from "../../shared/types/common.type";
import LoggingService from "../../services/logging.service";

const roleConsumer = async (message: KafkaMessage) => {
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value) {
    return;
  };

  let action: ActionValue | null = null;

  switch (value.eventType) {
    case EVENT_ROLE_CREATED:
      action = "CREATE";
      break;
    case EVENT_ROLE_UPDATED:
      action = "UPDATE";
      break;
    case EVENT_ROLE_DELETED:
      action = "DELETE";
      break;
  };

  if (action) {
    const data = value.data;
    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: action,
      event_type: value.eventType,
      table_name: "roles",
      table_id: data.new_details.id,
      payload: data,
      header: {
        ip_address: message.headers!.ip_address!.toString(),
        user_agent: message.headers!.user_agent!.toString()
      },
      user_id: undefined,
      business_id: data.new_details.business_id ?? undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully logged role updates.`);
  };
};

export default roleConsumer;