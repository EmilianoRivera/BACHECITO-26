/*
  Warnings:

  - A unique constraint covering the columns `[alc_id]` on the table `Alcaldia` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rep_fechaReporte` to the `Reportes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reportes" ADD COLUMN     "rep_fechaReporte" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Alcaldia_alc_id_key" ON "Alcaldia"("alc_id");
