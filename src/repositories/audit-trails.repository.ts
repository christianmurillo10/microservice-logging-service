import { PrismaClient } from "@prisma/client";
import AuditTrails from "../models/audit-trails.model";
import AuditTrailsRepositoryInterface from "../shared/types/repositories/audit-trails.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { auditTrailsSubsets } from "../shared/helpers/select-subset.helper";
import { GenericObject } from "../shared/types/common.type";
import { AuditTrailsAction } from "../entities/audit-trails.entity";


export default class AuditTrailsRepository implements AuditTrailsRepositoryInterface {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.audit_trails;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<AuditTrails[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findMany({
      select: {
        ...auditTrailsSubsets,
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

    return res.map(item => new AuditTrails({
      ...item,
      action: item.action as AuditTrailsAction,
      old_details: item.old_details as GenericObject,
      new_details: item.new_details as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<AuditTrails[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const betweenCreatedAt = args.date_from && args.date_to
      ? { created_at: { gte: new Date(args.date_from), lte: new Date(args.date_to) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...auditTrailsSubsets,
        ...exclude
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new AuditTrails({
      ...item,
      action: item.action as AuditTrailsAction,
      old_details: item.old_details as GenericObject,
      new_details: item.new_details as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<AuditTrails | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const res = await this.client.findFirst({
      select: {
        ...auditTrailsSubsets,
        ...exclude
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new AuditTrails({
      ...res,
      action: res.action as AuditTrailsAction,
      old_details: res.old_details as GenericObject,
      new_details: res.new_details as GenericObject
    });
  };

  create = async (
    args: CreateArgs<AuditTrails>
  ): Promise<AuditTrails> => {
    const exclude = setSelectExclude(args.exclude!);
    const data = await this.client.create({
      select: {
        ...auditTrailsSubsets,
        ...exclude
      },
      data: args.params
    });

    return new AuditTrails({
      ...data,
      action: data.action as AuditTrailsAction,
      old_details: data.old_details as GenericObject,
      new_details: data.new_details as GenericObject
    });
  };
};