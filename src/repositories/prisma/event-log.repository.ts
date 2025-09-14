import { PrismaClient } from "../../prisma/client";
import type { EventLog as EventLogRecord } from "../../prisma/client";
import EventLogEntity from "../../entities/event-log.entity";
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

function toEntity(eventLog: EventLogRecord): EventLogEntity {
  return new EventLogEntity({
    ...eventLog,
    serviceName: eventLog.serviceName as ServiceNameValue,
    payload: eventLog.payload as GenericObject
  });
};

export default class PrismaEventLogRepository implements EventLogRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.eventLog;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<EventLogEntity[]> => {
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

    return res.map(item => toEntity(item));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<EventLogEntity[]> => {
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

    return res.map(item => toEntity(item));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<EventLogEntity | null> => {
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

    return toEntity(res);
  };

  create = async (
    args: CreateArgs<EventLogEntity>
  ): Promise<EventLogEntity> => {
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