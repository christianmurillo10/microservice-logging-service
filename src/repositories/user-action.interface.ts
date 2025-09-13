import UserActionEntity from "../entities/user-action.entity";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface UserActionRepository {
  findAll: (args: FindAllArgs) => Promise<UserActionEntity[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<UserActionEntity[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserActionEntity | null>;

  create: (args: CreateArgs<UserActionEntity>) => Promise<UserActionEntity>;

  count: (args?: CountArgs) => Promise<number>;
};