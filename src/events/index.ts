import KafkaService from "../services/kafka.service";
import UserKafkaConsumer from "./consumer/user";
import kafkaConfig from "../config/kafka.config";
import { EVENT_USER } from "../shared/constants/events.constant";
import BusinessKafkaConsumer from "./consumer/business";
import RoleKafkaConsumer from "./consumer/roles.consumer";

export default class KafkaServer {
  static listen = async () => {
    // Consumers
    const userConsumer = new UserKafkaConsumer();
    await userConsumer.execute();

    const businessConsumer = new BusinessKafkaConsumer();
    await businessConsumer.execute();

    const roleConsumer = new RoleKafkaConsumer();
    await roleConsumer.execute();
  };

  static disconnect = async () => {
    const kafkaService = new KafkaService({
      clientId: kafkaConfig.kafka_client_id,
      brokers: [kafkaConfig.kafka_broker]
    });
    await kafkaService.disconnectProducer();
    await kafkaService.disconnectConsumer(EVENT_USER);
  };
};