import { KafkaMessage } from "kafkajs";
import BusinessEventListenerServiceFactory from "../../services/eventListener/business/business-factory.service";

const businessConsumer = async (message: KafkaMessage) => {
  const userId = message.key?.toString() ?? "";
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value && !userId) {
    return;
  };

  const instance = BusinessEventListenerServiceFactory.createInstance(value.eventType);
  instance.setState({
    eventType: value.eventType,
    userId,
    value: value.data,
    header: {
      ipAddress: message.headers!.ipAddress!.toString(),
      userAgent: message.headers!.userAgent!.toString()
    }
  });
  await instance.execute();
};

export default businessConsumer;