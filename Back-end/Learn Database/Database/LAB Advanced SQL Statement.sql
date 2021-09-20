USE world;

-- LAB1 
SELECT `CountryCode` AS `Code` FROM `city`;
-- LAB2 
SELECT COUNT(*) FROM `country`;
SELECT COUNT(DISTINCT `Language`) FROM `countrylanguage`;
SELECT COUNT(DISTINCT `District`) FROM `city`;
-- LAB3
SELECT SUM(`Percentage`) FROM `countrylanguage` WHERE `Language` = "dutch" ; 
SELECT SUM(`Percentage`) FROM `countrylanguage` WHERE `Language` = "english"  AND `Percentage` > 50;
-- LAB4 
SELECT AVG(`Percentage`) FROM `countrylanguage` WHERE `Language` = "greek";
SELECT AVG(`Percentage`) FROM `countrylanguage` WHERE `Language` = "spanish" AND `isOfficial` = "T" ;
-- LAB5 
SELECT AVG(`Percentage`),MAX(`Percentage`) ,MIN(`Percentage`)  FROM `countrylanguage` ;
SELECT AVG(`Percentage`),MAX(`Percentage`) ,MIN(`Percentage`)  FROM `countrylanguage` WHERE `Language` = "german";
-- LAB6
SELECT SUM(`Percentage`) ,`isOfficial`FROM  `countrylanguage` GROUP BY `isOfficial`;
SELECT SUM(`Percentage`) AS sum,`CountryCode` FROM `countrylanguage` GROUP BY `CountryCode` ORDER BY sum DESC;
SELECT SUM(`Percentage`) ,`Language` FROM `countrylanguage`  WHERE `Percentage`  > 50 GROUP BY `Language`  ORDER BY SUM(`Percentage`) LIMIT 10 OFFSET 20;
SELECT AVG(`Percentage`) ,`Language` FROM `countrylanguage` GROUP BY `Language` HAVING AVG(`Percentage`) BETWEEN 41 AND 59  ORDER BY AVG(`Percentage`) DESC;