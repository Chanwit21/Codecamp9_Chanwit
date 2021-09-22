/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : testseq

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 22/09/2021 09:09:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `open_date` date NOT NULL,
  `close_date` date NULL DEFAULT NULL,
  `balance` decimal(15, 2) NOT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `customer_id` int(0) NOT NULL,
  `branch_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `customer_id`(`customer_id`) USING BTREE,
  INDEX `branch_id`(`branch_id`) USING BTREE,
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES (1, '2005-01-04', NULL, 1057.75, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 1, 2);
INSERT INTO `accounts` VALUES (2, '2004-12-19', NULL, 500.00, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 1, 2);
INSERT INTO `accounts` VALUES (3, '2004-12-17', NULL, 50000.00, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 3, 3);
INSERT INTO `accounts` VALUES (4, '2015-07-24', NULL, 791.82, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 6, 10);
INSERT INTO `accounts` VALUES (5, '2016-12-11', NULL, 4621.33, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 2, 1);
INSERT INTO `accounts` VALUES (6, '2004-10-28', NULL, 9345.55, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 4, 1);
INSERT INTO `accounts` VALUES (7, '2005-01-03', NULL, 3487.19, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 1, 4);
INSERT INTO `accounts` VALUES (8, '2011-11-12', NULL, 11382.12, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 5, 10);
INSERT INTO `accounts` VALUES (9, '2021-01-24', NULL, 5000.00, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 2, 7);
INSERT INTO `accounts` VALUES (10, '2019-04-30', NULL, 2730.46, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 6, 8);
INSERT INTO `accounts` VALUES (11, '2010-06-22', '2020-09-09', 0.00, 0, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 4, 4);
INSERT INTO `accounts` VALUES (12, '2008-02-15', NULL, 16390.22, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 3, 9);
INSERT INTO `accounts` VALUES (13, '2012-07-09', NULL, 187903.52, 0, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 1, 5);
INSERT INTO `accounts` VALUES (14, '2015-10-01', NULL, 751.09, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 6, 1);
INSERT INTO `accounts` VALUES (15, '2013-06-14', NULL, 8346.27, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 3, 7);
INSERT INTO `accounts` VALUES (16, '2017-03-15', NULL, 92077.11, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 2, 6);
INSERT INTO `accounts` VALUES (17, '2000-05-08', NULL, 20927.91, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 2, 4);
INSERT INTO `accounts` VALUES (18, '2002-08-31', NULL, 23.77, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 5, 10);
INSERT INTO `accounts` VALUES (19, '2009-12-11', NULL, 43875.21, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 3, 3);
INSERT INTO `accounts` VALUES (20, '2004-07-29', NULL, 9563.65, 1, '2021-09-21 23:02:21', '2021-09-21 23:02:21', 5, 6);

-- ----------------------------
-- Table structure for branches
-- ----------------------------
DROP TABLE IF EXISTS `branches`;
CREATE TABLE `branches`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of branches
-- ----------------------------
INSERT INTO `branches` VALUES (1, 'All Seasons Place', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (2, 'Baiyoke Center', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (3, 'Metropolitan Waterworks', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (4, 'Charoen Nakhon Road', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (5, 'Big C Bangpakok', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (6, 'Khlong Toei Metropolitan Electricity', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (7, 'It Square Laksi', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (8, 'Paradise Park', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (9, 'Rajathevi', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `branches` VALUES (10, 'Kao San Road', '2021-09-21 23:02:21', '2021-09-21 23:02:21');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gender` enum('MALE','FEMALE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `birth_date` date NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES (1, 'Chetta', 'Ratana', 'MALE', '1998-05-04', '95/1 Ngarmvongvam Thung Song Hong Laksi Nonthaburi 10210', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `customers` VALUES (2, 'Ngam', 'Prachuab', 'MALE', '1984-11-21', '79 Phetkasem 81 Rd. Nong Khang Plu Nong Khaem Bangkok 10160', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `customers` VALUES (3, 'Pricha', 'Kurusarttra', 'MALE', '1992-10-11', '157/333 Soi Unaree Sukhumvit Road Muang Samut Prakan 10270', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `customers` VALUES (4, 'Tulaya', 'Chamlong', 'FEMALE', '1973-08-07', '49/4 Soi Inthamara 13 Suthisarn Samsaen Nai Phaya Thai Bangkok 10400', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `customers` VALUES (5, 'Putsaya', 'Inchareon', 'FEMALE', '1995-03-12', '111/9-10 Phloenchit Tumbol Naimueang Amphoe Mueang Roi Et Roi Et 45000', '2021-09-21 23:02:21', '2021-09-21 23:02:21');
INSERT INTO `customers` VALUES (6, 'Daran', 'Pinthong', 'MALE', '1976-07-19', '106/111 Rattanathibet Tumbol Bang Kraso Amphoe Mueang Nonthaburi Nonthaburi 11000', '2021-09-21 23:02:21', '2021-09-21 23:02:21');

SET FOREIGN_KEY_CHECKS = 1;
