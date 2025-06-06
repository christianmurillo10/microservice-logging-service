import { EachMessagePayload } from "kafkajs";
import KafkaService from "../../services/kafka.service";
import kafkaConfig from "../../config/kafka.config";
import {
  EVENT_ROLE,
  EVENT_ROLE_CREATED,
  EVENT_ROLE_DELETED,
  EVENT_ROLE_UPDATED
} from "../../shared/constants/events.constant";
import { ActionValue } from "../../shared/types/common.type";
import LoggingService from "../../services/logging.service";

export default class RoleKafkaConsumer {
  private kafkaService: KafkaService;

  constructor() {
    this.kafkaService = new KafkaService({
      clientId: kafkaConfig.kafka_client_id,
      brokers: [kafkaConfig.kafka_broker]
    });
  };

  private eachMessageHandler = async (payload: EachMessagePayload) => {
    const { message, heartbeat } = payload;
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
    }

    await heartbeat();
  };

  execute = async (): Promise<void> => {
    await this.kafkaService.initializeConsumer(
      EVENT_ROLE,
      kafkaConfig.kafka_group_id,
      this.eachMessageHandler
    );
  };
};