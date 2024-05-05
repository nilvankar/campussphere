/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `instituteName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('Married', 'UnMarried');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phoneNo" SET DATA TYPE BIGINT,
ALTER COLUMN "instituteName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "role" SET DEFAULT  ;

-- CreateTable
CREATE TABLE "Institute" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "name_institute" TEXT NOT NULL,
    "founderName" TEXT NOT NULL,
    "affliation" TEXT NOT NULL,
    "shortcode" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "alternateEmail" TEXT NOT NULL,
    "landLineNo" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "panNo" INTEGER NOT NULL,
    "officeNo" INTEGER NOT NULL,
    "yearOfEstablishment" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "branchLogo" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "registrationNumber" INTEGER NOT NULL,
    "alias" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "alteranteEmail" TEXT NOT NULL,
    "contactNo" INTEGER NOT NULL,
    "officeNo" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "yearOfEstablishment" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT  ,
    "maritalStatus" "MaritalStatus" NOT NULL DEFAULT  ,
    "email" TEXT NOT NULL,
    "alternateEmail" TEXT NOT NULL,
    "landLineNumber" INTEGER NOT NULL,
    "adharNo" INTEGER NOT NULL,
    "panNo" INTEGER NOT NULL,
    "joiningData" TIMESTAMP(3) NOT NULL,
    "salary" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL,
    "contactNo" INTEGER NOT NULL,
    "jobDesignation" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT  ,
    "maritalStatus" "MaritalStatus" NOT NULL DEFAULT  ,
    "email" TEXT NOT NULL,
    "alternateEmail" TEXT NOT NULL,
    "studentProfile" TEXT NOT NULL,
    "contactNo" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
