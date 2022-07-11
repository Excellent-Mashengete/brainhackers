DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
);

CREATE TABLE Products(
    id SERIAL PRIMARY KEY,
    Name VARCHAR(225),
    Description VARCHAR(225),
    Price decimal(6, 2),
    size int,
    image VARCHAR(225)
);

CREATE TABLE Orders(
    order_ID SERIAL PRIMARY KEY,
    user_id int,
    FOREIGN KEY(user_id) REFERENCES users(id),
    product_id int,
    FOREIGN KEY(product_id) REFERENCES products(id),
    quantity int
);