import BusinessesModel from "../../../models/businesses.model";
import BusinessesService from "../../../services/businesses.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_BULK_DELETED } from "../../../shared/constants/events.constant";

const businessService = new BusinessesService();

const subscribeBusinessBulkDeleted = async (value: EventMessageData<Record<string, number[]>>, header: Header): Promise<void> => {
  const businessIds = value.new_details.ids!;

  for (const businessId of businessIds) {
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
      deleted_at: new Date()
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
      action: "DELETE_MANY",
      event_type: EVENT_USER_BULK_DELETED,
      table_name: "businesses",
      table_id: newBusiness.id!,
      payload: {
        old_details: {
          id: existingBusiness.id,
          deleted_at: existingBusiness.deleted_at
        },
        new_details: {
          id: newBusiness.id,
          deleted_at: newBusiness.deleted_at
        }
      },
      header: {
        ip_address: header.ip_address,
        user_agent: header.user_agent
      },
      user_id: undefined,
      business_id: undefined
    });
    await loggingService.execute();
  }

  console.info("Event Notification: Successfully bulk deleted business.");
};

export default subscribeBusinessBulkDeleted;