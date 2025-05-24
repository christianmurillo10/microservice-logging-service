import UserActions from "../../../models/user-actions.model";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../repository.type";

export default interface IUserActionsRepository {
  findAll: (args: TFindAllArgs) => Promise<UserActions[]>;

  findAllBetweenCreatedAt: (args: TFindAllBetweenCreatedAtArgs) => Promise<UserActions[]>;

  findById: (args: TFindByIdArgs<string>) => Promise<UserActions | null>;

  create: (args: TCreateArgs<UserActions>) => Promise<UserActions>;

  count: (args?: TCountArgs) => Promise<number>;
};