import UserActions from "../../../models/user-actions.model";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
} from "../repository.type";

export default interface UserActionsRepositoryInterface {
  findAll: (args: FindAllArgs) => Promise<UserActions[]>;

  findById: (args: FindByIdArgs<string>) => Promise<UserActions | null>;

  create: (args: CreateArgs<UserActions>) => Promise<UserActions>;
};