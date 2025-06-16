import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_BUSINESS_CREATED } from "../../../shared/constants/events.constant";

const businessesService = new BusinessesService();

const subscribeBusinessCreated = async (value: EventMessageData<BusinessesModel>, header: Header): Promise<void> => {
  const data = new BusinessesModel(value.new_details);
  const record = await businessesService.create(data)
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
    event_type: EVENT_BUSINESS_CREATED,
    table_name: "businesses",
    table_id: record.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id: undefined,
    business_id: undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully created business ${record.id}.`);
};

export default subscribeBusinessCreated;