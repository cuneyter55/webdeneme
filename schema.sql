-- Active: 1705417067227@@127.0.0.1@3306@notes_app
CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents    TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);



INSERT INTO notes(title, contents)
VALUES
('İlk notum', 'not hakkında bişeyler'),
('İkinci notum', 'not hakkında bişeyler');