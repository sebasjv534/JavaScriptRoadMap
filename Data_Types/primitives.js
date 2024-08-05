/*
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no 
son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, 
boolean, undefined y symbol. También hay null, que aparentemente es primitivo, pero de hecho 
es un caso especial para cada Object: y cualquier tipo estructurado se deriva de null por la 
Cadena de prototipos.

La mayoría de las veces, un valor primitivo se representa directamente en el nivel más bajo 
de la implementación del lenguaje.

Todos los primitivos son inmutables, es decir, no se pueden modificar. Es importante no 
confundir un primitivo en sí mismo con un valor primitivo asignado a una variable. 
Se puede reasignar un nuevo valor a la variable, pero el valor existente no se puede cambiar 
de la misma forma en que se pueden modificar los objetos, los arreglos y las funciones.

*/



//Ejemplo

//El uso de un método de String no modifica el String

var bar = 'baz';
console.log(bar); // baz

bar.toUpperCase();
console.log(bar); // baz

//El uso de un método de Array modifica el Array
var foo = [];
console.log(foo); // []

foo.push('plugh');
console.log(foo); // ['plugh']

//La asignación le da al primitivo un nuevo valor (no lo muta)
bar = bar.toUpperCase(); // BAZ


