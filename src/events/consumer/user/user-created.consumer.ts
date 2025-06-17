import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_CREATED } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserCreated = async (
  user_id: string,
  value: EventMessageData<UsersModel>,
  header: Header
): Promise<void> => {
  const user = new UsersModel(value.new_details);
  const newUser = await usersService.create(user)
    .catch(err => {
      console.log("Error on creating users", err);
      return null;
    });

  if (!newUser) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "CREATE",
    event_type: EVENT_USER_CREATED,
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

  console.info(`Event Notification: Successfully created user ${newUser.id}.`);
};

export default subscribeUserCreated;