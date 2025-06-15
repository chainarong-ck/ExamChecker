-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" CHAR(36) NOT NULL,
    "username" VARCHAR(25) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "email" VARCHAR(100),
    "disable" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region_types" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,

    CONSTRAINT "region_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,
    "region_type_id" INTEGER NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templates" (
    "id" CHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "image_filename" VARCHAR(255) NOT NULL,
    "pdf_filename" VARCHAR(255) NOT NULL,
    "total_no" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_regions" (
    "id" SERIAL NOT NULL,
    "template_id" CHAR(36) NOT NULL,
    "region_id" INTEGER NOT NULL,
    "sx" INTEGER NOT NULL,
    "sy" INTEGER NOT NULL,
    "ex" INTEGER NOT NULL,
    "ey" INTEGER NOT NULL,

    CONSTRAINT "template_regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_marker_centers" (
    "template_region_id" INTEGER NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,

    CONSTRAINT "template_marker_centers_pkey" PRIMARY KEY ("template_region_id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" CHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "owner_id" CHAR(36) NOT NULL,
    "subject" VARCHAR(50) NOT NULL,
    "year" INTEGER NOT NULL,
    "term" INTEGER NOT NULL,
    "total_no" INTEGER NOT NULL,
    "shared" BOOLEAN NOT NULL DEFAULT false,
    "disable" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer_details" (
    "id" SERIAL NOT NULL,
    "answer_id" CHAR(36) NOT NULL,
    "no" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "correct_all" BOOLEAN NOT NULL DEFAULT false,
    "choice_correct" JSONB,

    CONSTRAINT "answer_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" CHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(50) NOT NULL,
    "year" INTEGER NOT NULL,
    "term" INTEGER NOT NULL,
    "owner_id" CHAR(36) NOT NULL,
    "template_id" CHAR(36),
    "answer_id" CHAR(36),
    "disable" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sheet_statuses" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,

    CONSTRAINT "sheet_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sheets" (
    "id" CHAR(36) NOT NULL,
    "original_name" VARCHAR(255) NOT NULL,
    "image_filename" VARCHAR(255) NOT NULL,
    "group_id" CHAR(36) NOT NULL,
    "total_scores" INTEGER NOT NULL DEFAULT 0,
    "sheet_status_id" INTEGER NOT NULL DEFAULT 1,
    "process_id" CHAR(36),
    "predict_ans_detail" JSONB,
    "predict_ans_result" JSONB,
    "predict_std_fill_detail" JSONB,
    "predict_std_fill_result" JSONB,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sheets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cross_types" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "detail" VARCHAR(255) NOT NULL,

    CONSTRAINT "cross_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "region_types_name_key" ON "region_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "regions_name_key" ON "regions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "template_regions_template_id_region_id_key" ON "template_regions"("template_id", "region_id");

-- CreateIndex
CREATE UNIQUE INDEX "answer_details_answer_id_no_key" ON "answer_details"("answer_id", "no");

-- CreateIndex
CREATE UNIQUE INDEX "groups_name_key" ON "groups"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sheet_statuses_name_key" ON "sheet_statuses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cross_types_name_key" ON "cross_types"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "regions" ADD CONSTRAINT "regions_region_type_id_fkey" FOREIGN KEY ("region_type_id") REFERENCES "region_types"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "template_regions" ADD CONSTRAINT "template_regions_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "template_regions" ADD CONSTRAINT "template_regions_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "template_marker_centers" ADD CONSTRAINT "template_marker_centers_template_region_id_fkey" FOREIGN KEY ("template_region_id") REFERENCES "template_regions"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "answer_details" ADD CONSTRAINT "answer_details_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "templates"("id") ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_sheet_status_id_fkey" FOREIGN KEY ("sheet_status_id") REFERENCES "sheet_statuses"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
