import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import BusinessService from "../../business.service";
import BusinessModel from "../../../models/business.model";
import LoggingService from "../../logging.service";

export default class BusinessCreatedEventListenerService extends EventListenerAbstract<BusinessModel> implements EventListenerService<BusinessModel> {
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

    const business = new BusinessModel(this.state.value.newDetails);
    const newBusiness = await this.businessService.create(business)
      .catch(err => {
        console.log("Error on creating business", err);
        return null;
      });

    if (!newBusiness) {
      return;
    }

    const loggingService = new LoggingService({
      serviceName: "USER_SERVICE",
      action: "CREATE",
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

    console.info(`Event Notification: Successfully created business ${newBusiness.id}.`);
  };
};