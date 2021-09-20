-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'ซิน','ลาดพร้าว กรุงเทพ'),(2,'ดอม','วังทองหลาง กรุงเทพ'),(3,'เสิน','ดอนเมือง กรุงเทพ'),(4,'ซัน','ถลาง ภูเก็ต'),(5,'บอส','บางละมุง ชลบุรี'),(6,'ลีโอ','เมือง ขอนแก่น'),(7,'บูม','ราชเทวี กรุงเทพ'),(8,'ปาล์ม','ปากเกร็ด นนทบุรี'),(9,'นัท','สองพี่น้อง สุพรรณบุรี'),(10,'ซาย','ดอยเต่า เชียงใหม่'),(11,'เบียร์','เมือง ฉะเชิงเทรา'),(12,'ต้อม','บางละมุง ชลบุรี'),(13,'เกม','ศรีราชา ชลบุรี'),(14,'ปรินซ์','หาดใหญ่ สงขลา'),(15,'โน็ต','เมือง ปทุมธานี'),(16,'เกล้า','ลาดพร้าว กรุงเทพ'),(17,'อั้ม','ด่านซ้าย เลย'),(18,'บอย','แม่สอด ตาก'),(19,'แฮม','ฮอด เชียงใหม่'),(20,'แบงค์','บางแค กรุงเทพ'),(21,'มิกกี้','พนัสนิคม ชลบุรี'),(22,'สแน็ป','อ้อมน้อย สมุทรสาคร'),(23,'ต็อบ','วารินชำราบ อุบลราชธานี'),(24,'ท็อป','สี่คิ้ว นครราชสีมา'),(25,'วิน','เมือง สงขลา'),(26,'ยู','กันทรลักษ์ ศรีสะเกษ'),(27,'แอม','สีลม กรุงเทพ');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'บัญชี',0.00),(2,'บริหาร',0.00),(3,'จัดซื้อ',0.00),(4,'คลังสินค้า',0.00),(5,'บริการหลังการขาย',0.00),(6,'ฝ่ายขาย',0.00);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `department_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_employees_departments_department_id_idx` (`department_id`),
  CONSTRAINT `fk_employees_departments_department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'ปรินซ์','สิชล นครศรีธรรมราช',25000.00,4),(2,'ออม','โพธาราม',30000.00,6),(3,'เต้ย','บางพลัด กรุงเทพ',15000.00,6),(4,'ปอม','เมือง อุดรธานี',23000.00,6),(5,'จั๊ม','บางรัก กรุงเทพ',30000.00,6),(6,'อ๊อด','เมือง สมุทรปราการ',23000.00,6),(7,'แนท','เมือง สมุทรปราการ',18000.00,6),(8,'จุ้ย','เมือง ปทุมธานี',23000.00,6),(9,'พี','นครชัยศรี นครปฐม',16000.00,6),(10,'เอิธ','ลาดพร้าว กรุงเทพ',40000.00,6),(11,'เค้ก','เมือง ขอนแก่น',25000.00,6),(12,'ปั๊บ','เมือง อุดรธานี',22000.00,6),(13,'โอม','หัวหิน ประจวบคีรีขันธ์',35000.00,6),(14,'ก้อย','วัฒนา กรุงเทพ',24000.00,3),(15,'พี','บางพลัด กรุงเทพ',28000.00,6),(16,'แบงค์','เมือง นนทบุรี',17000.00,6),(17,'อู๋','บางมด กรุงเทพ',18000.00,5),(18,'จีโน่','พระประแดง สมุทรปราการ',50000.00,6),(19,'บอล','ธัญบุรี ปทุมธานี',26000.00,6),(20,'ป้อ','บางพลัด กรุงเทพ',20000.00,1),(21,'ตะวัน','เมือง ตาก',30000.00,6);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int unsigned NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `discount` double unsigned NOT NULL DEFAULT '0',
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_items_orders_order_id_idx` (`order_id`),
  KEY `fk_oreder_items_products_product_id_idx` (`product_id`),
  CONSTRAINT `fk_order_items_orders_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_oreder_items_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,650.00,0,1,1),(2,1,560.00,0,1,2),(3,2,650.00,0,2,1),(4,1,560.00,0,2,1),(5,3,515.00,0,3,3),(6,1,625.00,0,4,4),(7,1,650.00,0,5,1),(8,2,560.00,0,5,2),(9,2,625.00,0,5,4),(10,4,1080.00,0.05,6,10),(11,1,515.00,0,7,3),(12,1,625.00,0,7,4),(13,1,480.00,0,8,5),(14,1,550.00,0,8,6),(15,1,780.00,0,8,7),(16,2,800.00,0.05,8,8),(17,5,650.00,0.02,9,1),(18,2,515.00,0,10,3),(19,2,625.00,0,10,4),(20,1,1080.00,0,11,10),(21,2,480.00,0,12,5),(22,2,550.00,0,12,6),(23,2,780.00,0,12,7),(24,3,515.00,0,13,3),(25,3,625.00,0,13,4),(26,1,650.00,0,14,1),(27,1,560.00,0,15,2),(28,1,650.00,0,16,1),(29,5,800.00,0.05,17,8),(30,5,1080.00,0.05,17,10),(31,3,480.00,0,18,5),(32,2,515.00,0,19,3),(33,2,625.00,0,19,4),(34,2,560.00,0,20,2),(35,1,480.00,0,21,5),(36,1,515.00,0,21,3),(37,1,800.00,0,21,8),(38,1,650.00,0,22,1),(39,1,625.00,0,23,4),(40,2,780.00,0,24,7),(41,1,480.00,0,25,5),(42,1,550.00,0,25,6),(43,1,1080.00,0,26,10),(44,2,800.00,0,27,8),(45,1,1080.00,0,27,10),(46,1,560.00,0,27,2),(47,4,800.00,0.05,28,8),(48,2,650.00,0,29,1),(49,2,560.00,0,29,2),(89,1,560.00,0,30,2),(90,1,515.00,0,31,3),(91,1,626.00,0,31,4),(92,2,480.00,0,33,5),(93,2,550.00,0,33,6),(94,2,780.00,0,33,7),(95,1,480.00,0,34,5),(96,1,550.00,0,34,6),(97,1,780.00,0,34,7),(98,1,800.00,0,34,8),(99,1,1080.00,0,34,10),(100,5,650.00,0.02,35,1),(101,2,515.00,0,36,3),(102,2,625.00,0,36,4),(103,1,1080.00,0,37,10),(104,1,800.00,0,38,8),(105,1,1080.00,0,38,10),(106,2,625.00,0,39,4),(107,2,650.00,0,40,1),(108,2,560.00,0,40,2),(109,1,780.00,0,41,7),(110,2,480.00,0,42,5),(111,2,550.00,0,42,6),(112,2,780.00,0,42,7),(113,2,550.00,0,43,6),(114,1,650.00,0,44,1),(115,1,560.00,0,44,2),(116,2,625.00,0,44,4),(117,4,515.00,0.03,45,3),(118,4,625.00,0.03,45,4),(119,1,480.00,0,46,5),(120,1,550.00,0,46,6),(121,1,780.00,0,46,7),(122,2,800.00,0,47,8),(123,1,515.00,0,48,3),(124,1,625.00,0,48,4),(125,1,1080.00,0,49,10),(126,2,650.00,0,50,1),(127,2,560.00,0,50,2),(128,2,515.00,0,50,3),(129,2,625.00,0,50,4),(130,2,560.00,0,51,2),(131,2,515.00,0,51,3),(132,1,780.00,0,52,7),(133,3,650.00,0.01,53,1),(134,2,625.00,0,53,4),(135,2,550.00,0,54,6),(136,2,480.00,0,55,5),(137,1,550.00,0,55,6),(138,1,780.00,0,55,7),(139,2,800.00,0,55,8),(140,1,1080.00,0,55,10),(141,1,650.00,0,56,1),(142,1,560.00,0,56,2),(143,1,560.00,0,57,2),(144,1,515.00,0,57,3),(145,1,480.00,0,57,5),(146,1,650.00,0,58,1),(147,1,800.00,0,58,8),(148,1,1080.00,0,58,10),(149,2,625.00,0,59,4),(150,4,480.00,0.01,60,5),(151,4,515.00,0.01,60,3),(152,2,780.00,0,61,7),(153,1,515.00,0,62,3),(154,1,625.00,0,62,4),(155,1,650.00,0,63,1),(156,1,560.00,0,63,2),(157,2,480.00,0,64,5),(158,2,550.00,0,64,6),(159,2,780.00,0,64,7),(160,1,650.00,0,65,1),(161,1,560.00,0,65,2),(162,1,650.00,0,66,1),(163,2,560.00,0,66,2),(164,3,515.00,0,66,3),(165,1,625.00,0,66,4),(166,1,780.00,0,66,7),(167,1,800.00,0,66,8),(168,1,800.00,0,67,8),(169,1,650.00,0,68,1),(170,2,650.00,0,69,1),(171,2,560.00,0,70,2),(172,2,515.00,0,70,3),(173,1,780.00,0,71,7),(174,2,480.00,0,72,5),(175,2,515.00,0,72,3),(176,1,560.00,0,72,2),(177,1,650.00,0,73,1),(178,1,560.00,0,73,2),(179,2,515.00,0,74,3),(180,1,625.00,0,75,4),(181,2,550.00,0,76,6),(182,2,480.00,0,77,5),(183,2,550.00,0,77,6),(184,2,780.00,0,77,7),(185,2,515.00,0,78,3),(186,2,625.00,0,78,4),(187,3,800.00,0,79,8),(188,1,1080.00,0,80,10),(189,1,780.00,0,81,7),(190,2,650.00,0,82,1),(191,2,560.00,0,82,2),(192,4,650.00,0.02,83,1),(193,5,650.00,0.04,84,1),(194,5,560.00,0.04,84,2),(195,1,650.00,0,85,1),(196,1,560.00,0,85,2),(197,1,515.00,0,85,3),(198,1,625.00,0,85,4),(199,4,1080.00,0.05,86,10),(200,4,800.00,0.05,86,8);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `customer_id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_customers_customer_id_idx` (`customer_id`),
  KEY `fk_orders_employees_employee_id_idx` (`employee_id`),
  CONSTRAINT `fk_orders_customers_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_orders_employees_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2021-02-01',1,2),(2,'2021-02-01',2,4),(3,'2021-02-01',3,9),(4,'2021-02-02',4,10),(5,'2021-02-02',5,3),(6,'2021-02-02',6,4),(7,'2021-02-02',7,5),(8,'2021-02-03',8,13),(9,'2021-02-03',9,21),(10,'2021-02-03',10,16),(11,'2021-02-03',11,16),(12,'2021-02-03',12,15),(13,'2021-02-03',13,2),(14,'2021-02-04',14,19),(15,'2021-02-04',15,18),(16,'2021-02-04',16,4),(17,'2021-02-04',17,5),(18,'2021-02-04',1,5),(19,'2021-02-04',18,3),(20,'2021-02-04',7,21),(21,'2021-02-04',19,2),(22,'2021-02-05',20,2),(23,'2021-02-05',21,2),(24,'2021-02-06',5,12),(25,'2021-02-06',6,13),(26,'2021-02-06',22,11),(27,'2021-02-07',23,5),(28,'2021-02-08',25,NULL),(29,'2021-02-08',26,8),(30,'2021-02-09',5,15),(31,'2021-02-09',9,NULL),(32,'2021-02-10',22,16),(33,'2021-02-10',20,18),(34,'2021-02-10',13,3),(35,'2021-02-12',11,7),(36,'2021-02-12',1,10),(37,'2021-02-13',7,NULL),(38,'2021-02-13',12,2),(39,'2021-02-13',22,8),(40,'2021-02-14',5,11),(41,'2021-02-14',8,16),(42,'2021-02-14',25,3),(43,'2021-02-14',13,6),(44,'2021-02-14',19,5),(45,'2021-02-14',20,9),(46,'2021-02-15',1,3),(47,'2021-02-16',7,4),(48,'2021-02-16',5,7),(49,'2021-02-16',13,8),(50,'2021-02-17',19,6),(51,'2021-02-17',2,9),(52,'2021-02-18',22,16),(53,'2021-02-18',26,15),(54,'2021-02-18',3,21),(55,'2021-02-18',7,3),(56,'2021-02-18',11,8),(57,'2021-02-18',14,9),(58,'2021-02-19',1,2),(59,'2021-02-19',2,2),(60,'2021-02-20',3,21),(61,'2021-02-21',4,10),(62,'2021-02-21',5,18),(63,'2021-02-21',11,9),(64,'2021-02-21',12,9),(65,'2021-02-22',23,NULL),(66,'2021-02-22',24,NULL),(67,'2021-02-22',25,NULL),(68,'2021-02-22',9,5),(69,'2021-02-22',10,3),(70,'2021-02-22',7,8),(71,'2021-02-23',18,8),(72,'2021-02-23',17,8),(73,'2021-02-24',1,3),(74,'2021-02-24',2,8),(75,'2021-02-25',7,19),(76,'2021-02-26',5,21),(77,'2021-02-26',11,7),(78,'2021-02-26',13,7),(79,'2021-02-27',21,9),(80,'2021-02-27',25,12),(81,'2021-02-28',14,14),(82,'2021-02-28',6,11),(83,'2021-02-28',3,6),(84,'2021-02-28',7,NULL),(85,'2021-02-28',20,NULL),(86,'2021-02-28',1,10);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `quantity` int unsigned NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_suppliers_supplier_id_idx` (`supplier_id`),
  CONSTRAINT `fk_products_suppliers_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'น้ำดื่มตรา เสือ',NULL,650.00,12,1),(2,'น้ำดื่มตรา สิงโต',NULL,560.00,12,1),(3,'น้ำดื่มตรา คชสาร',NULL,515.00,12,2),(4,'น้ำดื่มตรา แมมมอธ',NULL,625.00,12,2),(5,'น้ำดื่มตรา มะลิ',NULL,480.00,12,3),(6,'น้ำดื่มตรา ชีตาร์',NULL,550.00,12,3),(7,'น้ำดื่มตรา ยีราฟ',NULL,780.00,12,3),(8,'น้ำดื่มตรา หอยมุก',NULL,800.00,12,4),(9,'น้ำดื่มตรา ลิง',NULL,980.00,12,4),(10,'น้ำดื่มตรา ไฮยีน่า',NULL,1080.00,12,4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'บุญลด บริวเวอรี่','นิคมคำสร้อย มุกดาหาร','081-111-1111'),(2,'ไท เอฟเวอเรสต์','ยะหริ่ง ปัตตานี','081-222-2222'),(3,'ไท อาเซียน แอตแลนติก','ไทรโยค กาญจนบุรี','081-333-3333'),(4,'ไท คราฟท์','ปาย แม่ฮ่องสอน','081-444-4444');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-16  5:21:12
