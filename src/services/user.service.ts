import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUserRepository from "../repositories/prisma/user.repository";
import UserModel from "../models/user.model";
import { GetAllArgs, GetByIdArgs } from "../shared/types/service.type";
import NotFoundException from "../shared/exceptions/not-found.exception";

export default class UserService {
  private repository: PrismaUserRepository;

  constructor() {
    this.repository = new PrismaUserRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["roles", "organization"],
      exclude: ["deletedAt"]
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<UserModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["roles", "organization"],
      exclude: ["deletedAt"]
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: UserModel): Promise<UserModel> => {
    const option = {
      params: new UserModel(data),
      // include: ["roles", "organization"],
      exclude: ["deletedAt"]
    };

    return await this.repository.create(option);
  };

  update = async (data: UserModel): Promise<UserModel> => {
    const option = {
      params: new UserModel(data),
      // include: ["roles", "organization"],
      exclude: ["deletedAt"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: string): Promise<UserModel> => {
    return await this.repository.softDelete({
      id: id,
      exclude: ["password"]
    });
  };

  deleteMany = async (ids: string[]): Promise<void> => {
    await this.repository.softDeleteMany({ ids: ids });
  };

  deleteManyByOrganizationIds = async (ids: number[]): Promise<void> => {
    await this.repository.softDeleteManyByOrganizationIds({ ids: ids });
  };
};