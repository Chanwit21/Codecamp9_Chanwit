CREATE DATABASE expense_tracker;
use expense_tracker;

CREATE TABLE `categories` (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
type ENUM("EXPENSE","INCOME") NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO `categories` (title,type) 
VALUES ( "Food",  "Expense" ),
    ( "Housing",  "Expense" ),
    ( "Shopping",  "Expense" ),
    ( "Transportation",  "Expense" ),
    ( "Utilities",  "Expense" ),
    ( "Clothing",  "Expense" ),
    ( "Medical/Healthcare",  "Expense" ),
    ( "Insurance",  "Expense" ),
    ( "Household Items/Supplies",  "Expense" ),
    ( "Debt",  "Expense" ),
    ( "Education",  "Expense" ),
    ( "Savings",  "Expense" ),
    ( "Gifts/Donations",  "Expense" ),
    ( "Entertainment",  "Expense" ),
    ( "Salary",  "Income" ),
    ( "Wages",  "Income" ),
    ( "Commission",  "Income" ),
    ( "Interest",  "Income" ),
    ( "Investments",  "Income" ),
    ( "Selling something you create or own", "Income"),
    ( "Gifts",  "Income" ),
    ( "Allowance/Pocket Money",  "Income" ),
    ( "Government Payments",  "Income" );
    
ALTER TABLE categories
RENAME TO cetagories;
    
CREATE TABLE `transactions` (
id INT NOT NULL AUTO_INCREMENT,
payee VARCHAR(255) NOT NULL,
amount DECIMAL(65,2) NOT NULL,
date DATE NOT NULL,
comment VARCHAR(255),
cetagory_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (cetagory_id) REFERENCES `cetagories` (id)
);

INSERT INTO `transactions` (payee,
amount ,
date ,
cetagory_id ,
comment
)
VALUES   ("7-11",50,'2021-06-12',1, ""),
  ("Tesco Lotus",299,"2019-11-28",3,""),
  ("True Corp.",20000,"2020-09-30", 15,""),
  ( "7-11", 501,"2021-04-12",1,""),
  ("Big C",500,"2019-12-28",3,""),
  ("Freelance",200, "2020-09-30", 15,""),
  ("BTS",50,"2021-07-15",4, ""),
  ("Breakfast",50,"2021-08-11",1,""),
  ("Fitness",50,"2021-07-15",7, ""),
  ("KFC",150, "2021-10-15", 1,""),
  ("Pizza", 150,"2021-07-20",1,""),
  ("Tesco Lotus",500,"2021-11-15",1,""),
  ("Lunch",50, "2021-08-11",1, ""),
  ("BTS",150,"2021-12-20",4, ""),
  ("Book", 350,"2021-08-11",11,""),
  ("dtac",450,"2021-08-11",14,"");