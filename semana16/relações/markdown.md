### ex. 1

a) a chave estrageira é aquela que faz a ligação de uma tabela com a outra.

b)
``` 
INSERT INTO Rating VALUES 
("a", "bom", 7.5, 1 ),
("b", " muito bom", 8.5, 2 ),
("c", " ruim ", 5.5, 3 );
```

c) Ele não encontra a FOREIGN KEY

d) 

```
ALTER TABLE Filmes
DROP COLUMN avaliação;
```

e) A FOREIGN KEY da outra tabela impede, pois a tabela ratings depende da Filmes.


### ex. 2

a) Ela faz a ligação entre as outras tabelas, já que não é possivel fazer isso nas mesmass

b)
```
INSERT INTO MovieCast VALUES
( "1", "001"),
( "1", "003"),
( "2", "003"),
( "3", "005"),
( "2", "007"),
( "3", "005");
```

c)
```
SELECT Filmes.nome, Actor.name AS "elenco"
FROM MovieCast
JOIN Filmes
ON movie_id = Filmes.id
JOIN Actor
ON actor_id = Actor.id;
```

d) Deu o erro do SAFE MODE (rsrs), mas não seria possivel de qualquer forma, pois um tabela depende da outra.

### ex.3

a) Ele junta a tabela de filmes com a rating trazendo todas as informações da junção. o On é a condição (meio parecido com o WHERE)

b)
```
SELECT Filmes.id, nome, rate
FROM Filmes 
INNER JOIN Rating 
ON Filmes.id = Rating.movie_id;
```

### ex.4
a)
``` 
SELECT Filmes.id, nome, rate
FROM Filmes 
LEFT JOIN Rating 
ON Filmes.id = Rating.movie_id;
```

b)
``` 
SELECT movie_id, actor_id, nome, name AS "elenco"
FROM MovieCast
JOIN Filmes
ON movie_id = Filmes.id
JOIN Actor
ON actor_id = Actor.id;
```

c)
``` 
SELECT AVG(rate) AS "médias avaliações" 
FROM Filmes
JOIN Rating
ON movie_id = Filmes.id;
```


### ex.5
a) Ela une primeiro a a tabela filmes com o a tabela de junção para depois juntar com a de atores. è preciso que seja assim, pois a de junção é a que faz conexão com as duas.

b)
``` 
SELECT Filmes.id, nome, Actor.id, name AS "elenco"
 FROM Filmes 
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c) Da um erro

d)
``` 
SELECT nome, name, comment, rate AS "elenco"
FROM Filmes 
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id
JOIN Rating ON Filmes.id = Rating.movie_id;

```

### ex.5
a) 1: N - 1 filme pode ter varios oscars, o oscar só pode ter 1 filme

b)
``` 
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
	date DATE NOT NULL,
    movie VARCHAR(255) NOT NULL ,    
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
```

c) 
```
INSERT INTO Oscar VALUES 
("a11", "melhor drama", "2021-02-17", "Se Eu Fosse Você", 1 ),
("b21", " melhor figurino", "2021-02-17", "Doce de mãe", 2 ),
("c31", " melher enrolação ", "2021-02-17", "Dona Flor e Seus Dois Maridos", 3 );
``` 

d) 
```
SELECT * FROM Filmes
JOIN Oscar ON Filmes.id = Oscar.movie_id ;
``` 