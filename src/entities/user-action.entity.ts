import UserAction from "../models/user-action.model";
import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

class UserActionEntity implements UserAction {
  id?: string;
  serviceName: ServiceNameValue;
  tableName: string;
  tableId: string;
  action: ActionValue;
  actionDetails: GenericObject;
  ipAddress: string;
  userAgent: string;
  organizationId?: string | null;
  userId!: string;
  createdAt: Date;

  constructor(props: UserAction) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.tableName = props.tableName;
    this.tableId = props.tableId;
    this.action = props.action;
    this.actionDetails = props.actionDetails;
    this.ipAddress = props.ipAddress;
    this.userAgent = props.userAgent;
    this.organizationId = props.organizationId;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
  };
};

export default UserActionEntity;