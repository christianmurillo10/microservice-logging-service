import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import OrganizationService from "../../organization.service";
import OrganizationModel from "../../../models/organization.model";
import LoggingService from "../../logging.service";

export default class OrganizationCreatedEventListenerService extends EventListenerAbstract<OrganizationModel> implements EventListenerService<OrganizationModel> {
  private organizationService: OrganizationService;

  constructor() {
    super();
    this.organizationService = new OrganizationService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const organization = new OrganizationModel(this.state.value.newDetails);
    const newOrganization = await this.organizationService.create(organization)
      .catch(err => {
        console.log("Error on creating organization", err);
        return null;
      });

    if (!newOrganization) {
      return;
    }

    const loggingService = new LoggingService({
      serviceName: "USER_SERVICE",
      action: "CREATE",
      eventType: this.state.eventType,
      tableName: "organization",
      tableId: newOrganization.id!,
      payload: this.state.value,
      header: {
        ipAddress: this.state.header.ipAddress,
        userAgent: this.state.header.userAgent
      },
      userId: this.state.userId,
      organizationId: undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully created organization ${newOrganization.id}.`);
  };
};