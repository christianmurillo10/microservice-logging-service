import { KafkaMessage } from "kafkajs";
import UserEventListenerServiceFactory from "../../services/eventListener/user/user-factory.service";

const userConsumer = async (message: KafkaMessage) => {
  const userId = message.key?.toString() ?? "";
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value && !userId) {
    return;
  };

  const intance = UserEventListenerServiceFactory.createInstance(value.eventType);
  intance.setState({
    userId,
    value: value.data,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    }
  });
  await intance.execute();
};

export default userConsumer;