CREATE TABLE labecom_back_users (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
age INT NOT NULL
);

CREATE TABLE labecom_back_tickets (
id VARCHAR(50) NOT NULL PRIMARY KEY,
origin VARCHAR(100) NOT NULL,
destiny VARCHAR(50) NOT NULL
);

CREATE TABLE labecom_back_products (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description VARCHAR(250) NOT NULL,
price FLOAT NOT NULL,
ticket BOOLEAN,
ticket_id VARCHAR(50),
FOREIGN KEY (ticket_id) REFERENCES labecom_back_tickets(id)
);

CREATE TABLE labecom_back_purchase(
id VARCHAR(50) NOT NULL PRIMARY KEY ,
user_id VARCHAR(50) NOT NULL,
product_id VARCHAR(50) NOT NULL,
quantity INT NOT NULL,
total_value FLOAT NOT NULL,
FOREIGN KEY (user_id) REFERENCES labecom_back_users(id),
FOREIGN KEY (product_id) REFERENCES labecom_back_products(id)
);