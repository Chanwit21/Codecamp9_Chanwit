CREATE DATABASE `todo_mysql`;
USE `todo_mysql`;

CREATE TABLE `todo_mysql`.`lists` (
  `id` INT NOT NULL auto_increment,
  `title` VARCHAR(255) NOT NULL,
  `completed` TINYINT NOT NULL DEFAULT 0,
  `due_date` DATE NULL,
  PRIMARY KEY (`id`));