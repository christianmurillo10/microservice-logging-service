import { KafkaMessage } from "kafkajs";
import OrganizationEventListenerServiceFactory from "../../services/eventListener/organization/organization-factory.service";

const organizationConsumer = async (message: KafkaMessage) => {
  const userId = message.key?.toString() ?? "";
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value && !userId) {
    return;
  };

  const instance = OrganizationEventListenerServiceFactory.createInstance(value.eventType);
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

export default organizationConsumer;