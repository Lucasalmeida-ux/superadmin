-- AlterTable
ALTER TABLE `Account` ADD COLUMN `id_token_expires_in` VARCHAR(191) NULL,
    ADD COLUMN `not_before` INTEGER NULL,
    ADD COLUMN `profile_info` VARCHAR(191) NULL;
