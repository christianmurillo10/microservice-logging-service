import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import BusinessService from "../../business.service";
import BusinessModel from "../../../models/business.model";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class BusinessUpdatedEventListenerService extends EventListenerAbstract<BusinessModel> implements EventListenerService<BusinessModel> {
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

    const businessId = this.state.value.newDetails.id!;
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
      ...this.state.value.newDetails
    });
    const newBusiness = await this.businessService.update(business)
      .catch(err => {
        console.log("Error on updating business", err);
        return null;
      });

    if (!newBusiness) {
      return;
    }

    const loggingService = new LoggingService({
      serviceName: "USER_SERVICE",
      action: "UPDATE",
      eventType: this.state.eventType,
      tableName: "business",
      tableId: newBusiness.id!,
      payload: this.state.value,
      header: {
        ipAddress: this.state.header.ipAddress,
        userAgent: this.state.header.userAgent
      },
      userId: this.state.userId,
      businessId: undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully updated business ${newBusiness.id}.`);
  };
};