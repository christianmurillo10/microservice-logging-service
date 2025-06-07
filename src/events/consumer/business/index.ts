import { EachMessagePayload } from "kafkajs";
import KafkaService from "../../../services/kafka.service";
import kafkaConfig from "../../../config/kafka.config";
import {
  EVENT_BUSINESS,
  EVENT_BUSINESS_CREATED,
  EVENT_BUSINESS_DELETED,
  EVENT_BUSINESS_UPDATED
} from "../../../shared/constants/events.constant";
import subscribeBusinessCreated from "./business-created.consumer";
import subscribeBusinessUpdated from "./business-updated.consumer";
import subscribeBusinessDeleted from "./business-deleted.consumer";

export default class BusinessKafkaConsumer {
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

    const header = {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    };

    switch (value.eventType) {
      case EVENT_BUSINESS_CREATED:
        await subscribeBusinessCreated(value.data, header);
        break;
      case EVENT_BUSINESS_UPDATED:
        await subscribeBusinessUpdated(value.data, header);
        break;
      case EVENT_BUSINESS_DELETED:
        await subscribeBusinessDeleted(value.data, header);
        break;
    };

    await heartbeat();
  };

  execute = async (): Promise<void> => {
    await this.kafkaService.initializeConsumer(
      EVENT_BUSINESS,
      kafkaConfig.kafka_group_id,
      this.eachMessageHandler
    );
  };
};