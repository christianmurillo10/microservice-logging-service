import { PrismaClient } from "@prisma/client";
import EventLogsModel from "../../models/event-logs.model";
import EventLogsRepository from "../event-logs.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { businessesSubsets, eventLogsSubsets } from "../../shared/helpers/select-subset.helper";
import { GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaEventLogsRepository implements EventLogsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.event_logs;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<EventLogsModel[]> => {
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
      take: args.query?.limit,
      skip: args.query?.page && args.query?.limit ?
        (args.query?.page - 1) * args.query?.limit :
        undefined
    });

    return res.map(item => new EventLogsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      payload: item.payload as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<EventLogsModel[]> => {
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

    return res.map(item => new EventLogsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      payload: item.payload as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<EventLogsModel | null> => {
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

    return new EventLogsModel({
      ...res,
      service_name: res.service_name as ServiceNameValue,
      payload: res.payload as GenericObject
    });
  };

  create = async (
    args: CreateArgs<EventLogsModel>
  ): Promise<EventLogsModel> => {
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

    return new EventLogsModel({
      ...data,
      service_name: data.service_name as ServiceNameValue,
      payload: data.payload as GenericObject
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