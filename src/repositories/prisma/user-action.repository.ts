import { PrismaClient } from "../../prisma/client";
import type { UserAction as UserActionRecord } from "../../prisma/client";
import UserActionEntity from "../../entities/user-action.entity";
import UserActionRepository from "../user-action.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { organizationSubsets, userActionSubsets } from "../../shared/helpers/select-subset.helper";
import { ActionValue, GenericObject, ServiceNameValue } from "../../shared/types/common.type";

function toEntity(userAction: UserActionRecord): UserActionEntity {
  return new UserActionEntity({
    ...userAction,
    serviceName: userAction.serviceName as ServiceNameValue,
    action: userAction.action as ActionValue,
    actionDetails: userAction.actionDetails as GenericObject
  });
};

export default class PrismaUserActionRepository implements UserActionRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.userAction;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserActionEntity[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
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
  ): Promise<UserActionEntity[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const betweenCreatedAt = args.dateFrom && args.dateTo
      ? { createdAt: { gte: new Date(args.dateFrom), lte: new Date(args.dateTo) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...organizationSelect
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
  ): Promise<UserActionEntity | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return toEntity(res);
  };

  create = async (
    args: CreateArgs<UserActionEntity>
  ): Promise<UserActionEntity> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...organizationSelect
      },
      data: args.params
    });

    return toEntity(data);
  };

  count = async (
    args?: CountArgs
  ): Promise<number> => {
    const data = this.client.count({
      where: {
        ...args?.condition,
        ...parseQueryFilters(args?.query?.filters)
      }
    });

    return data;
  };
};