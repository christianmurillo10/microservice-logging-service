// Type
export type GenericObject = Record<string, string> | object;

export type GenericArray = any[];

export type UniqueId = number | string | null;

export type Query = {
  filters?: GenericObject,
  sorting?: GenericObject,
  offset?: number,
  limit?: number
};

export type ApiResponseInput = {
  service?: string,
  version?: string,
  status_code: number,
  status?: string,
  message?: string,
  errors?: string[],
  result?: unknown,
};

export type ServiceNameValue = "AUTH_SERVICE" | "USER_SERVICE";

// Enum
export enum ServiceName {
  AuthService = "AUTH_SERVICE",
  UserService = "BUSINESS"
};