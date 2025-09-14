import { PrismaClient } from "../../prisma/client";
import type { Organization as OrganizationRecord } from "../../prisma/client";
import OrganizationModel from "../../entities/organization.entity";
import OrganizationRepository from "../organization.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  FindByNameArgs,
  CreateArgs,
  UpdateArgs,
  SoftDeleteArgs,
  SoftDeleteManyArgs
} from "../../shared/types/repository.type";
import { GenericObject } from "../../shared/types/common.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { organizationSubsets } from "../../shared/helpers/select-subset.helper";

function toEntity(organization: OrganizationRecord): OrganizationModel {
  return new OrganizationModel(organization);
};

export default class PrismaOrganizationRepository implements OrganizationRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.organization;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<OrganizationModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findMany({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: {
        deletedAt: null,
        ...args.condition,
        ...parseQueryFilters(args.query?.filters)
      },
      orderBy: {
        ...args.query?.sorting
      },
      take: args.query?.pageSize,
      skip: args.query?.page && args.query?.pageSize ?
        (args.query?.page - 1) * args.query?.pageSize :
        undefined
    });

    return res.map(item => toEntity(item));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<OrganizationModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const betweenCreatedAt = args.dateFrom && args.dateTo
      ? { createdAt: { gte: new Date(args.dateFrom), lte: new Date(args.dateTo) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => toEntity(item));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<OrganizationModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findFirst({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: {
        id: args.id,
        deletedAt: null,
        ...args.condition
      }
    });

    if (!res) return null;

    return toEntity(res);
  };

  findByName = async (
    args: FindByNameArgs
  ): Promise<OrganizationModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findFirst({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: {
        name: args.name,
        deletedAt: null,
        ...args.condition
      }
    });

    if (!res) return null;

    return toEntity(res);
  };

  create = async (
    args: CreateArgs<OrganizationModel>
  ): Promise<OrganizationModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.create({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      data: args.params
    });

    return toEntity(data);
  };

  update = async (
    args: UpdateArgs<string, OrganizationModel>
  ): Promise<OrganizationModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.update({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: { id: args.id },
      data: {
        ...args.params,
        updatedAt: new Date(),
      }
    });

    return toEntity(data);
  };

  softDelete = async (
    args: SoftDeleteArgs<string>
  ): Promise<OrganizationModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.update({
      select: {
        ...organizationSubsets,
        ...exclude
      },
      where: { id: args.id },
      data: {
        deletedAt: new Date(),
      }
    });

    return toEntity(data);
  };

  softDeleteMany = async (
    args: SoftDeleteManyArgs<string>
  ): Promise<GenericObject> => {
    const data = await this.client.updateMany({
      where: {
        id: {
          in: args.ids
        }
      },
      data: {
        deletedAt: new Date(),
      }
    });

    return data;
  };
};