import { PrismaClient } from "@prisma/client";
import EventLogs from "../models/event-logs.model";
import IEventLogsRepository from "../shared/types/repositories/event-logs.interface";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { businessesSubsets, eventLogsSubsets } from "../shared/helpers/select-subset.helper";
import { TGenericObject } from "../shared/types/common.type";


export default class EventLogsRepository implements IEventLogsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.event_logs;
  };

  findAll = async (
    args: TFindAllArgs
  ): Promise<EventLogs[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...eventLogsSubsets,
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

    return res.map(item => new EventLogs({
      ...item,
      payload: item.payload as TGenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: TFindAllBetweenCreatedAtArgs
  ): Promise<EventLogs[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const betweenCreatedAt = args.date_from && args.date_to
      ? { created_at: { gte: new Date(args.date_from), lte: new Date(args.date_to) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...eventLogsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new EventLogs({
      ...item,
      payload: item.payload as TGenericObject
    }));
  };

  findById = async (
    args: TFindByIdArgs<string>
  ): Promise<EventLogs | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...eventLogsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new EventLogs({
      ...res,
      payload: res.payload as TGenericObject
    });
  };

  create = async (
    args: TCreateArgs<EventLogs>
  ): Promise<EventLogs> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...eventLogsSubsets,
        ...exclude,
        ...businessesSelect
      },
      data: args.params
    });

    return new EventLogs({
      ...data,
      payload: data.payload as TGenericObject
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