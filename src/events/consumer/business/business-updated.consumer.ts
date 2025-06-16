import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_BUSINESS_UPDATED } from "../../../shared/constants/events.constant";

const businessesService = new BusinessesService();

const subscribeBusinessUpdated = async (value: EventMessageData<BusinessesModel>, header: Header): Promise<void> => {
  const businessId = value.new_details.id!;
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

  const data = new BusinessesModel({
    ...record,
    ...value.new_details
  });
  const newRecord = await businessesService.update(data)
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
    event_type: EVENT_BUSINESS_UPDATED,
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

  console.info(`Event Notification: Successfully updated business ${data.id}.`);
};

export default subscribeBusinessUpdated;