//Una variable es un contenedor de información que se puede reutilizar en el código.
//Para crear una variable en JavaScript, se utiliza let 

/* 
Una analogía de la vida real
Podemos comprender fácilmente qué es una variable si la comparamos con una caja en la que podemos guardar cosas.
Por ejemplo, en una caja llamada message podemos guardar un mensaje (un valor).
Luego, podemos poner la caja en un armario (una variable en la memoria).
*/

let message = 'Hello!'; 

message = 'World!'; // cambiamos el valor de la variable

alert(message); // World!

//Constants Al declarar una variable con const, no se puede cambiar su valor

const myBirthday = '18.04.1982';

//myBirthday = '01.01.2001'; // error, no se puede reasignar una constante

/* 
Ser una “constante” simplemente significa que el valor de una variable nunca cambia. 
Pero algunas constantes se conocen antes de la ejecución (como un valor hexadecimal para el rojo) 
y algunas constantes se calculan en tiempo de ejecución, durante la ejecución, 
pero no cambian después de su asignación inicial.
*/

//Las constantes en mayúsculas son usadas por los programadores para identificar constantes fácilmente.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//También se pueden declarar variable que se calculan en tiempo de ejecución
//const pageLoadTime =/* tiempo de carga de la página */;
//cuando la variable se calcula en tiempo de ejecución, se puede declarar con const con camelCase

let admin, name1; // se pueden declarar dos variables a la vez
name1 = 'John';
admin = name1;
alert( admin ); // John

let ourPlanetName = 'Earth';
let currentUserName = 'John';


const BIRTHDAY = '18.04.1982'; // mayúsculas para constantes que se conocen antes de la ejecución

const age = someCode(BIRTHDAY); // camelCase para variables que se calculan en tiempo de ejecución