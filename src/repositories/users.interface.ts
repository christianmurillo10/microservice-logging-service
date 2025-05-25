import UsersModel from "../models/users.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
  UpdateArgs,
  SoftDeleteArgs,
  SoftDeleteManyArgs
} from "../shared/types/repository.type";
import { GenericObject } from "../shared/types/common.type";

export default interface UsersRepository {
  findAll: (args: FindAllArgs) => Promise<UsersModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UsersModel | null>;

  create: (args: CreateArgs<UsersModel>) => Promise<UsersModel>;

  update: (args: UpdateArgs<string, UsersModel>) => Promise<UsersModel>;

  softDelete: (args: SoftDeleteArgs<string>) => Promise<UsersModel>;

  softDeleteMany: (args: SoftDeleteManyArgs<string>) => Promise<GenericObject>;

  softDeleteManyByBusinessIds: (args: SoftDeleteManyArgs<number>) => Promise<GenericObject>;
};