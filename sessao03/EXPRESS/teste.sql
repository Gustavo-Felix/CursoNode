CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade)
VALUES(
    "Victor lima",
    "emailteste@gmail.com",
    18

);

DELETE FROM usuarios WHERE nome = "Victor lima"

INSERT INTO usuarios(nome, email, idade)
VALUES(
    "Victor lima",
    "emailteste@gmail.com",
    18

);

UPDATE usuarios SET nome = "Gustavo Félix" WHERE nome = "Victor lima";