import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUserActionRepository from "../repositories/prisma/user-action.repository";
import UserActionModel from "../models/user-action.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs, GetByIdArgs } from "../shared/types/service.type";

export default class UserActionService {
  private repository: PrismaUserActionRepository;

  constructor() {
    this.repository = new PrismaUserActionRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserActionModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["business"],
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<UserActionModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      // include: ["business"],
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<UserActionModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["business"],
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: UserActionModel): Promise<UserActionModel> => {
    return await this.repository.create({
      params: new UserActionModel(data),
      // include: ["business"],
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};