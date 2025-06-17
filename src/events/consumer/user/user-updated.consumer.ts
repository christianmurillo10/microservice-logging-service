import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_UPDATED } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserUpdated = async (
  user_id: string,
  value: EventMessageData<UsersModel>,
  header: Header
): Promise<void> => {
  const userId = value.new_details.id!;
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
    ...value.new_details
  });
  const newUser = await usersService.update(user)
    .catch(err => {
      console.log("Error on updating users", err);
      return null;
    });

  if (!newUser) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "UPDATE",
    event_type: EVENT_USER_UPDATED,
    table_name: "users",
    table_id: newUser.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id,
    business_id: newUser.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully updated user ${newUser.id}.`);
};

export default subscribeUserUpdated;