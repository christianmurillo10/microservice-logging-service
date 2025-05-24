import { Message } from "kafkajs";
import EventLogs from "../../../models/event-logs.model";
import UserActions from "../../../models/user-actions.model";
import UsersService from "../../../services/users.service";
import EventLogsService from "../../../services/event-logs.service";
import UserActionsService from "../../../services/user-actions.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";

const usersService = new UsersService();
const eventLogsService = new EventLogsService();
const userActionsService = new UserActionsService();

const subscribeUserLoggedOut = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const record = await usersService.getById(value.id)
    .catch(err => {
      if (err instanceof NotFoundException) {
        console.log(`User ${value.id} not exist!`);
        return;
      }

      throw err;
    });

  if (!record) {
    return;
  }

  // Saving record in Event Logs
  const data = {
    service_name: "AUTH_SERVICE",
    event_type: message.key!.toString(),
    payload: value,
    business_id: record?.business_id,
    created_at: new Date()
  } as EventLogs;
  await eventLogsService.save(data)
    .catch(err => {
      console.log("Error on saving event logs", err);
    });

  // Saving record in User Actions
  const userActions = {
    service_name: "AUTH_SERVICE",
    action: "LOGOUT",
    action_details: value,
    ip_address: "",
    user_agent: "",
    business_id: record?.business_id,
    session_id: "",
    user_id: value.id,
    created_at: new Date()
  } as UserActions;
  await userActionsService.save(userActions)
    .catch(err => {
      console.log("Error on saving user actions", err);
    });

  console.info(`Event Notification: Successfully logged out user ${record.id}.`);
};

export default subscribeUserLoggedOut;