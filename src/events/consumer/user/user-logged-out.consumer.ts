import { Message } from "kafkajs";
import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import { EventMessageData } from "../../../shared/types/common.type";
import { UserLoggedOut } from "../../../shared/types/events/users.type";
import LoggingService from "../../../services/logging.service";

const usersService = new UsersService();

const subscribeUserLoggedOut = async (message: Message): Promise<void> => {
  const value: EventMessageData<UserLoggedOut> = JSON.parse(message.value?.toString() ?? '{}');
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
    action: "LOGOUT",
    event_type: message.key!.toString(),
    payload: value,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: userId,
    business_id: record.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully logged out user ${record.id}.`);
};

export default subscribeUserLoggedOut;