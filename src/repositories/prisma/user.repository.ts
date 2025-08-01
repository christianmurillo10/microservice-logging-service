import { PrismaClient } from "@prisma/client";
import UserModel from "../../models/user.model";
import UserRepository from "../user.interface";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
  UpdateArgs,
  SoftDeleteArgs,
  SoftDeleteManyArgs
} from "../../shared/types/repository.type";
import { GenericObject } from "../../shared/types/common.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { userSubsets, businessSubsets } from "../../shared/helpers/select-subset.helper";
import { UserAccessTypeValue } from "../../entities/user.entity";

export default class PrismaUserRepository implements UserRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.user;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userSubsets,
        ...exclude,
        ...businessSelect
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

    return res.map(item => new UserModel({
      ...item,
      accessType: item.accessType as UserAccessTypeValue
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UserModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...userSubsets,
        ...exclude,
        ...businessSelect
      },
      where: {
        id: args.id,
        deletedAt: null,
        ...args.condition
      }
    });

    if (!res) return null;

    return new UserModel({
      ...res,
      accessType: res.accessType as UserAccessTypeValue
    });
  };

  create = async (
    args: CreateArgs<UserModel>
  ): Promise<UserModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...userSubsets,
        ...exclude,
        ...businessSelect
      },
      data: args.params
    });

    return new UserModel({
      ...data,
      accessType: data.accessType as UserAccessTypeValue
    });
  };

  update = async (
    args: UpdateArgs<string, UserModel>
  ): Promise<UserModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.update({
      select: {
        ...userSubsets,
        ...exclude,
        ...businessSelect
      },
      where: { id: args.id },
      data: {
        ...args.params,
        updatedAt: new Date(),
      }
    });

    return new UserModel({
      ...data,
      accessType: data.accessType as UserAccessTypeValue
    });
  };

  softDelete = async (
    args: SoftDeleteArgs<string>
  ): Promise<UserModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.update({
      select: {
        ...userSubsets,
        ...exclude
      },
      where: { id: args.id },
      data: {
        deletedAt: new Date(),
      }
    });

    return new UserModel({
      ...data,
      accessType: data.accessType as UserAccessTypeValue
    });
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

  softDeleteManyByBusinessIds = async (
    args: SoftDeleteManyArgs<number>
  ): Promise<GenericObject> => {
    const data = await this.client.updateMany({
      where: {
        businessId: {
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