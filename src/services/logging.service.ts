import AuditTrailEntity from "../entities/audit-trail.entity";
import EventLogEntity from "../entities/event-log.entity";
import UserActionEntity from "../entities/user-action.entity";
import { ActionValue, EventMessageData, ServiceNameValue } from "../shared/types/common.type";
import AuditTrailService from "./audit-trail.service";
import EventLogService from "./event-log.service";
import UserActionService from "./user-action.service";

export type Header = {
  ipAddress: string,
  userAgent: string
};

export type Input = {
  serviceName: ServiceNameValue
  action: ActionValue,
  eventType: string,
  tableName: string,
  tableId: string | number,
  payload: EventMessageData<unknown>,
  header: Header,
  userId?: string,
  organizationId?: string
};

export default class LoggingService {
  private input: Input;
  private eventLogService: EventLogService;
  private auditTrailService: AuditTrailService;
  private userActionService: UserActionService;

  constructor(input: Input) {
    this.input = input;
    this.eventLogService = new EventLogService();
    this.auditTrailService = new AuditTrailService();
    this.userActionService = new UserActionService();
  };

  private saveEventLog = async () => {
    const { serviceName, eventType, payload, organizationId } = this.input;
    const eventLog = {
      serviceName: serviceName,
      eventType: eventType,
      payload: payload,
      organizationId: organizationId ?? null,
      createdAt: new Date()
    } as EventLogEntity;

    await this.eventLogService.save(eventLog)
      .catch(err => {
        console.log("Error on saving event logs", err);
      });
  };

  private saveAuditTrail = async () => {
    const { serviceName, action, tableName, tableId, payload, userId, organizationId } = this.input;
    const auditTrail = {
      serviceName: serviceName,
      tableName: tableName,
      tableId: tableId.toString(),
      action: action,
      oldDetails: payload.oldDetails,
      newDetails: payload.newDetails,
      organizationId: organizationId ?? null,
      createdUserId: userId ?? null,
      createdAt: new Date()
    } as AuditTrailEntity;

    await this.auditTrailService.save(auditTrail)
      .catch(err => {
        console.log("Error on saving audit trails", err);
      });
  };

  private saveUserAction = async () => {
    const { serviceName, action, tableName, tableId, payload, header, userId, organizationId } = this.input;
    const userAction = {
      serviceName: serviceName,
      tableName: tableName,
      tableId: tableId.toString(),
      action: action,
      actionDetails: payload.newDetails,
      ipAddress: header.ipAddress,
      userAgent: header.userAgent,
      organizationId: organizationId ?? null,
      userId: userId ?? null,
      createdAt: new Date()
    } as UserActionEntity;

    await this.userActionService.save(userAction)
      .catch(err => {
        console.log("Error on saving user actions", err);
      });
  };

  execute = async (): Promise<void> => {
    await this.saveEventLog();
    await this.saveAuditTrail();
    await this.saveUserAction();
  };
};