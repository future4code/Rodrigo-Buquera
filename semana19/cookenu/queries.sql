CREATE TABLE cookenu_users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255)
);
DROP TABLE cookenu_users;
INSERT INTO
  cookenu_users
VALUES("12345678", "Carlos", "carlos@teste.com", "123456", "NORMAL");

CREATE TABLE cookenu_recipes (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES cookenu_users(id) 
);

DROP TABLE cookenu_recipes;