//Cosas útiles para usar en SQL SHELL

//? Permite ver todas las bases de datos que tenemos en nuestro servidor:
//? \l

// Permite limpiar la consola:
// .shell cls

//! Permite conectarse a la base de datos
//! \c nombreDeLaBaseDeDatos

//* Al estar dentro de la base de datos, esto nos muestra las tablas que tenemos creadas dentro de la misma:
//* \dt

//? Permite crear una base de datos nueva:
//? CREATE DATABASE nombreDeLaBaseDeDatos

//! Permite borrar la base de datos(Mucho cuidado con esto):
//! DROP DATABASE nombreDeLaBaseDeDatos

//* Como crear una tabla dentro de una base de datos:
//* CREATE TABLE nombreDeLaTabla
//* (
//* nombreEnLaColumna1 tipoDeDato(tamaño),
//* nombreEnLaColumna1 tipoDeDato(tamaño),
//* nombreEnLaColumna1 tipoDeDato(tamaño),
//* )
/* Ejemplo 1: 
CREATE TABLE ciudades 
(
id serial PRIMARY KEY,  
nombre varchar(255) UNIQUE    //*--->En este caso, el 255 que se encuentra entre parentesis se refiere a un string(varchar) que puede tener hasta 255 caracteres
);
    Ejemplo 2:
CREATE TABLE personas
(
id serial PRIMARY KEY,	//*------> El primary key nos dice que es la llave primeria
apellido varchar(255) NOT NULL, //*----> El not null nos indica que no puede estar vacio
nombre varchar(255) UNIQUE,  //*----> Unique nos indica que es unica entre todas las filas de esa tabla
ciudad integer references ciudades (id) //*----> Esto nos dice que es un campo ciudad de tipo integer que va a referenciar a la tabla ciudades a través del campo id
);
*/

//? En los siguientes ejemplos, podemos ver como trabajar con las tablas que se encuentran en la base de datos:
/*
SELECT * FROM nombreDeLaTabla; //?----> Esto es para que me traiga todo de la tabla que pongo su nombre, en caso de que quiera traer algo muy especifico, debo cambiar el * por el nombre de ese algo
SELECT nombreDeLaColumna FROM nombreDeLaTabla; //?--> Para que me traiga la columna que ponga (Si pongo una coma y pongo otro nombre de la columna también lo trae)

Ejemplos:
SELECT * FROM ciudades;

SELECT * FROM ciudades
ORDER BY nombre, id DESC; //?-->Esto es para que al seleccionar ciudades, me las ordene por ID de manera 				     descendente y me los traiga (

SELECT * FROM personas
WHERE nombre='Toni' //?--> Esto es para buscar algo especifico y que me los traiga(también aplicable para cuando son muchas cosas)
AND apellido='Tralice';//? --> Esto si quiero poner una segunda condicion de lo que me traiga

//!--------------------------------------
INSERT INTO nombreDeLaTabla (columna1, columna2, ...) //?--> Me sirve para insertar información en una tabla
VALUES (valor1paratabla1, valor1paratabla2, ...);  //?-->Esto es para indicar los valores que quiero insertar

Ejemplo:
INSERT INTO ciudades(nombre)
VALUES ('Tucuman');

//?------Así como existe SELECT, también existe DELETE, y esta ocupa las mismas que puede ocupar SELECT----

SELECT nombre, SUM(SALARY) FROM company 
GROUP BY nombre; //?--> Aqui lo que me dice es que seleccione por nombre y sume(SUM(SALARY)) los salarios de las personas que me traigan y que tengan el mismo nombre(agrupados por nombre)
*/

//! SUB-QUERIES:
//! AVG ----> Promedio de columnas

//! Ejemplo:
//! SELECT nombre, age, address, salary
//! FROM company
//! WHERE salary >(
//! SELECT AVG(salary)
//! FROM company
//! ); ----> Aqui lo que estoy diciendo es que seleccione el nombre, age, address, salary de company cuando el salario sea mayor al promedio de todos los salarios que existan en company; Una subquery basicamente es un select que posee una condición relacionada a otro select

//* Para cambiar el nombre de la columna se hace lo siguiente:
//* ALTER nombredelacolumna
//* RENAME COLUMN nombreactual TO nombrenuevo;

//? Para agregar una columna:
//? ALTER TABLE nombreDeLaTabla
//? ADD COLUMN nombreDeLaColumna;

//! Para borrar una columna:
//! ALTER TABLE nombreDeLaTabla
//! DROP COLUMN nombreDeLaColumna;

//* JOIN = Nos permite unir datos de diferentes tablas según una condición

//* SELECT * FROM personas
//* JOIN ciudades
//* ON ciudades.id = personas.ciudad; --> Me dice que traiga todo de las personas y una las ciudades con las mismas cuando ciudades id sea igual a personas ciudad

//* SELECT personas.nombre, apellido, ciudades.nombre FROM personas
//* JOIN ciudades
//* ON ciudades.id = personas.ciudad; ----> Para que me traiga cosas especificas que yo quiera
