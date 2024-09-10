DROP TABLE IF EXISTS cursos;

CREATE TABLE cursos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    turno VARCHAR(31)
);

INSERT INTO cursos (id, nome, turno) VALUES
(1, 'Programador de Sistemas', 'Vespertino'),
(2, 'Banco de Dados', 'Noturno'),
(3, 'Design de Interfaces', 'Matutino'),
(4, 'Engenharia de Software', 'Matutino'),
(5, 'Segurança da Informação', 'Vespertino'),
(6, 'Desenvolvimento Mobile', 'Noturno'),
(7, 'Análise de Sistemas', 'Matutino'),
(8, 'Desenvolvimento Web', 'Vespertino');

DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    curso_id INTEGER,
    idade INTEGER,
    cpf CHAR(14),
    genero VARCHAR(63),
    telefone VARCHAR(18),
    email VARCHAR(255)
);

INSERT INTO alunos (id, nome, curso_id, idade, cpf, genero, telefone, email) VALUES
(1, 'Fulano', 1, 34, '012.345.678-90', 'masculino', '(62)98765-4321', 'fulaninho.maverick@exemplo.com'),
(2, 'Ciclano', 1, 26, '012.345.876-90', 'masculino', '(62)95678-4321', 'ciclano@exemplo.com');

INSERT INTO alunos (id, nome, curso_id, idade, cpf, genero, telefone, email) VALUES
(3, 'Maria Oliveira', 8, 29, '123.456.789-01', 'feminino', '(21)98765-4321', 'maria.oliveira@exemplo.com'),
(4, 'José Santos', 7, 31, '234.567.890-12', 'masculino', '(11)99876-5432', 'jose.santos@exemplo.com'),
(5, 'Ana Paula', 6, 24, '345.678.901-23', 'feminino', '(31)98765-4321', 'ana.paula@exemplo.com'),
(6, 'Carlos Pereira', 5, 37, '456.789.012-34', 'masculino', '(41)98765-4321', 'carlos.pereira@exemplo.com'),
(7, 'Fernanda Lima', 1, 22, '567.890.123-45', 'feminino', '(51)98765-4321', 'fernanda.lima@exemplo.com'),
(8, 'Ricardo Alves', 4, 28, '678.901.234-56', 'masculino', '(61)98765-4321', 'ricardo.alves@exemplo.com'),
(9, 'Tatiane Costa', 3, 30, '789.012.345-67', 'feminino', '(71)98765-4321', 'tatiane.costa@exemplo.com'),
(10, 'Roberto Martins', 2, 33, '890.123.456-78', 'masculino', '(81)98765-4321', 'roberto.martins@exemplo.com');

UPDATE alunos SET idade = 40, email='oldmaverick@example.com' WHERE id = 1;

SELECT a.nome, a.idade, c.nome as curso
FROM alunos a 
JOIN cursos c ON a.curso_id = c.id; 