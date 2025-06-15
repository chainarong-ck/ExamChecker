/*
  Warnings:

  - Added the required column `marker_bl_center` to the `sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marker_br_center` to the `sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marker_tl_center` to the `sheets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marker_tr_center` to the `sheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sheets" ADD COLUMN     "marker_bl_center" JSONB NOT NULL,
ADD COLUMN     "marker_br_center" JSONB NOT NULL,
ADD COLUMN     "marker_tl_center" JSONB NOT NULL,
ADD COLUMN     "marker_tr_center" JSONB NOT NULL;
