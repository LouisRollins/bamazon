DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price INT(10) NULL,
stock INT(10) NULL,
PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock)
VALUES ('Fender Elite Stratocaster', 'Music Equipment', 1200, 500), ('Mortal Kombat 11', 'Video Games', 55, 300), ('PS4 Dualshock Controller', 'Video Games', 50, 200), ('Curiosity Kills Band Tee', 'Clothing', 20, 300), ('Orange Crush Pro Head Amp', 'Music Equipment', 550, 100), ("Fallout: New Vegas Collector's Edition", 'Video Games', 60, 50), ('Sweet Cowboy Hat', 'Clothing', 20, 100), ('Shure SM58', 'Music Equipment', 100, 100), ('Lord of the Rings 4k Collection', 'Movies', 60, 400), ('Dark Souls Remastered', 'Video Games', 40, 50);
SELECT * FROM products;