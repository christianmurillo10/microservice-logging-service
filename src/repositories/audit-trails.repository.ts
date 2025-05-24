import { PrismaClient } from "@prisma/client";
import AuditTrails from "../models/audit-trails.model";
import IAuditTrailsRepository from "../shared/types/repositories/audit-trails.interface";
import {
  TFindAllArgs,
  TFindAllBetweenCreatedAtArgs,
  TFindByIdArgs,
  TCreateArgs,
  TCountArgs,
} from "../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../shared/helpers/common.helper";
import { auditTrailsSubsets, businessesSubsets } from "../shared/helpers/select-subset.helper";
import { TGenericObject, TServiceName } from "../shared/types/common.type";
import { TAuditTrailsAction } from "../entities/audit-trails.entity";

export default class AuditTrailsRepository implements IAuditTrailsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.audit_trails;
  };

  findAll = async (
    args: TFindAllArgs
  ): Promise<AuditTrails[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...auditTrailsSubsets,
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

    return res.map(item => new AuditTrails({
      ...item,
      service_name: item.service_name as TServiceName,
      action: item.action as TAuditTrailsAction,
      old_details: item.old_details as TGenericObject,
      new_details: item.new_details as TGenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: TFindAllBetweenCreatedAtArgs
  ): Promise<AuditTrails[]> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const betweenCreatedAt = args.date_from && args.date_to
      ? { created_at: { gte: new Date(args.date_from), lte: new Date(args.date_to) } }
      : undefined;
    const res = await this.client.findMany({
      select: {
        ...auditTrailsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        ...args.condition,
        ...betweenCreatedAt,
      }
    });

    return res.map(item => new AuditTrails({
      ...item,
      service_name: item.service_name as TServiceName,
      action: item.action as TAuditTrailsAction,
      old_details: item.old_details as TGenericObject,
      new_details: item.new_details as TGenericObject
    }));
  };

  findById = async (
    args: TFindByIdArgs<string>
  ): Promise<AuditTrails | null> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const res = await this.client.findFirst({
      select: {
        ...auditTrailsSubsets,
        ...exclude,
        ...businessesSelect
      },
      where: {
        id: args.id,
        ...args.condition
      }
    });

    if (!res) return null;

    return new AuditTrails({
      ...res,
      service_name: res.service_name as TServiceName,
      action: res.action as TAuditTrailsAction,
      old_details: res.old_details as TGenericObject,
      new_details: res.new_details as TGenericObject
    });
  };

  create = async (
    args: TCreateArgs<AuditTrails>
  ): Promise<AuditTrails> => {
    const exclude = setSelectExclude(args.exclude!);
    const businessesSelect = args.include?.includes("businesses")
      ? { businesses: { select: { ...businessesSubsets, deleted_at: false } } }
      : undefined;
    const data = await this.client.create({
      select: {
        ...auditTrailsSubsets,
        ...exclude,
        ...businessesSelect
      },
      data: args.params
    });

    return new AuditTrails({
      ...data,
      service_name: data.service_name as TServiceName,
      action: data.action as TAuditTrailsAction,
      old_details: data.old_details as TGenericObject,
      new_details: data.new_details as TGenericObject
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