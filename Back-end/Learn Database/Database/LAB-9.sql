create database learn_db_bank;
use learn_db_bank;

create database world;
use world;

SELECT * FROM `city`;
SELECT * FROM `country`;
SELECT * FROM `city` WHERE `District` = "Dhaka";
SELECT Name FROM `city` WHERE `CountryCode` = "AFG" OR `CountryCode` =  "IDN";
SELECT * FROM `city` WHERE `CountryCode` IN ("AFG","IDN","THA","ESP");
SELECT * FROM `countrylanguage` WHERE `Language`="English" AND `IsOfficial`="T";
SELECT * FROM `country` ORDER BY `Name` DESC;
SELECT * FROM `countrylanguage` ORDER BY `Percentage` DESC;

SELECT DISTINCT `Language` FROM countrylanguage;
SELECT DISTINCT `District` FROM `city` WHERE `CountryCode` = "NLD";
SELECT * FROM `city` ORDER BY `Name` DESC LIMIT 50 OFFSET 0;  
-- ต้องใช้แบบ IS NULL ไม่ใช่ = NULL
SELECT * FROM `country` WHERE `Capital` IS NULL;
SELECT * FROM `country` LIMIT 51 OFFSET 149;
SELECT * FROM `country` WHERE `Name` LIKE "%land%";
SELECT * FROM `country` WHERE `Name` LIKE "T%";
SELECT * FROM `city`WHERE `Name` LIKE "%a";

SELECT * FROM `country`WHERE `Name` LIKE "G%a";
SELECT * FROM `country`WHERE `Name` LIKE "______";
SELECT * FROM `city` WHERE `CountryCode`= "BRA" AND `District` LIKE "%c%";
SELECT * FROM `city` WHERE `CountryCode`= "GBR" AND `District` = "England" ORDER BY `Name` DESC LIMIT 10 OFFSET 10;
SELECT DISTINCT `District` FROM `city` WHERE `CountryCode` LIKE "G%" ORDER BY `District` LIMIT 5 OFFSET 20;