
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
);

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(225),
    product_desc VARCHAR(225),
    product_price decimal(8,2),
    size int,
    image VARCHAR(225)
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders(
    order_ID SERIAL PRIMARY KEY,
    user_id int,
    product_id int,
    quantity int,
    address varchar(100),
    city varchar(100),
    town varchar(100),
    zip varchar(10),
    delivery_price decimal(8,2),
    totalCost decimal(8,2),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id),
);