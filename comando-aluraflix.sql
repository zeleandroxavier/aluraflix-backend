ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '#senha****';

 CREATE TABLE IF NOT EXISTS videos (
	id int NOT NULL AUTO_INCREMENT,
    titulo varchar(50) NOT NULL ,
    descricao varchar(200) NOT NULL,
    url varchar(50) NOT NULL,
    PRIMARY KEY(ID));

