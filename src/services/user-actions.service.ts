import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import UserActionsRepository from "../repositories/user-actions.repository";
import UserActions from "../models/user-actions.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class UserActionsService {
  private repository: UserActionsRepository;

  constructor() {
    this.repository = new UserActionsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserActions[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<UserActions[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<UserActions> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: UserActions): Promise<UserActions> => {
    return await this.repository.create({
      params: new UserActions(data),
      // include: ["businesses"],
      exclude: ["deleted_at"]
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};