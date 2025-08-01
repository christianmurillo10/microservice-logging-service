// Type
export type GenericObject = Record<string, string> | object;

export type GenericArray = any[];

export type UniqueId = number | string | null;

export type Query = {
  filters?: GenericObject,
  sorting?: GenericObject,
  page?: number,
  pageSize?: number
};

export type Pagination = {
  totalItems: number,
  totalPageItems: number,
  totalPages: number,
  page: number,
  pageSize: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
};

export type ApiResponseInput = {
  service?: string,
  version?: string,
  statusCode: number,
  status?: string,
  message?: string,
  errors?: string[],
  data?: unknown,
  pagination?: Pagination,
};

export type EventMessageData<T> = {
  oldDetails: T,
  newDetails: T
};

export type ServiceNameValue = "AUTH_SERVICE" | "USER_SERVICE";

export type ActionValue =
  "LOGIN" |
  "LOGOUT" |
  "CREATE" |
  "UPDATE" |
  "DELETE" |
  "DELETE_MANY" |
  "CHANGE_PASSWORD";

// Enum
export enum ServiceName {
  AuthService = "AUTH_SERVICE",
  UserService = "BUSINESS"
};