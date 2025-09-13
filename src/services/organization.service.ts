import { MESSAGE_DATA_NOT_EXIST } from "../shared/constants/message.constant";
import PrismaOrganizationRepository from "../repositories/prisma/organization.repository";
import OrganizationModel from "../models/organization.model";
import NotFoundException from "../shared/exceptions/not-found.exception";
import { GetAllArgs, GetAllBetweenCreatedAtArgs } from "../shared/types/service.type";

export default class OrganizationService {
  private repository: PrismaOrganizationRepository;

  constructor() {
    this.repository = new PrismaOrganizationRepository();
  };

  getAll = async (args?: GetAllArgs): Promise<OrganizationModel[]> => {
    const record = await this.repository.findAll({
      condition: args?.condition,
      query: args?.query,
      exclude: ["deletedAt"]
    });

    return record;
  };

  getAllBetweenCreatedAt = async (args: GetAllBetweenCreatedAtArgs): Promise<OrganizationModel[]> => {
    const record = await this.repository.findAllBetweenCreatedAt({
      ...args,
      exclude: ["deletedAt"]
    });

    return record;
  };

  getById = async (id: string): Promise<OrganizationModel> => {
    const record = await this.repository.findById({ id: id });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  getByName = async (name: string): Promise<OrganizationModel> => {
    const record = await this.repository.findByName({ name: name });

    if (!record) {
      throw new NotFoundException([MESSAGE_DATA_NOT_EXIST]);
    };

    return record;
  };

  create = async (data: OrganizationModel): Promise<OrganizationModel> => {
    const option = {
      params: new OrganizationModel(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.create(option);
  };

  update = async (data: OrganizationModel): Promise<OrganizationModel> => {
    const option = {
      params: new OrganizationModel(data),
      exclude: ["deletedAt"]
    };

    return await this.repository.update({
      id: data.id!,
      ...option
    });;
  };

  delete = async (id: string): Promise<OrganizationModel> => {
    return await this.repository.softDelete({ id: id });
  };

  deleteMany = async (ids: string[]): Promise<void> => {
    this.repository.softDeleteMany({ ids: ids });
  };
};