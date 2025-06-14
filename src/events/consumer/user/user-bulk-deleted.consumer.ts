import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_BULK_DELETED } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserBulkDeleted = async (value: EventMessageData<Record<string, string[]>>, header: Header): Promise<void> => {
  const userIds = value.new_details.ids!;

  for (const userId of userIds) {
    const record = await usersService.getById({ id: userId })
      .catch(err => {
        if (err instanceof NotFoundException) {
          console.log(`User ${userId} not exist!`);
          return;
        }

        throw err;
      });

    if (!record) {
      return;
    }

    const data = {
      ...record,
      deleted_at: new Date(),
    } as UsersModel;

    const newRecord = await usersService.update(data)
      .catch(err => {
        console.log("Error on deleting users", err);
      });

    if (!newRecord) {
      return;
    }

    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: "DELETE_MANY",
      event_type: EVENT_USER_BULK_DELETED,
      table_name: "users",
      table_id: record.id!,
      payload: {
        old_details: {
          id: record.id,
          deleted_at: record.deleted_at
        },
        new_details: {
          id: newRecord.id,
          deleted_at: newRecord.deleted_at
        }
      },
      header: {
        ip_address: header.ip_address,
        user_agent: header.user_agent
      },
      user_id: newRecord.id!,
      business_id: newRecord.business_id ?? undefined
    });
    await loggingService.execute();
  }

  console.info("Event Notification: Successfully bulk deleted users.");
};

export default subscribeUserBulkDeleted;