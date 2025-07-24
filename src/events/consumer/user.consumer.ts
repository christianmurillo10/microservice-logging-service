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
    eventType: value.eventType,
    userId,
    value: value.data,
    header: {
      ipAddress: message.headers!.ipAddress!.toString(),
      userAgent: message.headers!.userAgent!.toString()
    }
  });
  await intance.execute();
};

export default userConsumer;