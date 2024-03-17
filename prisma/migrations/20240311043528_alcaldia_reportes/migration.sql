/*
  Warnings:

  - You are about to drop the column `rep_id` on the `Alcaldia` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[alc_id]` on the table `Reportes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alc_id` to the `Reportes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Alcaldia" DROP CONSTRAINT "Alcaldia_rep_id_fkey";

-- DropIndex
DROP INDEX "Alcaldia_rep_id_key";

-- AlterTable
ALTER TABLE "Alcaldia" DROP COLUMN "rep_id";

-- AlterTable
ALTER TABLE "Reportes" ADD COLUMN     "alc_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reportes_alc_id_key" ON "Reportes"("alc_id");

-- AddForeignKey
ALTER TABLE "Reportes" ADD CONSTRAINT "Reportes_alc_id_fkey" FOREIGN KEY ("alc_id") REFERENCES "Alcaldia"("alc_id") ON DELETE RESTRICT ON UPDATE CASCADE;
