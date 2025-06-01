import { Message } from "kafkajs";
import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";

const usersService = new UsersService();

const subscribeUserCreated = async (message: Message): Promise<void> => {
  const value = JSON.parse(message.value?.toString() ?? '{}');
  const data = {
    id: value.id,
    name: value.name,
    username: value.username,
    email: value.email,
    access_type: value.access_type,
    business_id: value.business_id,
    created_at: value.created_at,
    updated_at: value.updated_at,
  } as UsersModel;

  await usersService.save(data)
    .catch(err => {
      console.log("Error on creating users", err);
    });
  console.info(`Event Notification: Successfully created user ${data.id}.`);
};

export default subscribeUserCreated;