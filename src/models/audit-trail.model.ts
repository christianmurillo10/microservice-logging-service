import { v4 as uuidv4 } from "uuid";
import AuditTrail from "../entities/audit-trail.entity";
import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

class AuditTrailModel implements AuditTrail {
  id?: string = uuidv4();
  serviceName: ServiceNameValue = "USER_SERVICE";
  tableName: string = "";
  tableId!: string;
  action: ActionValue = "CREATE";
  oldDetails: GenericObject = {};
  newDetails: GenericObject = {};
  businessId?: number | null = null;
  createdUserId!: string;
  createdAt: Date = new Date();

  constructor(props: AuditTrail) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.tableName = props.tableName;
    this.tableId = props.tableId;
    this.action = props.action;
    this.oldDetails = props.oldDetails;
    this.newDetails = props.newDetails;
    this.businessId = props.businessId;
    this.createdUserId = props.createdUserId;
    this.createdAt = props.createdAt;
  };
};

export default AuditTrailModel;