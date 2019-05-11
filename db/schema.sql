CREATE DATABASE IF NOT EXISTS burgers_db;

use burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    devoured BOOL);
