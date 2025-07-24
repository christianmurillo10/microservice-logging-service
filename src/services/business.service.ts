import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaBusinessRepository from "../repositories/prisma/business.repository";
import BusinessModel from "../models/business.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class BusinessService {
  private repository: PrismaBusinessRepository;

  constructor() {
    this.repository = new PrismaBusinessRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<BusinessModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deletedAt"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<BusinessModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deletedAt"]
    });

    return record;
  };

  getById = async (id: number): Promise<BusinessModel> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  getByName = async (name: string): Promise<BusinessModel> => {
    const record = await this.repository.findByName({ name: name });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  getByApiKey = async (apiKey: string): Promise<BusinessModel> => {
    const record = await this.repository.findByApiKey({ apiKey: apiKey });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: BusinessModel): Promise<BusinessModel> => {
    const option = {
      params: new BusinessModel(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.create(option);
  };

  update = async (data: BusinessModel): Promise<BusinessModel> => {
    const option = {
      params: new BusinessModel(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: number): Promise<BusinessModel> => {
    return await this.repository.softDelete({ id: id });
  };

  deleteMany = async (ids: number[]): Promise<void> => {
    this.repository.softDeleteMany({ ids: ids });
  };
};