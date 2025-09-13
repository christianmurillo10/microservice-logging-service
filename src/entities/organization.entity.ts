import Organization from "../models/organization.model";

class OrganizationEntity implements Organization {
  id?: string;
  name: string;
  logoPath?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;

  constructor(props: Organization) {
    this.id = props.id;
    this.name = props.name;
    this.logoPath = props.logoPath;
    this.isActive = props.isActive;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  };
};

export default OrganizationEntity;