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
    const existingUser = await usersService.getById({ id: userId })
      .catch(err => {
        if (err instanceof NotFoundException) {
          console.log(`User ${userId} not exist!`);
          return;
        }

        throw err;
      });

    if (!existingUser) {
      return;
    }

    const user = new UsersModel({
      ...existingUser,
      deleted_at: new Date()
    });
    const newUser = await usersService.update(user)
      .catch(err => {
        console.log("Error on deleting users", err);
      });

    if (!newUser) {
      return;
    }

    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: "DELETE_MANY",
      event_type: EVENT_USER_BULK_DELETED,
      table_name: "users",
      table_id: existingUser.id!,
      payload: {
        old_details: {
          id: existingUser.id,
          deleted_at: existingUser.deleted_at
        },
        new_details: {
          id: newUser.id,
          deleted_at: newUser.deleted_at
        }
      },
      header: {
        ip_address: header.ip_address,
        user_agent: header.user_agent
      },
      user_id: newUser.id!,
      business_id: newUser.business_id ?? undefined
    });
    await loggingService.execute();
  }

  console.info("Event Notification: Successfully bulk deleted users.");
};

export default subscribeUserBulkDeleted;