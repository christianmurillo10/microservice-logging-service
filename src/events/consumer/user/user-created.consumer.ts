import { Message } from "kafkajs";
import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import LoggingService from "../../../services/logging.service";

const usersService = new UsersService();

const subscribeUserCreated = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const data = {
    id: value.new_details.id,
    name: value.new_details.name,
    username: value.new_details.username,
    email: value.new_details.email,
    access_type: value.new_details.access_type,
    business_id: value.new_details.business_id,
    created_at: value.new_details.created_at,
    updated_at: value.new_details.updated_at,
  } as UsersModel;

  const record = await usersService.save(data)
    .catch(err => {
      console.log("Error on creating users", err);
      return null;
    });

  if (!record) {
    return;
  }

  const loggingService = new LoggingService({
    service_name: "USER_SERVICE",
    action: "CREATE",
    event_type: message.key!.toString(),
    table_name: "users",
    table_id: value.new_details.id,
    payload: value,
    header: {
      ip_address: message.headers!.ip_address!.toString(),
      user_agent: message.headers!.user_agent!.toString()
    },
    user_id: record.id!,
    business_id: record.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully created user ${record.id}.`);
};

export default subscribeUserCreated;