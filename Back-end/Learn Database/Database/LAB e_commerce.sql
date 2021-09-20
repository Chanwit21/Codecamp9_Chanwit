CREATE DATABASE `e_commerce`;
USE `e_commerce`;

-- CUSTOMER
SELECT * FROM customers;

SELECT * FROM customers WHERE id = 1;

INSERT INTO customers (name,address)
VALUES ("บอม","สาทร กรุงเทพ");

UPDATE customers 
SET name="BOMB",address=" Bangkok"
WHERE id = 28;

DELETE FROM customers
WHERE id = 28;

-- PRODUCT 
SELECT * FROM products;

SELECT * FROM products WHERE id =1;

INSERT INTO products (`name`,`desc`,price,quantity,supplier_id)
VALUES ("น้ำดื่มตราแมว",NULL,250.50,12,4);

UPDATE products 
SET `name`="ช้าง",`desc`=NULL,price = 100.00,quantity=10,supplier_id=10
WHERE id = 11;

DELETE FROM products
WHERE id = 11;


-- ORDER 
SELECT o.id AS order_id ,
o.date AS date,
c.name AS customer_name,
c.address AS customer_address,
e.name AS employee_name,
d.name AS department_name
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.id
LEFT JOIN employees e ON o.employee_id = e.id
LEFT JOIN departments d ON e.department_id = d.id;

SELECT o.id AS order_id ,
o.date AS date,
c.name AS customer_name,
c.address AS customer_address,
e.name AS employee_name,
d.name AS department_name
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.id
LEFT JOIN employees e ON o.employee_id = e.id
LEFT JOIN departments d ON e.department_id = d.id
WHERE o.id = 1;

INSERT INTO orders (date,customer_id,employee_id)
VALUES ("1998-08-11",2,5);

UPDATE orders
SET date="1993-07-23",customer_id=1,employee_id=3
WHERE id = 87;

DELETE FROM orders
WHERE id = 87;

SELECT SUM(amount) AS TOTAL_AMOUNT,SUM(price) AS TOTAL_PRICE FROM order_items;

SELECT c.name AS customer_name,o.customer_id AS customer_id ,o.date AS date ,oi.amount AS amount ,oi.price AS unit_price,oi.discount AS discount ,p.name AS product_name 
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
LEFT JOIN order_items oi ON o.id = oi.order_id 
LEFT JOIN products p ON oi.product_id = p.id
ORDER BY customer_id,date;

SELECT c.name AS customer_name,o.customer_id AS customer_id ,SUM(oi.amount)AS total_amount ,SUM(oi.price*(1-oi.discount)*oi.amount) AS total_price
FROM orders o 
INNER JOIN order_items oi ON o.id = oi.order_id 
INNER JOIN customers c ON c.id = o.customer_id 
GROUP BY customer_id;

SELECT c.name AS customer_name,o.customer_id AS customer_id ,SUM(oi.amount)AS total_amount ,SUM(oi.price*(1-oi.discount)*oi.amount) AS total_price
FROM orders o 
INNER JOIN order_items oi ON o.id = oi.order_id 
INNER JOIN customers c ON c.id = o.customer_id 
GROUP BY customer_id 
HAVING total_price > 10000;

SELECT o.date AS date,SUM(oi.price*(1-oi.discount)*oi.amount) AS total_price
FROM orders o
INNER JOIN order_items oi ON o.id=oi.order_id
GROUP BY date;

SELECT product_id,p.name AS product_name,SUM(oi.price*(1-oi.discount)*oi.amount) AS total_price 
FROM order_items oi 
LEFT JOIN products p ON oi.product_id = p.id
GROUP BY oi.product_id 
ORDER BY total_price DESC
LIMIT 5;
