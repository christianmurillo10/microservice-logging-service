import { Message } from "kafkajs";
import UsersService from "../../../services/users.service";
import EventLogsService from "../../../services/event-logs.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";

const usersService = new UsersService();
const eventLogsService = new EventLogsService();

const subscribeUserLoggedIn = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const record = await usersService.getById(value.id)
    .catch(err => {
      if (err instanceof NotFoundException) {
        console.log(`User ${value.id} not exist!`);
      }

      throw err;
    });

  await eventLogsService.save({
    service_name: "AUTH_SERVICE",
    event_type: "user-logged-in",
    payload: value,
    business_id: record?.business_id ?? undefined,
    created_at: new Date()
  });
  console.info(`Event Notification: Successfully logged in user ${record.id}.`);
};

export default subscribeUserLoggedIn;