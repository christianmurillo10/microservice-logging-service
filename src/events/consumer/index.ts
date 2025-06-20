import { EachMessagePayload } from "kafkajs";
import KafkaService from "../../services/kafka.service";
import kafkaConfig from "../../config/kafka.config";
import {
  EVENT_BUSINESS,
  EVENT_ROLE,
  EVENT_USER
} from "../../shared/constants/events.constant";
import userConsumer from "./user.consumer";
import businessConsumer from "./business";
import roleConsumer from "./role.consumer";

export default class KafkaConsumer {
  private kafkaService: KafkaService;
  private topics: string[];

  constructor(topics: string[]) {
    this.kafkaService = new KafkaService({
      clientId: kafkaConfig.kafka_client_id,
      brokers: [kafkaConfig.kafka_broker]
    });
    this.topics = topics;
  };

  private eachMessageHandler = async (payload: EachMessagePayload) => {
    const { topic, message, heartbeat } = payload;

    switch (topic) {
      case EVENT_USER:
        await userConsumer(message);
        break;
      case EVENT_BUSINESS:
        await businessConsumer(message);
        break;
      case EVENT_ROLE:
        await roleConsumer(message);
        break;
    };

    await heartbeat();
  };

  execute = async (): Promise<void> => {
    await this.kafkaService.initializeConsumer(
      this.topics,
      kafkaConfig.kafka_group_id,
      this.eachMessageHandler
    );
  };
};