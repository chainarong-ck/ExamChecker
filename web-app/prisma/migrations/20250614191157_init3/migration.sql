/*
  Warnings:

  - Made the column `template_id` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `answer_id` on table `groups` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_template_id_fkey";

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "template_id" SET NOT NULL,
ALTER COLUMN "answer_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "templates"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
