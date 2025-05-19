import Users from "../../../models/users.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
  UpdateArgs,
  SoftDeleteArgs,
  SoftDeleteManyArgs
} from "../repository.type";
import { GenericObject } from "../common.type";

export default interface UsersRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<Users[]>;

  findById: (args: FindByIdArgs<string>) => Promise<Users | null>;

  create: (args: CreateArgs<Users>) => Promise<Users>;

  update: (args: UpdateArgs<string, Users>) => Promise<Users>;

  softDelete: (args: SoftDeleteArgs<string>) => Promise<Users>;

  softDeleteMany: (args: SoftDeleteManyArgs<string>) => Promise<GenericObject>;

  softDeleteManyByBusinessIds: (args: SoftDeleteManyArgs<number>) => Promise<GenericObject>;
};