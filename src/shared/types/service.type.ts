import { Header } from "../../services/logging.service";
import { GenericObject, Query } from "./common.type";

export type GetAllArgs = {
  condition?: GenericObject,
  query?: Query
};

export type GetAllBetweenCreatedAtArgs = {
  dateFrom: string,
  dateTo: string,
  condition?: GenericObject
};

export type CountAllArgs = {
  condition?: GenericObject,
  query?: Query
};

export type State<V> = {
  eventType: string,
  userId: string
  value: V,
  header: Header
};