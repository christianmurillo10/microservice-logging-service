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
    userId,
    value: value.data,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    }
  });
  await instance.execute();
};

export default businessConsumer;