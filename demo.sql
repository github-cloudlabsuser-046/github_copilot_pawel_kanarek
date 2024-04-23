-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    product_price DECIMAL(10, 2)
);

-- Insert 5 products into the products table
INSERT INTO products (product_name, product_price) VALUES ('Product A', 100.00);
INSERT INTO products (product_name, product_price) VALUES ('Product B', 200.00);
INSERT INTO products (product_name, product_price) VALUES ('Product C', 300.00);
INSERT INTO products (product_name, product_price) VALUES ('Product D', 400.00);
INSERT INTO products (product_name, product_price) VALUES ('Product E', 500.00);

-- Path: demo.sql
-- Create a table for 5 customers with customer names and emails
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100)
);

-- Insert 5 customers into the customers table
INSERT INTO customers (customer_name, customer_email) VALUES ('Customer A', '