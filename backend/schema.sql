-- crear base de datos
CREATE DATABASE kambista;
-- cambiar bd
USE  kambista;

-- crear tabla
CREATE TABLE `notas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `contenido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
