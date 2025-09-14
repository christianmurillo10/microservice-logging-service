import { PrismaClient } from "../../prisma/client";
import type { User as UserRecord } from "../../prisma/client";
import UserEntity, { UserAccessTypeValue } from "../../entities/user.entity";
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
import { userSubsets, organizationSubsets } from "../../shared/helpers/select-subset.helper";

function toEntity(user: UserRecord): UserEntity {
  return new UserEntity({
    ...user,
    accessType: user.accessType as UserAccessTypeValue
  });
};


export default class PrismaUserRepository implements UserRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.user;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserEntity[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userSubsets,
        ...exclude,
        ...organizationSelect
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

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UserEntity | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...userSubsets,
        ...exclude,
        ...organizationSelect
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

  create = async (
    args: CreateArgs<UserEntity>
  ): Promise<UserEntity> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...userSubsets,
        ...exclude,
        ...organizationSelect
      },
      data: args.params
    });

    return toEntity(data);
  };

  update = async (
    args: UpdateArgs<string, UserEntity>
  ): Promise<UserEntity> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.update({
      select: {
        ...userSubsets,
        ...exclude,
        ...organizationSelect
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
  ): Promise<UserEntity> => {
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

  softDeleteManyByOrganizationIds = async (
    args: SoftDeleteManyArgs<string>
  ): Promise<GenericObject> => {
    const data = await this.client.updateMany({
      where: {
        organizationId: {
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