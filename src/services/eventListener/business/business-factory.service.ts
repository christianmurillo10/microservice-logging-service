import {
  EVENT_BUSINESS_BULK_DELETED,
  EVENT_BUSINESS_CREATED,
  EVENT_BUSINESS_DELETED,
  EVENT_BUSINESS_UPDATED
} from "../../../shared/constants/events.constant";
import InvalidEventTypeEventListenerService from "../invalid-event-type.service";
import BusinessBulkDeletedEventListenerService from "./business-bulk-deleted.service";
import BusinessCreatedEventListenerService from "./business-created.service";
import BusinessDeletedEventListenerService from "./business-deleted.service";
import BusinessUpdatedEventListenerService from "./business-updated.service";

export default class BusinessEventListenerServiceFactory {
  public static createInstance(type: string) {
    switch (type) {
      case EVENT_BUSINESS_CREATED:
        return new BusinessCreatedEventListenerService();
      case EVENT_BUSINESS_UPDATED:
        return new BusinessUpdatedEventListenerService();
      case EVENT_BUSINESS_DELETED:
        return new BusinessDeletedEventListenerService();
      case EVENT_BUSINESS_BULK_DELETED:
        return new BusinessBulkDeletedEventListenerService();
      default:
        return new InvalidEventTypeEventListenerService();
    };
  };
};