-- CreateTable
CREATE TABLE `businesses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `api_key` VARCHAR(255) NOT NULL,
    `domain` VARCHAR(255) NULL,
    `preferred_timezone` VARCHAR(100) NULL,
    `currency` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NULL,
    `deleted_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `access_type` VARCHAR(100) NOT NULL,
    `business_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NULL,
    `deleted_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `audit_trails` (
    `id` CHAR(36) NOT NULL,
    `service_name` VARCHAR(100) NOT NULL,
    `entity_type` VARCHAR(100) NOT NULL,
    `entity_id` VARCHAR(255) NOT NULL,
    `action` VARCHAR(100) NOT NULL,
    `old_details` JSON NOT NULL,
    `new_details` JSON NOT NULL,
    `created_user_id` CHAR(36) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `created_user_id`(`created_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_actions` (
    `id` CHAR(36) NOT NULL,
    `service_name` VARCHAR(100) NOT NULL,
    `action` VARCHAR(100) NOT NULL,
    `action_details` JSON NOT NULL,
    `ip_address` VARCHAR(100) NOT NULL,
    `user_agent` VARCHAR(100) NOT NULL,
    `session_id` VARCHAR(255) NOT NULL,
    `user_id` CHAR(36) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_logs` (
    `id` CHAR(36) NOT NULL,
    `service_name` VARCHAR(100) NOT NULL,
    `event_type` VARCHAR(100) NOT NULL,
    `payload` JSON NOT NULL,
    `created_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `businesses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `audit_trails` ADD CONSTRAINT `audit_trails_ibfk_1` FOREIGN KEY (`created_user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_actions` ADD CONSTRAINT `user_actions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
