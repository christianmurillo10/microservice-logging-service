import { PrismaClient } from "@prisma/client";
import UsersModel from "../../models/users.model";
import UsersRepository from "../users.interface";
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
import { usersSubsets, businessesSubsets } from "../../shared/helpers/select-subset.helper";
import { UsersAccessTypeValue } from "../../entities/users.entity";

export default class PrismaUsersRepository implements UsersRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.users;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UsersModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...usersSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        deleted_at: null,
        ...args.condition,
        ...parseQueryFilters(args.query?.filters)
      },
      orderBy: {
        ...args.query?.sorting
      },
      take: args.query?.limit,
      skip: args.query?.page && args.query?.limit ?
        (args.query?.page - 1) * args.query?.limit :
        undefined
    });

    return res.map(item => new UsersModel({
      ...item,
      access_type: item.access_type as UsersAccessTypeValue
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UsersModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...usersSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        id: args.id,
        deleted_at: null,
        ...args.condition
      }
    });

    if (!res) return null;

    return new UsersModel({
      ...res,
      access_type: res.access_type as UsersAccessTypeValue
    });
  };

  create = async (
    args: CreateArgs<UsersModel>
  ): Promise<UsersModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...usersSubsets,
        ...exclude,
        ...businessesSelect
      },
      data: args.params
    });

    return new UsersModel({
      ...data,
      access_type: data.access_type as UsersAccessTypeValue
    });
  };

  update = async (
    args: UpdateArgs<string, UsersModel>
  ): Promise<UsersModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const data = await this.client.update({
      select: {
        ...usersSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: { id: args.id },
      data: {
        ...args.params,
        updated_at: new Date(),
      }
    });

    return new UsersModel({
      ...data,
      access_type: data.access_type as UsersAccessTypeValue
    });
  };

  softDelete = async (
    args: SoftDeleteArgs<string>
  ): Promise<UsersModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.update({
      select: {
        ...usersSubsets,
        ...exclude
      },
      where: { id: args.id },
      data: {
        deleted_at: new Date(),
      }
    });

    return new UsersModel({
      ...data,
      access_type: data.access_type as UsersAccessTypeValue
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
        deleted_at: new Date(),
      }
    });

    return data;
  };

  softDeleteManyByBusinessIds = async (
    args: SoftDeleteManyArgs<number>
  ): Promise<GenericObject> => {
    const data = await this.client.updateMany({
      where: {
        business_id: {
          in: args.ids
        }
      },
      data: {
        deleted_at: new Date(),
      }
    });

    return data;
  };
};