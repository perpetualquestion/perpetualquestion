Create database PerpetualHD;

USE PerpetualHD;

Create Table users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname varchar(30) NOT NULL, 
  lastname varchar(30) NOT NULL,
  city varchar(40) NOT NULL,
  email varchar(50) NOT NULL, 
  github varchar(50), 
  linkedin varchar(50)
);