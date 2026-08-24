import { PrismaClient } from "../generated/prisma";

// Global e ekbar e Prisma Client toiri kore rakhi,
// tahole prottek request e notun connection toiri hobe na.
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});