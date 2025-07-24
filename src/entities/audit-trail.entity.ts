import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface AuditTrail {
  id?: string;
  serviceName: ServiceNameValue;
  tableName: string;
  tableId: string;
  action: ActionValue;
  oldDetails: GenericObject;
  newDetails: GenericObject;
  businessId?: number | null;
  createdUserId: string;
  createdAt: Date;
};