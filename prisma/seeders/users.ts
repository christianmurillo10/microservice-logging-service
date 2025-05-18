import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const down = async () => {
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0`;
  await prisma.$executeRaw`TRUNCATE users`;
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1`;
};

const up = async () => {
  await prisma.users.createMany({
    data: [
      {
        id: "76ace7de-9bd4-4479-87f5-1f9903bd3a27",
        name: "Superadmin",
        username: "superadmin",
        email: "superadmin@email.com",
        access_type: "PORTAL",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  });
};

export default { down, up };