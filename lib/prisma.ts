import { PrismaClient } from "@prisma/client";

const globalForPrism = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrism.prisma ?? new PrismaClient({ log: ['query']})

if (process.env.NODE_ENV !== 'production') globalForPrism.prisma = prisma