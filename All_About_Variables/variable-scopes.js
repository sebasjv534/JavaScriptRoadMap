//Alcance global

var x = 10;
console.log(x); // 10

var greeting = "Hello, World!";

function showGreeting() { 
  alert('Hello, World!');
}

const PI = 3.14159; 

//Alcance local
function f(){
    var a = 10; //Esta variable es local a la función f
}

if(true){
    var b = 20; //Esta variable es global
    let c = 30; //Esta variable es local al bloque if
}

console.log(b); // 20
console.log(c); // ReferenceError: c is not defined

/* 
La razón por la que la variable b es accesible fuera del bloque if es porque se 
declaró con var, a diferencia de la variable c que se declaró con let que respeta el bloque en
el que se encuentra.
*/

//Variables globales no declaradas

function f(){
    undeclaredVar = 10;
}

f();

console.log(undeclaredVar); // 10 

/*
En el código anterior, la variable undeclaredVar se declara dentro de la función f sin usar
var, let o const. Esto hace que la variable se convierta en una variable global,
independientemente de si se encuentra dentro de una función o no.
*/

//El principio general de resolución de nombres en JavaScript es el siguiente:

/* Al resolver un nombre, JavaScript lo busca en el entorno más cercano y luego continúa 
recorriendo los entornos principales que lo rodean hasta que encuentra una coincidencia o 
llega al entorno global.
Si el nombre existe en el entorno global, se utiliza su valor para la resolución del nombre. 
De lo contrario, se sabe con certeza que el nombre no existe en ningún entorno y, 
por lo tanto, ReferenceErrorse genera una excepción.
*/

//Ejemplo

var y = 10;

function f(){
    var x = 20;
    console.log(x, y); // 20 10
}