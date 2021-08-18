### ex.1 

a) As string permitem um combinação mair já que podem também incluir números, dessa forma cada caracter pode não apenas ser de 0 a 9, mas também de A a Z
b) 


### ex. 2
a) a função recebe as informações do usuário, se conecta com o banco e inseri na tabela. 
b) 

`
CREATE TABLE auth_users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
`

c)

### ex.3 
a) Pois nem sempre esse arquivo pode existir e o retorno seria undefined, dessa forma garantimos que vira uma string (podemos usar também !)

b)


### ex. 7
a) pois o retorno do método verify pode ser muitas coisa