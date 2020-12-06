CREATE TABLE users(
id INTEGER, name TEXT, pass TEXT, birthday date
);

INSERT INTO users(id,name,pass,birthday)
VALUES(1,"sunako","123456","1998-10-13");

SELECT * FROM users;

UPDATE users
SET name="miku"
WHERE id = 1;

SELECT name FROM users;

CREATE TABLE items
(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, stock INTEGER);

INSERT INTO items(id, name, stock)
VALUES(NULL, "tomato", 3);

SELECT * FROM items;

INSERT INTO items(id, name, stock)
VALUES(NULL, "banana", 2);
-- VALUES(NULL, "apple", 2);

SELECT * FROM items;

DELETE FROM items
WHERE id = 3;

SELECT* FROM items;