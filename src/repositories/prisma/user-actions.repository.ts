import { PrismaClient } from "@prisma/client";
import UserActionsModel from "../../models/user-actions.model";
import UserActionsRepository from "../user-actions.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { businessesSubsets, userActionsSubsets } from "../../shared/helpers/select-subset.helper";
import { ActionValue, GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaUserActionsRepository implements UserActionsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.user_actions;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserActionsModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionsSubsets,
        ...exclude,
        ...businessesSelect
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

    return res.map(item => new UserActionsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      action: item.action as ActionValue,
      action_details: item.action_details as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<UserActionsModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const betweenCreatedAt = args.date_from && args.date_to
      ? { created_at: { gte: new Date(args.date_from), lte: new Date(args.date_to) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new UserActionsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      action: item.action as ActionValue,
      action_details: item.action_details as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UserActionsModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...userActionsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new UserActionsModel({
      ...res,
      service_name: res.service_name as ServiceNameValue,
      action: res.action as ActionValue,
      action_details: res.action_details as GenericObject
    });
  };

  create = async (
    args: CreateArgs<UserActionsModel>
  ): Promise<UserActionsModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...userActionsSubsets,
        ...exclude,
        ...businessesSelect
      },
      data: args.params
    });

    return new UserActionsModel({
      ...data,
      service_name: data.service_name as ServiceNameValue,
      action: data.action as ActionValue,
      action_details: data.action_details as GenericObject
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