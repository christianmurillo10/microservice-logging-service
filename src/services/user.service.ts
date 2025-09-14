import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUserRepository from "../repositories/prisma/user.repository";
import UserEntity from "../entities/user.entity";
import { GetAllArgs } from "../shared/types/service.type";
import NotFoundException from "../shared/exceptions/not-found.exception";

export default class UserService {
  private repository: PrismaUserRepository;

  constructor() {
    this.repository = new PrismaUserRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserEntity[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deletedAt"]
    });

    return record;
  };

  getById = async (id: string): Promise<UserEntity> => {
    const record = await this.repository.findById({
      id,
      exclude: ["deletedAt"]
    });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: UserEntity): Promise<UserEntity> => {
    const option = {
      params: new UserEntity(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.create(option);
  };

  update = async (data: UserEntity): Promise<UserEntity> => {
    const option = {
      params: new UserEntity(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: string): Promise<UserEntity> => {
    return await this.repository.softDelete({
      id: id,
      exclude: ["password"]
    });
  };

  deleteMany = async (ids: string[]): Promise<void> => {
    await this.repository.softDeleteMany({ ids: ids });
  };

  deleteManyByOrganizationIds = async (ids: string[]): Promise<void> => {
    await this.repository.softDeleteManyByOrganizationIds({ ids: ids });
  };
};