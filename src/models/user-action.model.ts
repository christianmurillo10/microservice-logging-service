import { v4 as uuidv4 } from "uuid";
import UserAction from "../entities/user-action.entity";
import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

class UserActionModel implements UserAction {
  id?: string = uuidv4();
  serviceName: ServiceNameValue = "USER_SERVICE";
  tableName: string = "";
  tableId: string = "";
  action: ActionValue = "LOGIN";
  actionDetails: GenericObject = {};
  ipAddress: string = "";
  userAgent: string = "";
  businessId?: number | null = null;
  userId!: string;
  createdAt: Date = new Date();

  constructor(props: UserAction) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.tableName = props.tableName;
    this.tableId = props.tableId;
    this.action = props.action;
    this.actionDetails = props.actionDetails;
    this.ipAddress = props.ipAddress;
    this.userAgent = props.userAgent;
    this.businessId = props.businessId;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
  };
};

export default UserActionModel;