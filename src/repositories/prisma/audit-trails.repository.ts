import { PrismaClient } from "@prisma/client";
import AuditTrailsModel from "../../models/audit-trails.model";
import AuditTrailsRepository from "../audit-trails.interface";
import {
  FindAllArgs,
  FindAllBetweenCreatedAtArgs,
  FindByIdArgs,
  CreateArgs,
  CountArgs,
} from "../../shared/types/repository.type";
import { parseQueryFilters, setSelectExclude } from "../../shared/helpers/common.helper";
import { auditTrailsSubsets, businessesSubsets } from "../../shared/helpers/select-subset.helper";
import { ActionValue, GenericObject, ServiceNameValue } from "../../shared/types/common.type";

export default class PrismaAuditTrailsRepository implements AuditTrailsRepository {
  private client;

  constructor() {
    const prisma = new PrismaClient();
    this.client = prisma.audit_trails;
  };

  findAll = async (
    args: FindAllArgs
  ): Promise<AuditTrailsModel[]> => {
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

    return res.map(item => new AuditTrailsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      action: item.action as ActionValue,
      old_details: item.old_details as GenericObject,
      new_details: item.new_details as GenericObject
    }));
  };

  findAllBetweenCreatedAt = async (
    args: FindAllBetweenCreatedAtArgs
  ): Promise<AuditTrailsModel[]> => {
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

    return res.map(item => new AuditTrailsModel({
      ...item,
      service_name: item.service_name as ServiceNameValue,
      action: item.action as ActionValue,
      old_details: item.old_details as GenericObject,
      new_details: item.new_details as GenericObject
    }));
  };

  findById = async (
    args: FindByIdArgs<string>
  ): Promise<AuditTrailsModel | null> => {
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

    return new AuditTrailsModel({
      ...res,
      service_name: res.service_name as ServiceNameValue,
      action: res.action as ActionValue,
      old_details: res.old_details as GenericObject,
      new_details: res.new_details as GenericObject
    });
  };

  create = async (
    args: CreateArgs<AuditTrailsModel>
  ): Promise<AuditTrailsModel> => {
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

    return new AuditTrailsModel({
      ...data,
      service_name: data.service_name as ServiceNameValue,
      action: data.action as ActionValue,
      old_details: data.old_details as GenericObject,
      new_details: data.new_details as GenericObject
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