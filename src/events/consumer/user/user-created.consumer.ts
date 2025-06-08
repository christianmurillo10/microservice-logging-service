import UsersModel from "../../../models/users.model";
import UsersService from "../../../services/users.service";
import LoggingService, { Header } from "../../../services/logging.service";
import { EventMessageData } from "../../../shared/types/common.type";
import { EVENT_USER_CREATED } from "../../../shared/constants/events.constant";

const usersService = new UsersService();

const subscribeUserCreated = async (value: EventMessageData<UsersModel>, header: Header): Promise<void> => {
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

  const record = await usersService.create(data)
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
    event_type: EVENT_USER_CREATED,
    table_name: "users",
    table_id: record.id!,
    payload: value,
    header: {
      ip_address: header.ip_address,
      user_agent: header.user_agent
    },
    user_id: record.id!,
    business_id: record.business_id ?? undefined
  });
  await loggingService.execute();

  console.info(`Event Notification: Successfully created user ${record.id}.`);
};

export default subscribeUserCreated;