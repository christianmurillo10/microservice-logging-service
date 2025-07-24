import UserActionModel from "../models/user-action.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface UserActionRepository {
  findAll: (args: FindAllArgs) => Promise<UserActionModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<UserActionModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserActionModel | null>;

  create: (args: CreateArgs<UserActionModel>) => Promise<UserActionModel>;

  count: (args?: CountArgs) => Promise<number>;
};