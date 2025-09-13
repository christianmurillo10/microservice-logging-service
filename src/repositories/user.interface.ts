import UserEntity from "../entities/user.entity";
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
  findAll: (args: FindAllArgs) => Promise<UserEntity[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserEntity | null>;

  create: (args: CreateArgs<UserEntity>) => Promise<UserEntity>;

  update: (args: UpdateArgs<string, UserEntity>) => Promise<UserEntity>;

  softDelete: (args: SoftDeleteArgs<string>) => Promise<UserEntity>;

  softDeleteMany: (args: SoftDeleteManyArgs<string>) => Promise<GenericObject>;

  softDeleteManyByOrganizationIds: (args: SoftDeleteManyArgs<string>) => Promise<GenericObject>;
};