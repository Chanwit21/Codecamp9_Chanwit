CREATE DATABASE `test_db`;
use `test_db`;
DROP DATABASE `test_db`;

CREATE DATABASE `cc9_lab_province-district`;
use `cc9_lab_province-district`;
CREATE TABLE `province` (
id INT AUTO_INCREMENT NOT NULL,
thai_name VARCHAR(255) NOT NULL,
eng_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `district` (
id INT AUTO_INCREMENT NOT NULL,
thai_name VARCHAR(255),
eng_name VARCHAR(255),
province_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (`province_id`) REFERENCES province (id)
);

CREATE TABLE `sub_district` (
id INT AUTO_INCREMENT NOT NULL,
thai_name VARCHAR(255),
eng_name VARCHAR(255) ,
district_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (`district_id`) REFERENCES district (id)
);

CREATE TABLE `ZIP_code` (
id INT AUTO_INCREMENT NOT NULL,
`ZIP_code` INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `proviince_district_subdistrict_ZIP_code` (
id INT AUTO_INCREMENT NOT NULL,
province_id INT NOT NULL,
district_id INT NOT NULL,
sub_district_id INT NOT NULL,
ZIP_code_id INT NOT NULL,
FOREIGN KEY (`province_id`) REFERENCES province (id),
FOREIGN KEY (`district_id`) REFERENCES district (id),
FOREIGN KEY (`sub_district_id`) REFERENCES sub_district (id),
FOREIGN KEY (`ZIP_code_id`) REFERENCES ZIP_code (id),
PRIMARY KEY (id)
);

CREATE DATABASE `cc9_lab_cars_booking`;
use `cc9_lab_cars_booking`;

CREATE TABLE `users` (
id INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
mobile INT NOT NULL,
citizen_id VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

ALTER TABLE users MODIFY COLUMN mobile VARCHAR(255);

CREATE TABLE `cars` (
id INT AUTO_INCREMENT NOT NULL,
brand VARCHAR(255) NOT NULL,
plate_no VARCHAR(255) NOT NULL,
capacities INT NOT NULL,
description VARCHAR(255),
price INT NOT NULL,
is_available BOOLEAN,
image VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE `drivers` (
id INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
mobile VARCHAR(255) NOT NULL,
driver_id VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `booking` (
id INT AUTO_INCREMENT NOT NULL,
pickup_place VARCHAR(255) NOT NULL,
pickup_time TIME NOT NULL,
destination VARCHAR(255) NOT NULL,
date DATE NOT NULL,
no_passenger INT NOT NULL,
driver_id INT NOT NULL,
car_id INT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (driver_id) REFERENCES drivers (id),
FOREIGN KEY (car_id) REFERENCES cars (id),
FOREIGN KEY (user_id) REFERENCES users (id),
PRIMARY KEY (id)
); 

CREATE DATABASE `cc9_lab_university_db`;
use `cc9_lab_university_db`;

CREATE TABLE `teachers` (
id INT AUTO_INCREMENT NOT NULL,
thai_firstname VARCHAR(255) NOT NULL,
thai_lastname VARCHAR(255) NOT NULL,
eng_firstname VARCHAR(255),
eng_lastname VARCHAR(255),
academic_position VARCHAR(255) NOT NULL,
educational_qualification VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `subjects` (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
cradit INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `students` (
id INT AUTO_INCREMENT NOT NULL,
thai_firstname VARCHAR(255) NOT NULL,
thai_lastname VARCHAR(255) NOT NULL,
eng_firstname VARCHAR(255),
eng_lastname VARCHAR(255),
gender ENUM("MALE","FEMALE"),
birth_date DATE,
teacher_id INT NOT NULL,
FOREIGN KEY (teacher_id) REFERENCES teachers (id),
PRIMARY KEY (id)
);

CREATE TABLE `students_contact` (
id INT AUTO_INCREMENT NOT NULL,
phone_number VARCHAR(255) NOT NULL,
line_id VARCHAR(255) NOT NULL,
facebook_id VARCHAR(255),
email VARCHAR(255),
student_id INT NOT NULL,
FOREIGN KEY (student_id) REFERENCES students (id),
PRIMARY KEY (id)
);

CREATE TABLE `registration` (
id INT AUTO_INCREMENT NOT NULL,
sections VARCHAR(255),
study_date VARCHAR(255),
student_id INT NOT NULL,
teacher_id INT NOT NULL,
subject_id INT NOT NULL,
FOREIGN KEY (student_id) REFERENCES students (id),
FOREIGN KEY (teacher_id) REFERENCES teachers (id),
FOREIGN KEY (subject_id) REFERENCES subjects (id),
PRIMARY KEY (id)
);