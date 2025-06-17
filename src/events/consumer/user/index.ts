import { KafkaMessage } from "kafkajs";
import {
  EVENT_USER_BULK_DELETED,
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
import subscribeUserBulkDeleted from "./user-bulk-deleted.consumer";
import subscribeUserPasswordChanged from "./user-password-changed.consumer";

const userConsumer = async (message: KafkaMessage) => {
  const userId = message.key?.toString() ?? "";
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value && !userId) {
    return;
  };

  const header = {
    ip_address: message.headers!.ip_address!.toString(),
    user_agent: message.headers!.user_agent!.toString()
  };

  switch (value.eventType) {
    case EVENT_USER_LOGGED_IN:
      await subscribeUserLoggedIn(userId, value.data, header);
      break;
    case EVENT_USER_LOGGED_OUT:
      await subscribeUserLoggedOut(userId, value.data, header);
      break;
    case EVENT_USER_CREATED:
      await subscribeUserCreated(userId, value.data, header);
      break;
    case EVENT_USER_UPDATED:
      await subscribeUserUpdated(userId, value.data, header);
      break;
    case EVENT_USER_DELETED:
      await subscribeUserDeleted(userId, value.data, header);
      break;
    case EVENT_USER_BULK_DELETED:
      await subscribeUserBulkDeleted(userId, value.data, header);
      break;
    case EVENT_USER_PASSWORD_CHANGED:
      await subscribeUserPasswordChanged(userId, value.data, header);
      break;
  };
};

export default userConsumer;