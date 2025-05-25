import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUserActionsRepository from "../repositories/user-actions.repository";
import UserActionsModel from "../models/user-actions.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class UserActionsService {
  private repository: PrismaUserActionsRepository;

  constructor() {
    this.repository = new PrismaUserActionsRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserActionsModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["businesses"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<UserActionsModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["businesses"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<UserActionsModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["businesses"],
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: UserActionsModel): Promise<UserActionsModel> => {
    return await this.repository.create({
      params: new UserActionsModel(data),
      // include: ["businesses"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};