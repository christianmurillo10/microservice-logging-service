import { TGenericObject, TQuery } from "./common.type";

export type TGetAllArgs = {
  condition?: TGenericObject,
  query?: TQuery
};

export type TGetAllBetweenCreatedAtArgs = {
  date_from: string,
  date_to: string,
  condition?: TGenericObject
};

export type TGetByIdArgs<I> = {
  id: I,
  condition?: TGenericObject
};

export type TCountAllArgs = {
  condition?: TGenericObject,
  query?: TQuery
};