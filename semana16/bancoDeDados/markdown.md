### Exercício 1
a) o Id é uma string com até 255 caracteres, indicado como primary key (similar a ID). O gender se limita apenas até 6 caracteres, o Date indica que é uma data (tipo esécial de string) e o NOT NULL indica que o preenchimento é obrigátorio. 
b) O SHOW DATABSES mostra as bases de dados disponiveis(no meu caso só a da labenu), já o SHOW TABLES mostra todas as tabelas no meu banco atual:
c) Ele descreve a estruta da tabela, da mesma forma como ela foi criada.






### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23", 
"female"
);
```

b) O erro fala que a chave "002" está duplicada.

c) A contagem de colunas está diferente daquelas colocadas nos VALUES

d) O campo name não possuia uma definição de valor e ele não pode ser null

e) o valor da data está incorreto, pois precisar ser uma string

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"James bond",
455345,
"1965-06-18",
"male"
); 	
```

### Exercício 3

a)
```
SELECT * FROM Actor WHERE gender="female"
```

B)
```
SELECT salary FROM Actor WHERE name="Tony Ramos"
```

c) ela retornou uma tabela fazia, pois no string excedo o limite de caracteres

d)
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000
```

e) a coluna é name e não nome


### Exercício 4
a) 
``` 
SELECT * FROM Actor WHERE name LIKE "J%" OR name Like "A%" AND salary > 300000
```

b)
``` 
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
``` 
SELECT * FROM Actor WHERE name like "%g%" ;
```

d)
``` 
SELECT * FROM Actor WHERE (name like "%g%" OR name like "%a%") AND ( salary > 350000 AND salary < 900000) ;
```

### Exercício 5 
a) O TEXTO da uma maior liberdade de tamanho, o INT é para numeros inteiros.
```
CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY, 	
nome VARCHAR(255) NOT NULL, 
sinopse TEXT NOT NULL, 
data_de_laçamento DATE NOT NULL, 
avaliação INT NOT NULL
);
```

b)
```
INSERT INTO Filmes(id, nome, sinopse, data_de_laçamento, avaliação )
VALUES(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
```

c)
```
INSERT INTO Filmes(id, nome, sinopse, data_de_laçamento, avaliação)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
```

d)
```
INSERT INTO Filmes(id, nome, sinopse, data_de_laçamento, avaliação)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```

e)
```
INSERT INTO Filmes(id, nome, sinopse, data_de_laçamento, avaliação )
VALUES(
004,
"Bacurau",
"Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.",
"2019-08-23",
10
);
```

### Exercício 6
a)
```
SELECT id, nome, avaliação FROM Filmes WHERE id=3;
```  

b)
```
SELECT * FROM Filmes WHERE nome="Bacurau";
```  

c)
```
SELECT id, nome, sinopse FROM Filmes WHERE avaliação >= 7;
```  

### Exercício 7
a)
```
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```  

b)
```
SELECT * FROM Filmes WHERE nome LIKE "%animada%" OR sinopse LIKE "%animada%";
```  

c)
```
SELECT * FROM Filmes WHERE data_de_laçamento < "2021-07-19";
```

d)
```
SELECT * FROM Filmes WHERE 
data_de_laçamento < "2021-07-19" AND 
(nome LIKE "%vida%" OR sinopse LIKE "%vida%") AND
avaliação >= 7
;
```  