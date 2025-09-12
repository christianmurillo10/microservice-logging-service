import {
  EVENT_ORGANIZATION_BULK_DELETED,
  EVENT_ORGANIZATION_CREATED,
  EVENT_ORGANIZATION_DELETED,
  EVENT_ORGANIZATION_UPDATED
} from "../../../shared/constants/events.constant";
import InvalidEventTypeEventListenerService from "../invalid-event-type.service";
import OrganizationBulkDeletedEventListenerService from "./organization-bulk-deleted.service";
import OrganizationCreatedEventListenerService from "./organization-created.service";
import OrganizationDeletedEventListenerService from "./organization-deleted.service";
import OrganizationUpdatedEventListenerService from "./organization-updated.service";

export default class OrganizationEventListenerServiceFactory {
  public static createInstance(type: string) {
    switch (type) {
      case EVENT_ORGANIZATION_CREATED:
        return new OrganizationCreatedEventListenerService();
      case EVENT_ORGANIZATION_UPDATED:
        return new OrganizationUpdatedEventListenerService();
      case EVENT_ORGANIZATION_DELETED:
        return new OrganizationDeletedEventListenerService();
      case EVENT_ORGANIZATION_BULK_DELETED:
        return new OrganizationBulkDeletedEventListenerService();
      default:
        return new InvalidEventTypeEventListenerService();
    };
  };
};