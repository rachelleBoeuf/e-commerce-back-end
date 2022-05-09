-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_backend;

-- CREATE DATABASE
CREATE DATABASE ecommerce_backend;

-- USE DATABASE
USE ecommerce_backend;

CREATE TABLE Category (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_name` varchar(32) NOT NULL
);

CREATE TABLE Product (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `category_id` int,
  `product_name` varchar(32) NOT NULL,
  `price` decimal(4,2) NOT NULL,
  `stock` int NOT NULL DEFAULT '10'
);

CREATE TABLE Tag (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `tag_name` varchar(32) NOT NULL
);

CREATE TABLE Product_Tag (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_id` int NOT NULL,
  `tag_id` int NOT NULL
);
