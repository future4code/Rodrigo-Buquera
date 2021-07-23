### Exercício 1
a) Ira apagar a coluna salary da tabela Actor

b) Irá alterar a coluna gender da tabela Actor mudando o nome para sex e definido seu tipo para um texto com até 6 caracteres. 

c) Mudará a quantidade de caracteres permitidos na coluna gender

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

```

### Exercício 2
a)
```
UPDATE Actor 
SET name = "ator numero 3"
WHERE ID = "123";
```

b)
```
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET
name = "novo ator",
birth_date = "1989-09-17",
salary = 543543,
gender = "female"
WHERE id = "005"
```

d) Ele não da um erro, mas não afeta nenhum linha.

```
UPDATE Actor
SET
name = "vai dar ruim",
WHERE id = "001"
```

### Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a)
```
SELECT MAX(salary) FROM Actor ;
```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender="female";
```

d)
```
SELECT SUM(salary) FROM Actor ;
```

### Exercício 5

a) Ela contou quantos valores haviam em cada categoria existente da coluna gender(2 no caso)

b)
```
SELECT id, name 
FROM Actor
ORDER BY name D
```

c)
```
SELECT * 
FROM Actor
ORDER BY salary ASC;
```

d)
```
SELECT * 
FROM Actor
ORDER BY salary DESC 
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a)
```
ALTER TABLE Filmes
ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Filmes
CHANGE  avaliação avaliação FLOAT;
```

c)
```
UPDATE Filmes
SET playing_limit_date = "2021-10-20"
WHERE id = "4";

UPDATE Filmes
SET playing_limit_date = "2021-02-20"
WHERE id = "3";
```

d) Não deu erro, ele apenas não encontrou nada.
```
DELETE FROM Filmes
WHERE id="4";

UPDATE Filmes
SET playing_limit_date = "2021-10-20"
WHERE id = "4";
```


### Exercício 7

a) 
```
SELECT COUNT(*)
FROM Filmes
WHERE avaliação>7.5;
```

b) 
```
SELECT AVG(avaliação)
FROM Filmes
```

c) 
```
SELECT COUNT(*) FROM Filmes;
```

d)
```
SELECT COUNT(*) 
FROM Filmes
WHERE data_de_laçamento < CURDATE();
```

e)
```
SELECT MAX(avaliação) FROM Filmes;
```

f)
```
SELECT MIN(avaliação) FROM Filmes;
```

### Exercício 8

a) 
```
SELECT * 
FROM Filmes
ORDER BY nome; 
```

b) 
```
SELECT * 
FROM Filmes
ORDER BY nome DESC
LIMIT 5; 
```

c) 
```
FROM Filmes
ORDER BY data_de_lançamento DESC
LIMIT 3; 
```

d)
```
FROM Filmes
ORDER BY avaliação DESC
LIMIT 3; 
```