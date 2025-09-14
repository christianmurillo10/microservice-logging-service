import { PrismaClient } from "../../prisma/client";
import type { AuditTrail as AuditTrailRecord } from "../../prisma/client";
import AuditTrailEntity from "../../entities/audit-trail.entity";
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

function toEntity(auditTrail: AuditTrailRecord): AuditTrailEntity {
  return new AuditTrailEntity({
    ...auditTrail,
    serviceName: auditTrail.serviceName as ServiceNameValue,
    action: auditTrail.action as ActionValue,
    oldDetails: auditTrail.oldDetails as GenericObject,
    newDetails: auditTrail.newDetails as GenericObject
  });
};

export default class PrismaAuditTrailRepository implements AuditTrailRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.auditTrail;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<AuditTrailEntity[]> => {
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

    return res.map(item => toEntity(item));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<AuditTrailEntity[]> => {
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

    return res.map(item => toEntity(item));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<AuditTrailEntity | null> => {
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

    return toEntity(res);
  };

  create = async (
    args: CreateArgs<AuditTrailEntity>
  ): Promise<AuditTrailEntity> => {
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