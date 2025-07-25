import { PrismaClient } from "@prisma/client";
import UserActionModel from "../../models/user-action.model";
import UserActionRepository from "../user-action.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { businessSubsets, userActionSubsets } from "../../shared/helpers/select-subset.helper";
import { ActionValue, GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaUserActionRepository implements UserActionRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.userAction;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserActionModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...businessSelect
      },
      where: {
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

    return res.map(item => new UserActionModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      action: item.action as ActionValue,
      actionDetails: item.actionDetails as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<UserActionModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const betweenCreatedAt = args.dateFrom && args.dateTo
      ? { createdAt: { gte: new Date(args.dateFrom), lte: new Date(args.dateTo) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...businessSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new UserActionModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      action: item.action as ActionValue,
      actionDetails: item.actionDetails as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UserActionModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...businessSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new UserActionModel({
      ...res,
      serviceName: res.serviceName as ServiceNameValue,
      action: res.action as ActionValue,
      actionDetails: res.actionDetails as GenericObject
    });
  };

  create = async (
    args: CreateArgs<UserActionModel>
  ): Promise<UserActionModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessSelect = args.include?.includes("business")
      ? { business: { select: { ...businessSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...userActionSubsets,
        ...exclude,
        ...businessSelect
      },
      data: args.params
    });

    return new UserActionModel({
      ...data,
      serviceName: data.serviceName as ServiceNameValue,
      action: data.action as ActionValue,
      actionDetails: data.actionDetails as GenericObject
    });
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