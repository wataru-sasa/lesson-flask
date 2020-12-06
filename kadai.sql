-- 課題１

SELECT *
FROM employee;

SELECT first_name, last_name, kids_number
FROM employee
WHERE kids_number >=1;

SELECT *
FROM employee
WHERE kids_number =0 and salary >=150000;

SELECT *
FROM employee
WHERE salary>=130000 AND salary <=150000;

-- 課題２
SELECT title AS BookTitle, publication_year AS Year
FROM book
WHERE NOT publication_year = 2008;

SELECT *
FROM author
WHERE name like "%N%";

SELECT title AS BookTitle
FROM book
WHERE title like "%Web%";

-- 課題3
SELECT AVG(kids_number) AS AverageKids
FROM employee
WHERE end_year is null;

SELECT SUM(salary) AS TotalSalaries
FROM employee
WHERE end_year IS null;

SELECT COUNT(id) AS WithKids
FROM employee
WHERE kids_number>=1 AND  end_year is null;

-- 課題4
SELECT title, publication_year, name AS Publisher
FROM book
JOIN publisher
ON book.publisher_id = publisher.id
WHERE Publisher= "Shukosya";

SELECT title, publication_year, name AS AuthorName
FROM book
JOIN author
ON book.author_id = author.id;

-- 課題5
SELECT AVG(salary), kids_number
FROM employee
GROUP BY kids_number
HAVING AVG(salary) >150000;

-- 課題6
SELECT first_name, last_name, salary
FROM employee
WHERE salary > (
SELECT avg(salary)
FROM employee
);

SELECT title, publication_year
FROM book
WHERE publication_year >= (
SELECT publication_year
FROM book
WHERE title = "面倒な仕事はPythonにやらせる"
);

-- 課題7
SELECT first_name, last_name, kids_number
FROM employee
ORDER BY kids_number DESC;

SELECT first_name, last_name, salary
FROM employee
ORDER BY salary DESC
LIMIT 5;