import { Message } from "kafkajs";
import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../../services/logging.service";

const usersService = new UsersService();

const subscribeUserUpdated = async (message: Message): Promise<void> => {
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

  const data = {
    ...record,
    id: value.id,
    name: value.name,
    username: value.username,
    email: value.email,
    access_type: value.access_type,
    business_id: value.business_id,
    created_at: value.created_at,
    updated_at: value.updated_at,
  } as UsersModel;

  const newValue = await usersService.save(data)
    .catch(err => {
      console.log("Error on updating users", err);
    });

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "UPDATE",
    event_type: message.key!.toString(),
    payload: {
      old_details: record,
      new_details: newValue
    },
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: record.id!,
    business_id: record.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully updated user ${data.id}.`);
};

export default subscribeUserUpdated;