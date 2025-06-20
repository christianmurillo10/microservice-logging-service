import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import BusinessesService from "../../businesses.service";
import BusinessesModel from "../../../models/businesses.model";
import LoggingService from "../../logging.service";
import { EVENT_BUSINESS_CREATED } from "../../../shared/constants/events.constant";

export default class BusinessCreatedEventListenerService extends EventListenerAbstract<BusinessesModel> implements EventListenerService<BusinessesModel> {
  businessesService: BusinessesService;

  constructor() {
    super();
    this.businessesService = new BusinessesService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const business = new BusinessesModel(this.state.value.new_details);
    const newBusiness = await this.businessesService.create(business)
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
      payload: this.state.value,
      header: {
        ip_address: this.state.header.ip_address,
        user_agent: this.state.header.user_agent
      },
      user_id: this.state.userId,
      business_id: undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully created business ${newBusiness.id}.`);
  };
};