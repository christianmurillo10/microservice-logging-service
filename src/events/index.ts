import KafkaService from "../services/kafka.service";
import kafkaConfig from "../config/kafka.config";
import KafkaConsumer from "./consumer";
import { EVENT_ORGANIZATION, EVENT_ROLE, EVENT_USER } from "../shared/constants/events.constant";

export default class KafkaServer {
  static listen = async () => {
    const kafkaConsumer = new KafkaConsumer([
      EVENT_USER,
      EVENT_ORGANIZATION,
      EVENT_ROLE
    ]);
    await kafkaConsumer.execute();
  };

  static disconnect = async () => {
    const kafkaService = new KafkaService({
      clientId: kafkaConfig.kafkaClientId,
      brokers: [kafkaConfig.kafkaBroker]
    });
    await kafkaService.disconnectProducer();
    await kafkaService.disconnectConsumer(EVENT_USER);
    await kafkaService.disconnectConsumer(EVENT_ORGANIZATION);
    await kafkaService.disconnectConsumer(EVENT_ROLE);
  };
};