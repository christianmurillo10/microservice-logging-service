import Users from "../../../models/users.model";
import {
  TFindAllArgs,
  TFindByIdArgs,
  TCreateArgs,
  TUpdateArgs,
  TSoftDeleteArgs,
  TSoftDeleteManyArgs
} from "../repository.type";
import { TGenericObject } from "../common.type";

export default interface IUsersRepository {
  findAll: (args: TFindAllArgs) => Promise<Users[]>;

  findById: (args: TFindByIdArgs<string>) => Promise<Users | null>;

  create: (args: TCreateArgs<Users>) => Promise<Users>;

  update: (args: TUpdateArgs<string, Users>) => Promise<Users>;

  softDelete: (args: TSoftDeleteArgs<string>) => Promise<Users>;

  softDeleteMany: (args: TSoftDeleteManyArgs<string>) => Promise<TGenericObject>;

  softDeleteManyByBusinessIds: (args: TSoftDeleteManyArgs<number>) => Promise<TGenericObject>;
};