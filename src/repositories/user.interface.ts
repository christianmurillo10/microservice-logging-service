import UserModel from "../models/user.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
  UpdateArgs,
  SoftDeleteArgs,
  SoftDeleteManyArgs
} from "../shared/types/repository.type";
import { GenericObject } from "../shared/types/common.type";

export default interface UserRepository {
  findAll: (args: FindAllArgs) => Promise<UserModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserModel | null>;

  create: (args: CreateArgs<UserModel>) => Promise<UserModel>;

  update: (args: UpdateArgs<string, UserModel>) => Promise<UserModel>;

  softDelete: (args: SoftDeleteArgs<string>) => Promise<UserModel>;

  softDeleteMany: (args: SoftDeleteManyArgs<string>) => Promise<GenericObject>;

  softDeleteManyByBusinessIds: (args: SoftDeleteManyArgs<number>) => Promise<GenericObject>;
};