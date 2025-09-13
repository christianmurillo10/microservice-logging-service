import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import OrganizationService from "../../organization.service";
import OrganizationModel from "../../../entities/organization.entity";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class OrganizationBulkDeletedEventListenerService extends EventListenerAbstract<Record<string, string[]>> implements EventListenerService<Record<string, string[]>> {
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

    const organizationIds = this.state.value.newDetails.ids!;

    for (const organizationId of organizationIds) {
      const existingOrganization = await this.organizationService.getById(organizationId)
        .catch(err => {
          if (err instanceof NotFoundException) {
            console.log(`Organization ${organizationId} not exist!`);
            return;
          }

          throw err;
        });

      if (!existingOrganization) {
        return;
      }

      const organization = new OrganizationModel({
        ...existingOrganization,
        deletedAt: new Date()
      });
      const newOrganization = await this.organizationService.update(organization)
        .catch(err => {
          console.log("Error on deleting organization", err);
          return null;
        });

      if (!newOrganization) {
        return;
      }

      const loggingService = new LoggingService({
        serviceName: "USER_SERVICE",
        action: "DELETE_MANY",
        eventType: this.state.eventType,
        tableName: "organization",
        tableId: newOrganization.id!,
        payload: {
          oldDetails: {
            id: existingOrganization.id,
            deletedAt: existingOrganization.deletedAt
          },
          newDetails: {
            id: newOrganization.id,
            deletedAt: newOrganization.deletedAt
          }
        },
        header: {
          ipAddress: this.state.header.ipAddress,
          userAgent: this.state.header.userAgent
        },
        userId: this.state.userId,
        organizationId: undefined
      });
      await loggingService.execute();
    }

    console.info("Event Notification: Successfully bulk deleted organization.");
  };
};