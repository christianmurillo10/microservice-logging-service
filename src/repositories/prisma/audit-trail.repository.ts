import { PrismaClient } from "@prisma/client";
import AuditTrailModel from "../../models/audit-trail.model";
import AuditTrailRepository from "../audit-trail.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { auditTrailSubsets, organizationSubsets } from "../../shared/helpers/select-subset.helper";
import { ActionValue, GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaAuditTrailRepository implements AuditTrailRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.auditTrail;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<AuditTrailModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...auditTrailSubsets,
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

    return res.map(item => new AuditTrailModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      action: item.action as ActionValue,
      oldDetails: item.oldDetails as GenericObject,
      newDetails: item.newDetails as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<AuditTrailModel[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const betweenCreatedAt = args.dateFrom && args.dateTo
      ? { createdAt: { gte: new Date(args.dateFrom), lte: new Date(args.dateTo) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...auditTrailSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new AuditTrailModel({
      ...item,
      serviceName: item.serviceName as ServiceNameValue,
      action: item.action as ActionValue,
      oldDetails: item.oldDetails as GenericObject,
      newDetails: item.newDetails as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<AuditTrailModel | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...auditTrailSubsets,
        ...exclude,
        ...organizationSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new AuditTrailModel({
      ...res,
      serviceName: res.serviceName as ServiceNameValue,
      action: res.action as ActionValue,
      oldDetails: res.oldDetails as GenericObject,
      newDetails: res.newDetails as GenericObject
    });
  };

  create = async (
    args: CreateArgs<AuditTrailModel>
  ): Promise<AuditTrailModel> => {
    const exclude = setSelectExclude(args.exclude!);
    const organizationSelect = args.include?.includes("organization")
      ? { organization: { select: { ...organizationSubsets, deletedAt: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...auditTrailSubsets,
        ...exclude,
        ...organizationSelect
      },
      data: args.params
    });

    return new AuditTrailModel({
      ...data,
      serviceName: data.serviceName as ServiceNameValue,
      action: data.action as ActionValue,
      oldDetails: data.oldDetails as GenericObject,
      newDetails: data.newDetails as GenericObject
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