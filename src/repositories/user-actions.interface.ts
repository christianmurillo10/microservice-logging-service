import UserActionsModel from "../models/user-actions.model";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";

export default interface UserActionsRepository {
  findAll: (args: FindAllArgs) => Promise<UserActionsModel[]>;

  findAllBetweenCreatedAt: (args: FindAllBetweenCreatedAtArgs) => Promise<UserActionsModel[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserActionsModel | null>;

  create: (args: CreateArgs<UserActionsModel>) => Promise<UserActionsModel>;

  count: (args?: CountArgs) => Promise<number>;
};