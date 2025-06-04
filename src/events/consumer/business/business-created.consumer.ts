import { Message } from "kafkajs";
import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import LoggingService from "../../../services/logging.service";

const businessesService = new BusinessesService();

const subscribeUserCreated = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const data = {
    id: value.new_details.id,
    name: value.new_details.name,
    api_key: value.new_details.api_key,
    domain: value.new_details.domain,
    preferred_timezone: value.new_details.preferred_timezone,
    currency: value.new_details.currency,
    created_at: value.new_details.created_at,
    updated_at: value.new_details.updated_at,
  } as BusinessesModel;

  const record = await businessesService.save(data)
    .catch(err => {
      console.log("Error on creating businesses", err);
      return null;
    });

  if (!record) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "CREATE",
    event_type: message.key!.toString(),
    entity_type: "users",
    entity_id: value.new_details.id,
    payload: value,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: undefined,
    business_id: undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully created business ${record.id}.`);
};

export default subscribeUserCreated;