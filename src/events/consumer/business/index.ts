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

    if (!message.key) {
      return;
    };

    switch (message.key.toString()) {
      case EVENT_BUSINESS_CREATED:
        await subscribeBusinessCreated(message);
        break;
      case EVENT_BUSINESS_UPDATED:
        await subscribeBusinessUpdated(message);
        break;
      case EVENT_BUSINESS_DELETED:
        await subscribeBusinessDeleted(message);
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