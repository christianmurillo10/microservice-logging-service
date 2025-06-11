import { KafkaMessage } from "kafkajs";
import {
  EVENT_BUSINESS_BULK_DELETED,
  EVENT_BUSINESS_CREATED,
  EVENT_BUSINESS_DELETED,
  EVENT_BUSINESS_UPDATED
} from "../../../shared/constants/events.constant";
import subscribeBusinessCreated from "./business-created.consumer";
import subscribeBusinessUpdated from "./business-updated.consumer";
import subscribeBusinessDeleted from "./business-deleted.consumer";
import subscribeBusinessBulkDeleted from "./business-bulk-deleted.consumer";

const businessConsumer = async (message: KafkaMessage) => {
  const value = JSON.parse(message.value?.toString() ?? '{}');

  if (!value) {
    return;
  };

  const header = {
    ip_address: message.headers!.ip_address!.toString(),
    user_agent: message.headers!.user_agent!.toString()
  };

  switch (value.eventType) {
    case EVENT_BUSINESS_CREATED:
      await subscribeBusinessCreated(value.data, header);
      break;
    case EVENT_BUSINESS_UPDATED:
      await subscribeBusinessUpdated(value.data, header);
      break;
    case EVENT_BUSINESS_DELETED:
      await subscribeBusinessDeleted(value.data, header);
      break;
    case EVENT_BUSINESS_BULK_DELETED:
      await subscribeBusinessBulkDeleted(value.data, header);
      break;
  };
};

export default businessConsumer;