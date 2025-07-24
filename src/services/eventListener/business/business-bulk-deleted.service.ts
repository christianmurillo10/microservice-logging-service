import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import BusinessService from "../../business.service";
import BusinessModel from "../../../models/business.model";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class BusinessBulkDeletedEventListenerService extends EventListenerAbstract<Record<string, number[]>> implements EventListenerService<Record<string, number[]>> {
  private businessService: BusinessService;

  constructor() {
    super();
    this.businessService = new BusinessService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const businessIds = this.state.value.newDetails.ids!;

    for (const businessId of businessIds) {
      const existingBusiness = await this.businessService.getById(businessId)
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

      const business = new BusinessModel({
        ...existingBusiness,
        deletedAt: new Date()
      });
      const newBusiness = await this.businessService.update(business)
        .catch(err => {
          console.log("Error on deleting business", err);
          return null;
        });

      if (!newBusiness) {
        return;
      }

      const loggingService = new LoggingService({
        serviceName: "USER_SERVICE",
        action: "DELETE_MANY",
        eventType: this.state.eventType,
        tableName: "business",
        tableId: newBusiness.id!,
        payload: {
          oldDetails: {
            id: existingBusiness.id,
            deletedAt: existingBusiness.deletedAt
          },
          newDetails: {
            id: newBusiness.id,
            deletedAt: newBusiness.deletedAt
          }
        },
        header: {
          ipAddress: this.state.header.ipAddress,
          userAgent: this.state.header.userAgent
        },
        userId: this.state.userId,
        businessId: undefined
      });
      await loggingService.execute();
    }

    console.info("Event Notification: Successfully bulk deleted business.");
  };
};