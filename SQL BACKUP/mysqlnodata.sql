-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: gcms
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `child_theloai`
--

DROP TABLE IF EXISTS `child_theloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `child_theloai` (
  `ID_child_theloai` int NOT NULL AUTO_INCREMENT,
  `ten_child_theloai` varchar(155) NOT NULL,
  `isNull_child_theloai` tinyint NOT NULL DEFAULT '1',
  `sapxep_child_theloai` varchar(45) DEFAULT NULL,
  `idTheLoai` int NOT NULL,
  PRIMARY KEY (`ID_child_theloai`),
  UNIQUE KEY `ID_child_theloai_UNIQUE` (`ID_child_theloai`),
  KEY `idTheLoai_idx` (`idTheLoai`),
  CONSTRAINT `idTheLoai` FOREIGN KEY (`idTheLoai`) REFERENCES `theloai` (`idTheLoai`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `child_theloai`
--

LOCK TABLES `child_theloai` WRITE;
/*!40000 ALTER TABLE `child_theloai` DISABLE KEYS */;
INSERT INTO `child_theloai` VALUES (1,'Bản Tin Teyvat',1,NULL,4);
/*!40000 ALTER TABLE `child_theloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danhmuctin`
--

DROP TABLE IF EXISTS `danhmuctin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danhmuctin` (
  `id_phanloaitin` int NOT NULL AUTO_INCREMENT,
  `ten_phanloaitin` varchar(50) NOT NULL,
  `isNull` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_phanloaitin`),
  UNIQUE KEY `id_phanloaitin_UNIQUE` (`id_phanloaitin`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhmuctin`
--

LOCK TABLES `danhmuctin` WRITE;
/*!40000 ALTER TABLE `danhmuctin` DISABLE KEYS */;
INSERT INTO `danhmuctin` VALUES (1,'Tin Vắn',1),(2,'Tin Nổi Bật',1);
/*!40000 ALTER TABLE `danhmuctin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quyen`
--

DROP TABLE IF EXISTS `quyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quyen` (
  `idquyen` tinyint NOT NULL,
  `tenquyen` varchar(45) NOT NULL,
  PRIMARY KEY (`idquyen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quyen`
--

LOCK TABLES `quyen` WRITE;
/*!40000 ALTER TABLE `quyen` DISABLE KEYS */;
INSERT INTO `quyen` VALUES (0,'Người dùng'),(1,'Quản Trị Viên'),(2,'Cộng tác viên');
/*!40000 ALTER TABLE `quyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhvien`
--

DROP TABLE IF EXISTS `thanhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhvien` (
  `id_thanhvien` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(45) NOT NULL,
  `sex` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `id_nguyenquan` int NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `accesslevel` tinyint NOT NULL,
  `active` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_thanhvien`),
  UNIQUE KEY `id_thanhvien_UNIQUE` (`id_thanhvien`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `idtinh_idx` (`id_nguyenquan`),
  KEY `idquyen_idx` (`accesslevel`),
  CONSTRAINT `idquyen` FOREIGN KEY (`accesslevel`) REFERENCES `quyen` (`idquyen`),
  CONSTRAINT `idtinh` FOREIGN KEY (`id_nguyenquan`) REFERENCES `tinh` (`idtinh`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhvien`
--

LOCK TABLES `thanhvien` WRITE;
/*!40000 ALTER TABLE `thanhvien` DISABLE KEYS */;
INSERT INTO `thanhvien` VALUES (4,'Quản Trị Viên','Nam','hieukka912@gmail.com',326305841,'Khu 2 Hoàng Cương Thanh Ba Phú Thọ',34,'admin','admin',1,1);
/*!40000 ALTER TABLE `thanhvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theloai`
--

DROP TABLE IF EXISTS `theloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theloai` (
  `idTheLoai` int NOT NULL AUTO_INCREMENT,
  `tenTheLoai` varchar(45) NOT NULL,
  `isNull` tinyint NOT NULL DEFAULT '1',
  `sapxep` tinyint DEFAULT NULL,
  PRIMARY KEY (`idTheLoai`),
  UNIQUE KEY `idTheLoai_UNIQUE` (`idTheLoai`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theloai`
--

LOCK TABLES `theloai` WRITE;
/*!40000 ALTER TABLE `theloai` DISABLE KEYS */;
INSERT INTO `theloai` VALUES (1,'Cosplay',1,1),(2,'Mobile',1,2),(3,'PC/Console',1,3),(4,'Độc lạ Teyvat',1,4);
/*!40000 ALTER TABLE `theloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinh`
--

DROP TABLE IF EXISTS `tinh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinh` (
  `idtinh` int NOT NULL,
  `tentinh` varchar(45) NOT NULL,
  PRIMARY KEY (`idtinh`),
  UNIQUE KEY `idtinh_UNIQUE` (`idtinh`),
  UNIQUE KEY `tentinh_UNIQUE` (`tentinh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinh`
--

LOCK TABLES `tinh` WRITE;
/*!40000 ALTER TABLE `tinh` DISABLE KEYS */;
INSERT INTO `tinh` VALUES (34,'Hải Dương');
/*!40000 ALTER TABLE `tinh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tintuc`
--

DROP TABLE IF EXISTS `tintuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tintuc` (
  `idtintuc` int NOT NULL AUTO_INCREMENT,
  `tieudetin` text NOT NULL,
  `hinhtrichdan` varchar(255) DEFAULT NULL,
  `trichdantin` text,
  `ID_child_theloai` int NOT NULL,
  `id_phanloaitin` int NOT NULL,
  `id_tacgia` int NOT NULL,
  `ngaycapnhat` datetime NOT NULL,
  `solandoc` int NOT NULL DEFAULT '0',
  `kiemduyet` tinyint NOT NULL DEFAULT '0',
  `isActive` varchar(45) NOT NULL DEFAULT '"none"',
  `isNull` tinyint NOT NULL DEFAULT '1',
  `content` json DEFAULT NULL,
  PRIMARY KEY (`idtintuc`),
  UNIQUE KEY `idtintuc_UNIQUE` (`idtintuc`),
  KEY `ID_child_theloai_idx` (`ID_child_theloai`),
  KEY `id_phanloaitin_idx` (`id_phanloaitin`),
  KEY `id_thanhvien_idx` (`id_tacgia`),
  CONSTRAINT `ID_child_theloai` FOREIGN KEY (`ID_child_theloai`) REFERENCES `child_theloai` (`ID_child_theloai`),
  CONSTRAINT `id_phanloaitin` FOREIGN KEY (`id_phanloaitin`) REFERENCES `danhmuctin` (`id_phanloaitin`),
  CONSTRAINT `id_thanhvien` FOREIGN KEY (`id_tacgia`) REFERENCES `thanhvien` (`id_thanhvien`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tintuc`
--

LOCK TABLES `tintuc` WRITE;
/*!40000 ALTER TABLE `tintuc` DISABLE KEYS */;
INSERT INTO `tintuc` VALUES (1,'Demo sửa','C:fakepath346971591_640401574609023_7260348714798282656_n.jpg','demo',1,1,4,'2023-12-08 00:00:00',3,1,'active',1,'{\"blocks\": [{\"id\": \"VGxKY1Mb1z\", \"data\": {\"file\": {\"url\": \"http://localhost:3030/public/images/1685378282844.jpg\"}, \"caption\": \"\", \"stretched\": false, \"withBorder\": false, \"withBackground\": false}, \"type\": \"image\"}, {\"id\": \"JPZ0G-TuVY\", \"data\": {\"file\": {\"url\": \"http://localhost:3030/public/images/1685378970355.webp\"}, \"caption\": \"\", \"stretched\": false, \"withBorder\": false, \"withBackground\": false}, \"type\": \"image\"}]}');
/*!40000 ALTER TABLE `tintuc` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-30  0:02:07
