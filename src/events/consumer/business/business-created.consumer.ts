import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_BUSINESS_CREATED } from "../../../shared/constants/events.constant";

const businessesService = new BusinessesService();

const subscribeBusinessCreated = async (
  user_id: string,
  value: EventMessageData<BusinessesModel>,
  header: Header
): Promise<void> => {
  const business = new BusinessesModel(value.new_details);
  const newBusiness = await businessesService.create(business)
    .catch(err => {
      console.log("Error on creating businesses", err);
      return null;
    });

  if (!newBusiness) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "CREATE",
    event_type: EVENT_BUSINESS_CREATED,
    table_name: "businesses",
    table_id: newBusiness.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id,
    business_id: undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully created business ${newBusiness.id}.`);
};

export default subscribeBusinessCreated;