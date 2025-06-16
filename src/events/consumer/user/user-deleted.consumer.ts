import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_DELETED } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserDeleted = async (value: EventMessageData<UsersModel>, header: Header): Promise<void> => {
  const userId = value.new_details.id!;
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
    deleted_at: value.new_details.deleted_at,
  } as UsersModel;

  const newRecord = await usersService.update(data)
    .catch(err => {
      console.log("Error on deleting users", err);
      return null;
    });

  if (!newRecord) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "DELETE",
    event_type: EVENT_USER_DELETED,
    table_name: "users",
    table_id: record.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id: newRecord.id!,
    business_id: newRecord.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully deleted user ${data.id}.`);
};

export default subscribeUserDeleted;