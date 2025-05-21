import { PrismaClient } from "@prisma/client";
import UserActions from "../models/user-actions.model";
import UserActionsRepositoryInterface from "../shared/types/repositories/user-actions.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { userActionsSubsets } from "../shared/helpers/select-subset.helper";
import { GenericObject } from "../shared/types/common.type";


export default class UserActionsRepository implements UserActionsRepositoryInterface {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.user_actions;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<UserActions[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findMany({
      select: {
        ...userActionsSubsets,
        ...exclude
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

    return res.map(item => new UserActions({
      ...item,
      action_details: item.action_details as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<UserActions[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const betweenCreatedAt = args.date_from && args.date_to
      ? { created_at: { gte: new Date(args.date_from), lte: new Date(args.date_to) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...userActionsSubsets,
        ...exclude
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new UserActions({
      ...item,
      action_details: item.action_details as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<UserActions | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findFirst({
      select: {
        ...userActionsSubsets,
        ...exclude
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new UserActions({
      ...res,
      action_details: res.action_details as GenericObject
    });
  };

  create = async (
    args: CreateArgs<UserActions>
  ): Promise<UserActions> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.create({
      select: {
        ...userActionsSubsets,
        ...exclude
      },
      data: args.params
    });

    return new UserActions({
      ...data,
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