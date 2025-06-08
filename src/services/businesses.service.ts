import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaBusinessesRepository from "../repositories/prisma/businesses.repository";
import BusinessesModel from "../models/businesses.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class BusinessesService {
  private repository: PrismaBusinessesRepository;

  constructor() {
    this.repository = new PrismaBusinessesRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<BusinessesModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<BusinessesModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deleted_at"]
    });

    return record;
  };

  getById = async (id: number): Promise<BusinessesModel> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  getByName = async (name: string): Promise<BusinessesModel> => {
    const record = await this.repository.findByName({ name: name });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  getByApiKey = async (api_key: string): Promise<BusinessesModel> => {
    const record = await this.repository.findByApiKey({ api_key: api_key });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: BusinessesModel): Promise<BusinessesModel> => {
    const option = {
      params: new BusinessesModel(data),
      exclude: ["deleted_at"]
    };

    return await this.repository.create(option);
  };

  update = async (data: BusinessesModel): Promise<BusinessesModel> => {
    const option = {
      params: new BusinessesModel(data),
      exclude: ["deleted_at"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: number): Promise<BusinessesModel> => {
    return await this.repository.softDelete({ id: id });
  };

  deleteMany = async (ids: number[]): Promise<void> => {
    this.repository.softDeleteMany({ ids: ids });
  };
};