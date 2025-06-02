import AuditTrailsModel from "../models/audit-trails.model";
import EventLogsModel from "../models/event-logs.model";
import UserActionsModel from "../models/user-actions.model";
import { ActionValue, EventMessageData, ServiceNameValue } from "../shared/types/common.type";
import AuditTrailsService from "./audit-trails.service";
import EventLogsService from "./event-logs.service";
import UserActionsService from "./user-actions.service";

type Header = {
  ip_address: string,
  user_agent: string
};

export type Input = {
  service_name: ServiceNameValue
  action: ActionValue,
  event_type: string,
  payload: EventMessageData<unknown>,
  header: Header,
  user_id: string,
  business_id?: number
};

export default class LoggingService {
  private input: Input;
  private eventLogsService: EventLogsService;
  private auditTrailsService: AuditTrailsService;
  private userActionsService: UserActionsService;

  constructor(input: Input) {
    this.input = input;
    this.eventLogsService = new EventLogsService();
    this.auditTrailsService = new AuditTrailsService();
    this.userActionsService = new UserActionsService();
  };

  private saveEventLogs = async () => {
    const { service_name, event_type, payload, business_id } = this.input;
    const eventLogs = {
      service_name: service_name,
      event_type: event_type,
      payload: payload,
      business_id: business_id,
      created_at: new Date()
    } as EventLogsModel;

    await this.eventLogsService.save(eventLogs)
      .catch(err => {
        console.log("Error on saving event logs", err);
      });
  };

  private saveAuditTrails = async () => {
    const { service_name, action, payload, user_id, business_id } = this.input;
    const auditTrails = {
      service_name: service_name,
      entity_type: "users",
      entity_id: user_id,
      action: action,
      old_details: payload.old_details,
      new_details: payload.new_details,
      business_id: business_id,
      created_user_id: user_id,
      created_at: new Date()
    } as AuditTrailsModel;

    await this.auditTrailsService.save(auditTrails)
      .catch(err => {
        console.log("Error on saving audit trails", err);
      });
  };

  private saveUserActions = async () => {
    const { service_name, action, payload, header, user_id, business_id } = this.input;
    const userActions = {
      service_name: service_name,
      action: action,
      action_details: payload.new_details,
      ip_address: header.ip_address,
      user_agent: header.user_agent,
      business_id: business_id,
      user_id: user_id,
      created_at: new Date()
    } as UserActionsModel;

    await this.userActionsService.save(userActions)
      .catch(err => {
        console.log("Error on saving user actions", err);
      });
  };

  execute = async (): Promise<void> => {
    await this.saveEventLogs();
    await this.saveAuditTrails();
    await this.saveUserActions();
  };
};