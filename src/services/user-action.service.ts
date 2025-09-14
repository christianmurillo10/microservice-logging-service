import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaUserActionRepository from "../repositories/prisma/user-action.repository";
import UserActionEntity from "../entities/user-action.entity";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { CountAllArgs, GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class UserActionService {
  private repository: PrismaUserActionRepository;

  constructor() {
    this.repository = new PrismaUserActionRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<UserActionEntity[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<UserActionEntity[]> => {
    const record = await this.repository.findAllBetweenCreatedAt(args);

    return record;
  };

  getById = async (id: string): Promise<UserActionEntity> => {
    const record = await this.repository.findById({ id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  save = async (data: UserActionEntity): Promise<UserActionEntity> => {
    return await this.repository.create({
      params: new UserActionEntity(data),
    });
  };

  count = async (args: CountAllArgs): Promise<number> => {
    return await this.repository.count(args);
  };
};