import { PrismaClient } from "@prisma/client";
import EventLogs from "../models/event-logs.model";
import EventLogsRepositoryInterface from "../shared/types/repositories/event-logs.interface";
import {
  FindAllArgs,
  FindByIdArgs,
  CreateArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { eventLogsSubsets } from "../shared/helpers/select-subset.helper";
import { GenericObject } from "../shared/types/common.type";


export default class EventLogsRepository implements EventLogsRepositoryInterface {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.event_logs;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<EventLogs[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findMany({
      select: {
        ...eventLogsSubsets,
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

    return res.map(item => new EventLogs({
      ...item,
      payload: item.payload as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<EventLogs | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findFirst({
      select: {
        ...eventLogsSubsets,
        ...exclude
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new EventLogs({
      ...res,
      payload: res.payload as GenericObject
    });
  };

  create = async (
    args: CreateArgs<EventLogs>
  ): Promise<EventLogs> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.create({
      select: {
        ...eventLogsSubsets,
        ...exclude
      },
      data: args.params
    });

    return new EventLogs({
      ...data,
      payload: data.payload as GenericObject
    });
  };
};