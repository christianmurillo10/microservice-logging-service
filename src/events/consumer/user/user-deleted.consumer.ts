import { Message } from "kafkajs";
import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import LoggingService from "../../../services/logging.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";

const usersService = new UsersService();

const subscribeUserDeleted = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const userId = value.new_details.id;
  const record = await usersService.getById(userId)
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
    id: value.new_details.id,
    name: value.new_details.name,
    username: value.new_details.username,
    email: value.new_details.email,
    access_type: value.new_details.access_type,
    business_id: value.new_details.business_id,
    created_at: value.new_details.created_at,
    updated_at: value.new_details.updated_at,
    deleted_at: value.new_details.deleted_at,
  } as UsersModel;

  const newRecord = await usersService.save(data)
    .catch(err => {
      console.log("Error on deleting users", err);
      return null;
    });

  if (!newRecord) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "UPDATE",
    event_type: message.key!.toString(),
    payload: value,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: newRecord.id!,
    business_id: newRecord.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully deleted user ${data.id}.`);
};

export default subscribeUserDeleted;