export const businessSubsets = {
  id: true,
  name: true,
  apiKey: true,
  domain: true,
  preferredTimezone: true,
  currency: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true
};

export const userSubsets = {
  id: true,
  name: true,
  username: true,
  email: true,
  accessType: true,
  businessId: true,
  isActive: true,
  isLogged: true,
  lastLoggedAt: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true
};

export const userActionSubsets = {
  id: true,
  serviceName: true,
  tableName: true,
  tableId: true,
  action: true,
  actionDetails: true,
  ipAddress: true,
  userAgent: true,
  businessId: true,
  userId: true,
  createdAt: true
};

export const auditTrailSubsets = {
  id: true,
  serviceName: true,
  tableName: true,
  tableId: true,
  action: true,
  oldDetails: true,
  newDetails: true,
  businessId: true,
  createdUserId: true,
  createdAt: true
};

export const eventLogSubsets = {
  id: true,
  serviceName: true,
  eventType: true,
  payload: true,
  businessId: true,
  createdAt: true
};