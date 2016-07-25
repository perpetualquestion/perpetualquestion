Create database PerpetualHD;

USE PerpetualHD;

Create Table users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(30) NOT NUll UNIQUE,
  password varchar(30) NOT NULL,
  firstname varchar(30) NOT NULL, 
  lastname varchar(30) NOT NULL,
  -- city varchar(40) NOT NULL,
  email varchar(50) NOT NULL, 
  github varchar(50), 
  linkedin varchar(50),
  skills varchar(50)
);

-- This the table we need to use when we are joining the two tables
-- Create Table newsfeeds (
-- 	id int NOT NUll AUTO_INCREMENT PRIMARY KEY,
-- 	sender int NOT NULL, 
-- 	receiver int NOT NULL,
-- 	feeds varchar(255)
-- 	FOREIGN KEY (sender) REFERENCES users(id), 
-- 	FOREIGN KEY (receiver) REFERENCES users(id)
-- );

-- This is the table Hien needs to for dummy data 
-- Create Table newsfeeds (
--   id int NOT NUll AUTO_INCREMENT PRIMARY KEY,
--   sender varchar(30) NOT NULL, 
--   receiver varchar(30) NOT NULL,
--   feeds varchar(255)
-- );

Create Table lessons (
  id int NOT NUll AUTO_INCREMENT PRIMARY KEY,
  lesson varchar(30) NOT NULL, 
  teacher_id int,
  student_id int,
  FOREIGN KEY (teacher_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON UPDATE CASCADE
);