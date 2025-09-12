import { ActionValue, GenericObject, ServiceNameValue } from "../shared/types/common.type";

export default interface UserAction {
  id?: string;
  serviceName: ServiceNameValue;
  tableName: string;
  tableId: string;
  action: ActionValue;
  actionDetails: GenericObject;
  ipAddress: string;
  userAgent: string;
  organizationId?: number | null;
  userId: string;
  createdAt: Date;
};