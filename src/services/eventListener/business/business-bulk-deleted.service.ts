import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import BusinessesService from "../../businesses.service";
import BusinessesModel from "../../../models/businesses.model";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class BusinessBulkDeletedEventListenerService extends EventListenerAbstract<Record<string, number[]>> implements EventListenerService<Record<string, number[]>> {
  private businessesService: BusinessesService;

  constructor() {
    super();
    this.businessesService = new BusinessesService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const businessIds = this.state.value.new_details.ids!;

    for (const businessId of businessIds) {
      const existingBusiness = await this.businessesService.getById(businessId)
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
      const newBusiness = await this.businessesService.update(business)
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
        event_type: this.state.eventType,
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
          ip_address: this.state.header.ip_address,
          user_agent: this.state.header.user_agent
        },
        user_id: this.state.userId,
        business_id: undefined
      });
      await loggingService.execute();
    }

    console.info("Event Notification: Successfully bulk deleted business.");
  };
};