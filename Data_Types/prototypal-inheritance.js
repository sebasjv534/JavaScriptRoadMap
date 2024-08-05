let animal = { 
    eats: true,
    walk() {
        alert("Animal da un paseo");
    }
};
let rabbit = {
    jumps: true, 
    __proto__: animal
};


//Ahora podemos encontrar ambas propiedades en rabbit:

alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
rabbit.walk(); // Animal da un paseo

//La cadena de prototipos puede ser tan larga como sea necesario:

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

//walk es tomado de animal
longEar.walk(); // Animal da un paseo
alert( longEar.jumps ); // true (from rabbit)

//Solo hay dos limitaciones:
/*

1. La referencia circular no está permitida. JavaScript generará un error si se intenta.
2. EL valor de __proto__ puede ser un objeto o null. Otros tipos de valores no son permitidos.

También puede ser obvio, pero aún así: solo puede haber un prototipo. 
Un objeto puede no heredar de dos objetos diferentes. No hay múltiple herencia en JavaScript, 
pero se pueden implementar a través de mixins.

*/
/* 
Las propiedades de acceso son una excepción, ya que la asignación es manejada por una 
función setter. Por lo tanto, escribir en una propiedad de este tipo es en realidad 
lo mismo que llamar a una función.

Por esa razón, admin.fullName funciona correctamente en el siguiente código:
*/

let user = { 
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// asignar admin.fullName, el setter se activa
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

/*
RESUMEN

* En JavaScript, todos los objetos tienen una propiedad oculta [[Prototype]] que es: 
otro objeto, o null.

*Podemos usar obj.__proto__ para acceder a ella (un getter/setter histórico, también hay 
otras formas que se cubrirán pronto).

*El objeto al que hace referencia [[Prototype]] se denomina “prototipo”.
Si en obj queremos leer una propiedad o llamar a un método que no existen, entonces 
JavaScript intenta encontrarlos en el prototipo.

*Las operaciones de escritura/eliminación actúan directamente sobre el objeto, 
no usan el prototipo (suponiendo que sea una propiedad de datos, no un setter).

*Si llamamos a obj.method(), y method se toma del prototipo, this todavía hace 
referencia a obj. Por lo tanto, los métodos siempre funcionan con el objeto actual, 
incluso si se heredan.

*El bucle for..in itera sobre las propiedades propias y heredadas. Todos los demás 
métodos de obtención de valor/clave solo operan en el objeto mismo.

*/

//EJERCICIOS

let animal1 = {
    jumps: null
};
let rabbit1 = {
    __proto__: animal1,
    jumps: true
};

alert( rabbit1.jumps ); // ? (1) //true

delete rabbit1.jumps;

alert( rabbit1.jumps ); // ? (2) //null

delete animal1.jumps;

alert( rabbit1.jumps ); // ? (3) //undefined

//EJERCICIO 2 algoritmo de búsqueda
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};