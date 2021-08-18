CREATE TABLE users_roles (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT "NORMAL"
);

DROP TABLE users_roles;

INSERT INTO users_roles VALUES("12345", "teste@teste.com", "123456", "NORMAL");