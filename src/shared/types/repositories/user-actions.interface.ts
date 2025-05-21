import IUserActions from "../../../models/user-actions.model";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../repository.type";

export default interface IUserActionsRepository {
  findAll: (args: TFindAllArgs) => Promise<IUserActions[]>;

  findAllBetweenCreatedAt: (args: TFindAllBetweenCreatedAtArgs) => Promise<IUserActions[]>;

  findById: (args: TFindByIdArgs<string>) => Promise<IUserActions | null>;

  create: (args: TCreateArgs<IUserActions>) => Promise<IUserActions>;

  count: (args?: TCountArgs) => Promise<number>;
};