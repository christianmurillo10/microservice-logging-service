import { KafkaMessage } from "kafkajs";
import RoleEventListenerService from "../../services/eventListener/role-event-listener.service";

const roleConsumer = async (message: KafkaMessage) => {
  const userId = message.key?.toString() ?? "";
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value && !userId) {
    return;
  };

  const intance = new RoleEventListenerService();
  intance.setState({
    eventType: value.eventType,
    userId,
    value: value.data,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    }
  });
  await intance.execute();
};

export default roleConsumer;