import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import UserActionsRepository from "../repositories/user-actions.repository";
import UserActions from "../models/user-actions.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class UserActionsService {
  private repository: UserActionsRepository;

  constructor() {
    this.repository = new UserActionsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserActions[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<UserActions[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (id: string): Promise<UserActions> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: UserActions): Promise<UserActions> => {
    return await this.repository.create({
      params: new UserActions(data),
      exclude: ["deleted_at"]
    });
  };
};