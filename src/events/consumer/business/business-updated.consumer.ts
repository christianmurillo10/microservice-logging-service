import { Message } from "kafkajs";
import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import LoggingService from "../../../services/logging.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";

const businessesService = new BusinessesService();

const subscribeUserUpdated = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const businessId = value.new_details.id;
  const record = await businessesService.getById(businessId)
    .catch(err => {
      if (err instanceof NotFoundException) {
        console.log(`Business ${businessId} not exist!`);
        return;
      }

      throw err;
    });

  if (!record) {
    return;
  }

  const data = {
    ...record,
    id: value.new_details.id,
    name: value.new_details.name,
    api_key: value.new_details.api_key,
    domain: value.new_details.domain,
    preferred_timezone: value.new_details.preferred_timezone,
    currency: value.new_details.currency,
    created_at: value.new_details.created_at,
    updated_at: value.new_details.updated_at,
  } as BusinessesModel;

  const newRecord = await businessesService.save(data)
    .catch(err => {
      console.log("Error on updating businesses", err);
      return null;
    });

  if (!newRecord) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "UPDATE",
    event_type: message.key!.toString(),
    table_name: "businesses",
    table_id: value.new_details.id,
    payload: value,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: undefined,
    business_id: undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully updated business ${data.id}.`);
};

export default subscribeUserUpdated;