CREATE DATABASE shop_db;

USE shop_db;

-- Categories Table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Products Table
CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    inStock BOOLEAN NOT NULL,
    description TEXT,
    category VARCHAR(50),
    brand VARCHAR(50),
    FOREIGN KEY (category) REFERENCES categories(name)
);

-- Gallery Table
CREATE TABLE product_gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id VARCHAR(50),
    image_url TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Attributes Table

CREATE TABLE attributes (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type ENUM('text', 'swatch') NOT NULL
);

-- Attribute Items Table
CREATE TABLE attribute_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    attribute_id VARCHAR(50),
    display_value VARCHAR(50) NOT NULL,
    value VARCHAR(50) NOT NULL,
    FOREIGN KEY (attribute_id) REFERENCES attributes(id)
);

CREATE TABLE product_attributes (
    product_id VARCHAR(50),
    attribute_id VARCHAR(50),
    PRIMARY KEY (product_id, attribute_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (attribute_id) REFERENCES attributes(id)
);

-- Prices Table
CREATE TABLE prices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id VARCHAR(50),
    amount DECIMAL(10, 2) NOT NULL,
    currency_label VARCHAR(10) NOT NULL,
    currency_symbol VARCHAR(5) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);