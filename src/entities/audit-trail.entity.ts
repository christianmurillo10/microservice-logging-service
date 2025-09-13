import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

export interface AuditTrail {
  id?: string;
  serviceName: ServiceNameValue;
  tableName: string;
  tableId: string;
  action: ActionValue;
  oldDetails: GenericObject;
  newDetails: GenericObject;
  organizationId?: string | null;
  createdUserId: string;
  createdAt: Date;
};

class AuditTrailEntity implements AuditTrail {
  id?: string;
  serviceName: ServiceNameValue;
  tableName: string;
  tableId!: string;
  action: ActionValue;
  oldDetails: GenericObject;
  newDetails: GenericObject;
  organizationId?: string | null;
  createdUserId!: string;
  createdAt: Date;

  constructor(props: AuditTrail) {
    this.id = props.id;
    this.serviceName = props.serviceName;
    this.tableName = props.tableName;
    this.tableId = props.tableId;
    this.action = props.action;
    this.oldDetails = props.oldDetails;
    this.newDetails = props.newDetails;
    this.organizationId = props.organizationId;
    this.createdUserId = props.createdUserId;
    this.createdAt = props.createdAt;
  };
};

export default AuditTrailEntity;