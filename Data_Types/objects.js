/*
los objetos se utilizan para almacenar conjuntos de datos y entidades más complejas. En 
JavaScript, los objetos están presentes en casi todos los aspectos del lenguaje, por lo 
que debemos comprenderlos antes de profundizar en cualquier otro tema.

Se puede crear un objeto con corchetes de cifras {…}con una lista opcional de propiedades. 
Una propiedad es un par “clave: valor”, donde keyes una cadena (también llamada “nombre de 
propiedad”) y valuepuede ser cualquier cosa.
*/

let user = new Object(); // "object constructor" syntax
let user1 = {};  // "object literal" syntax

//Generalmente, la segunda forma es más fácil y más corta.

//Literales y propiedades
//Podemos inmediatamente poner algunas propiedades en {…}como pares clave: valor:

let user2 = {
    name: "John",
    age: 30
};


//Para acceder a la propiedad de un objeto, podemos usar la notación de puntos:
alert( user2.name ); // John
alert( user2.age ); // 30

user2.isAdmin = true;

//Para eliminar una propiedad, podemos usar delete operador.
delete user2.age;

//También podemos utilizar nombres de propiedades multilínea, como este:
let user3 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


//Cuando se accede a propiedades multilínea, el punto no se puede utilizar.
//Por ejemplo, user.likes birds dará un error.
//Eso es porque el punto solo puede ser seguido por un nombre de propiedad válido, y
//likes birdses un nombre incorrecto debido al espacio.
//Entonces, solo se puede acceder a propiedades multilínea usando corchetes:

alert( user3["likes birds"] ); // true

delete user3["likes birds"]; // eliminar una propiedad multilínea

//Los corchetes también proporcionan una forma de obtener el nombre de la propiedad
//de otra fuente, por ejemplo, de una variable:

let key = "likes birds";

// lo mismo que user["likes birds"] o user3["likes birds"]
user3[key] = true;

let user4 = {
    name: "John",
    age: 30
};


let key2 = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user4[key2] ); // John (if enter "name")

//Propiedades calculadas

//Podemos usar corchetes en una declaración de objeto literal. Eso es llamado
//propiedad calculada.

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

//Taquigrafía del valor de la propiedad

//En el código real, a menudo utilizamos variables como nombres de propiedades.

function makeUser(name, age) {
    return {
        name: name,
        age: age
        // ...other properties
    };
}

let user5 = makeUser("John", 30);
alert(user5.name); // John

//En el ejemplo anterior, las propiedades tienen los mismos nombres que las variables.
//La taquigrafía de valor de propiedad nos permite hacerlo más corto:
//Podemos omitir los dos puntos y el nombre de la propiedad en {name: name}.
//En su lugar, simplemente escribimos el nombre de la propiedad y su valor.

function makeUser2(name, age) {
    return {
        name,
        age
        // ...
    };
}

//Repaso

let user6 = {};

user6.name = "John";
user6.surname = "Smith";
user6.name = "Pete";
delete user6.name;

//Comprobación de la vaciedad de un objeto

function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

//Suma de propiedades del objeto

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); // 390

//Multiplicar propiedades numéricas por 2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);//{ width: 400, height: 600, title: "My menu" }

