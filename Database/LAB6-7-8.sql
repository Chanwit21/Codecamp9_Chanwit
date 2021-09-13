CREATE DATABASE province_district;

USE province_district;

CREATE TABLE province (
id INT AUTO_INCREMENT NOT NULL,
name_th VARCHAR(255),
name_en VARCHAR(255),
PRIMARY KEY(id)
);

INSERT INTO province (name_th,name_en) VALUES 
("กรุงเทพ","Bangkok"),
("เลย","Loei"),
("ตาก","Tak"),
("ตราด","Trat"),
("น่าน","Nan"),
("กระบี่","Krabi"),
("ภูเก็ต","Phuket"),
("ระยอง","Rayong"),
("ยะลา","Yala");

CREATE TABLE district (
id INT AUTO_INCREMENT NOT NULL,
name_th VARCHAR(255),
name_en VARCHAR(255),
province_id INT NOT null,
PRIMARY KEY(id),
foreign key(province_id) references province (id)
);

INSERT INTO district (name_th,name_en,province_id) VALUES 
("พญาไท","Phayathai",1),
("สีลม","Silom",1),
("ปทุมวัน","Pathumwan",1),
("แม่สอด","Maesot",3),
("เมือง","Mueng",3),
("เมือง","Mueng",2),
("เมือง","Mueng",6),
("ถลาง","Thalang",8),
("เบตง","Betong",9);

CREATE TABLE subdistrict (
id INT AUTO_INCREMENT NOT NULL,
name_th VARCHAR(255),
name_en VARCHAR(255),
postal_code VARCHAR(255),
district_id INT NOT null,
PRIMARY KEY(id),
FOREIGN KEY(district_id) REFERENCES district (id)
);

INSERT INTO subdistrict (name_th,name_en,postal_code,district_id) VALUES 
("พญาไท","Phayathai","10110",1),
("สีลม","Phayathai","10120",4),
("ทุ่งมหาเมฆ","Phayathai","10120",4),
("สี่พระยา","Phayathai","10700",4),
("บางรัก","Phayathai","10700",4),
("รองเมือง","Phayathai","10700",3),
("ปทุมวัน","Phayathai","10700",3),
("วังใหม่","Phayathai","10700",3),
("ลุมพิณี","Lumpinee","10700",3),
("สามเสนใน","Samsennai","10700",1);

INSERT INTO district (name_th,name_en,province_id) VALUES 
("ราชเทวี","Ratchathewi",1);

UPDATE subdistrict
SET name_th = "ถนนเพชรบุรี",name_en="Phetchaburi Thawi Road",district_id = 10
WHERE id = 4;

DELETE FROM subdistrict
WHERE id = 8;

DELETE FROM province
WHERE name_th = "กรุงเทพ";

DELETE FROM province
WHERE name_th = "กระบี่";
-- ทำได้เพราะว่าไม่ได้ผูกไว้กับตัวไหนเลย 
