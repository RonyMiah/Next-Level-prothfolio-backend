/*
  Warnings:

  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `upodatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('SUPPER_ADMIN', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('ACTIVE', 'BLOCKED', 'DELETED');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "userRole" NOT NULL,
ADD COLUMN     "status" "userStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "upodatedAt" TIMESTAMP(3) NOT NULL;
