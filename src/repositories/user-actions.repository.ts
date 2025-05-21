import { PrismaClient } from "@prisma/client";
import IUserActions from "../models/user-actions.model";
import IUserActionsRepository from "../shared/types/repositories/user-actions.interface";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { businessesSubsets, userActionsSubsets } from "../shared/helpers/select-subset.helper";
import { TGenericObject } from "../shared/types/common.type";


export default class UserActionsRepository implements IUserActionsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.user_actions;
  };

  findAll = async (
    args: TFindAllArgs
  ): Promise<IUserActions[]> => {
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
      skip: args.query?.offset,
      take: args.query?.limit
    });

    return res.map(item => new IUserActions({
      ...item,
      action_details: item.action_details as TGenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: TFindAllBetweenCreatedAtArgs
  ): Promise<IUserActions[]> => {
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

    return res.map(item => new IUserActions({
      ...item,
      action_details: item.action_details as TGenericObject
    }));
  };

  findById = async (
    args: TFindByIdArgs<string>
  ): Promise<IUserActions | null> => {
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

    return new IUserActions({
      ...res,
      action_details: res.action_details as TGenericObject
    });
  };

  create = async (
    args: TCreateArgs<IUserActions>
  ): Promise<IUserActions> => {
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

    return new IUserActions({
      ...data,
      action_details: data.action_details as TGenericObject
    });
  };

  count = async (
    args?: TCountArgs
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