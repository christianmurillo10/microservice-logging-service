import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_LOGGED_IN } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserLoggedIn = async (value: EventMessageData<Record<string, any>>, header: Header): Promise<void> => {
  const userId = value.new_details.id;
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

  const loggingService = new LoggingService({
    service_name: "AUTH_SERVICE",
    action: "LOGIN",
    event_type: EVENT_USER_LOGGED_IN,
    table_name: "users",
    table_id: record.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id: userId,
    business_id: record.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully logged in user ${record.id}.`);
};

export default subscribeUserLoggedIn;