import { KafkaMessage } from "kafkajs";
import {
  EVENT_USER_CREATED,
  EVENT_USER_DELETED,
  EVENT_USER_LOGGED_IN,
  EVENT_USER_LOGGED_OUT,
  EVENT_USER_PASSWORD_CHANGED,
  EVENT_USER_UPDATED
} from "../../../shared/constants/events.constant";
import subscribeUserLoggedIn from "./user-logged-in.consumer";
import subscribeUserLoggedOut from "./user-logged-out.consumer";
import subscribeUserCreated from "./user-created.consumer";
import subscribeUserUpdated from "./user-updated.consumer";
import subscribeUserDeleted from "./user-deleted.consumer";
import subscribeUserPasswordChanged from "./user-password-changed.consumer";

const userConsumer = async (message: KafkaMessage) => {
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
    case EVENT_USER_PASSWORD_CHANGED:
      await subscribeUserPasswordChanged(value.data, header);
      break;
  };
};

export default userConsumer;