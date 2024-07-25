/*  
Una de las ventajas en Js de  colocar las declaraciones de funciones antes de ejecutar cualquier 
otro segmento de código es que permite utilizar una función antes de declararla en el código. 
Por ejemplo:
*/

function nameCat(name) {
    console.log('My cat name is ' + name);
}

nameCat('Mimi');

/*
El código escrito arriba está escrito de la manera que sería esperada para que funcione. 
Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:
*/

nameDog('Bobby');

function nameDog(name) {
    console.log('My dog name is ' + name);
}

/*
Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. 
Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.
*/

/*
Hoisting es un comportamiento en JavaScript que mueve las declaraciones de variables y 
funciones al tope de su ámbito antes de la ejecución del código.
*/

let x = 5;

(function () {
    console.log('x:', x); // undefined
    let x = 10;
    console.log('x:', x); // 10
})();

//El ejemplo anterior se ejecuta de la siguiente manera:

let y = 5;

(function () {
    let y; //Se eleva al tope del ámbito
    console.log('y:', y); // undefined
    y = 10;
    console.log('y:', y); // 10
})();