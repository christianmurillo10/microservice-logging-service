import { Message } from "kafkajs";
import EventLogs from "../../../models/event-logs.model";
import AuditTrails from "../../../models/audit-trails.model";
import UserActions from "../../../models/user-actions.model";
import UsersService from "../../../services/users.service";
import EventLogsService from "../../../services/event-logs.service";
import AuditTrailsService from "../../../services/audit-trails.service";
import UserActionsService from "../../../services/user-actions.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";

const usersService = new UsersService();
const eventLogsService = new EventLogsService();
const auditTrailsService = new AuditTrailsService();
const userActionsService = new UserActionsService();

const subscribeUserLoggedIn = async (message: Message): Promise<void> => {
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
  const eventLogs = {
    service_name: "AUTH_SERVICE",
    event_type: message.key!.toString(),
    payload: value,
    business_id: record?.business_id,
    created_at: new Date()
  } as EventLogs;
  await eventLogsService.save(eventLogs)
    .catch(err => {
      console.log("Error on saving event logs", err);
    });

  // Saving record in Audit Trails
  const auditTrails = {
    service_name: "AUTH_SERVICE",
    entity_type: "users",
    entity_id: value.id,
    action: "LOGIN",
    old_details: {},
    new_details: value,
    business_id: record?.business_id,
    created_user_id: value.id,
    created_at: new Date()
  } as AuditTrails;
  await auditTrailsService.save(auditTrails)
    .catch(err => {
      console.log("Error on saving audit trails", err);
    });

  // Saving record in User Actions
  const userActions = {
    service_name: "AUTH_SERVICE",
    action: "LOGIN",
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

  console.info(`Event Notification: Successfully logged in user ${record.id}.`);
};

export default subscribeUserLoggedIn;