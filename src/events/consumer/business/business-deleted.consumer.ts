import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_BUSINESS_DELETED } from "../../../shared/constants/events.constant";

const businessService = new BusinessesService();

const subscribeBusinessDeleted = async (value: EventMessageData<BusinessesModel>, header: Header): Promise<void> => {
  const businessId = value.new_details.id!;
  const existingBusiness = await businessService.getById(businessId)
    .catch(err => {
      if (err instanceof NotFoundException) {
        console.log(`Business ${businessId} not exist!`);
        return;
      }

      throw err;
    });

  if (!existingBusiness) {
    return;
  }

  const business = new BusinessesModel({
    ...existingBusiness,
    deleted_at: value.new_details.deleted_at
  });
  const newBusiness = await businessService.update(business)
    .catch(err => {
      console.log("Error on deleting business", err);
      return null;
    });

  if (!newBusiness) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "DELETE",
    event_type: EVENT_BUSINESS_DELETED,
    table_name: "businesses",
    table_id: newBusiness.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id: undefined,
    business_id: undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully deleted business ${newBusiness.id}.`);
};

export default subscribeBusinessDeleted;