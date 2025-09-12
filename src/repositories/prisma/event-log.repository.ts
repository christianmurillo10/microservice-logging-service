import { PrismaClient } from "@prisma/client";
import EventLogModel from "../../models/event-log.model";
import EventLogRepository from "../event-log.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { organizationSubsets, eventLogSubsets } from "../../shared/helpers/select-subset.helper";
import { GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaEventLogRepository implements EventLogRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.eventLog;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<EventLogModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...eventLogSubsets,
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

    return res.map(item => new EventLogModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      payload: item.payload as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<EventLogModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const betweenCreatedAt = args.dateFrom && args.dateTo
      ? { createdAt: { gte: new Date(args.dateFrom), lte: new Date(args.dateTo) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...eventLogSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new EventLogModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      payload: item.payload as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<EventLogModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...eventLogSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new EventLogModel({
      ...res,
      serviceName: res.serviceName as ServiceNameValue,
      payload: res.payload as GenericObject
    });
  };

  create = async (
    args: CreateArgs<EventLogModel>
  ): Promise<EventLogModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...eventLogSubsets,
        ...exclude,
        ...organizationSelect
      },
      data: args.params
    });

    return new EventLogModel({
      ...data,
      serviceName: data.serviceName as ServiceNameValue,
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