import { EachMessagePayload } from "kafkajs";
import KafkaService from "../../../services/kafka.service";
import kafkaConfig from "../../../config/kafka.config";
import {
  EVENT_USER,
  EVENT_USER_CREATED,
  EVENT_USER_DELETED,
  EVENT_USER_LOGGED_IN,
  EVENT_USER_LOGGED_OUT,
  EVENT_USER_UPDATED
} from "../../../shared/constants/events.constant";
import subscribeUserLoggedIn from "./user-logged-in.consumer";
import subscribeUserLoggedOut from "./user-logged-out.consumer";
import subscribeUserCreated from "./user-created.consumer";
import subscribeUserUpdated from "./user-updated.consumer";
import subscribeUserDeleted from "./user-deleted.consumer";

export default class UserKafkaConsumer {
  private kafkaService: KafkaService;

  constructor() {
    this.kafkaService = new KafkaService({
      clientId: kafkaConfig.kafka_client_id,
      brokers: [kafkaConfig.kafka_broker]
    });
  };

  private eachMessageHandler = async (payload: EachMessagePayload) => {
    const { message, heartbeat } = payload;
    const value = JSON.parse(message.value?.toString() ?? '{}');

    if (!value) {
      return;
    };

    const header = {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    };

    switch (value.eventType) {
      case EVENT_USER_LOGGED_IN:
        await subscribeUserLoggedIn(value.data, header);
        break;
      case EVENT_USER_LOGGED_OUT:
        await subscribeUserLoggedOut(value.data, header);
        break;
      case EVENT_USER_CREATED:
        await subscribeUserCreated(value.data, header);
        break;
      case EVENT_USER_UPDATED:
        await subscribeUserUpdated(value.data, header);
        break;
      case EVENT_USER_DELETED:
        await subscribeUserDeleted(value.data, header);
        break;
    };

    await heartbeat();
  };

  execute = async (): Promise<void> => {
    await this.kafkaService.initializeConsumer(
      EVENT_USER,
      kafkaConfig.kafka_group_id,
      this.eachMessageHandler
    );
  };
};