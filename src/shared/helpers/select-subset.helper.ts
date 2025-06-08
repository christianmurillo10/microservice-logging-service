export const businessesSubsets = {
  id: true,
  name: true,
  api_key: true,
  domain: true,
  preferred_timezone: true,
  currency: true,
  created_at: true,
  updated_at: true,
  deleted_at: true
};

export const usersSubsets = {
  id: true,
  name: true,
  username: true,
  email: true,
  access_type: true,
  business_id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true
};

export const userActionsSubsets = {
  id: true,
  service_name: true,
  table_name: true,
  table_id: true,
  action: true,
  action_details: true,
  ip_address: true,
  user_agent: true,
  business_id: true,
  user_id: true,
  created_at: true
};

export const auditTrailsSubsets = {
  id: true,
  service_name: true,
  table_name: true,
  table_id: true,
  action: true,
  old_details: true,
  new_details: true,
  business_id: true,
  created_user_id: true,
  created_at: true
};

export const eventLogsSubsets = {
  id: true,
  service_name: true,
  event_type: true,
  payload: true,
  business_id: true,
  created_at: true
};