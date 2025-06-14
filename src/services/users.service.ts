import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUsersRepository from "../repositories/prisma/users.repository";
import UsersModel from "../models/users.model";
import { GetAllArgs, GetByIdArgs } from "../shared/types/service.type";
import NotFoundException from "../shared/exceptions/not-found.exception";

export default class UsersService {
  private repository: PrismaUsersRepository;

  constructor() {
    this.repository = new PrismaUsersRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UsersModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      // include: ["roles", "businesses"],
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (args: GetByIdArgs<string>): Promise<UsersModel> => {
    const record = await this.repository.findById({
      id: args.id,
      condition: args?.condition,
      // include: ["roles", "businesses"],
      exclude: ["deleted_at"]
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: UsersModel): Promise<UsersModel> => {
    const option = {
      params: new UsersModel(data),
      // include: ["roles", "businesses"],
      exclude: ["deleted_at"]
    };

    return await this.repository.create(option);
  };

  update = async (data: UsersModel): Promise<UsersModel> => {
    const option = {
      params: new UsersModel(data),
      // include: ["roles", "businesses"],
      exclude: ["deleted_at"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: string): Promise<UsersModel> => {
    return await this.repository.softDelete({
      id: id,
      exclude: ["password"]
    });
  };

  deleteMany = async (ids: string[]): Promise<void> => {
    await this.repository.softDeleteMany({ ids: ids });
  };

  deleteManyByBusinessIds = async (ids: number[]): Promise<void> => {
    await this.repository.softDeleteManyByBusinessIds({ ids: ids });
  };
};