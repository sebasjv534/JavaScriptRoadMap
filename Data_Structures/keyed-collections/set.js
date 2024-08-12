const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ] Duplicates are ignored
mySet1.add('some text'); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet1.add(o); // Set [ 1, 5, 'some text', { a: 1, b: 2 } ]

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has('Some Text'.toLowerCase()); // true
mySet1.has(o); // true
mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, we just removed one value

console.log(mySet1);
// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}

// Iterating Sets

for(let item of mySet1) console.log(item);
// 1
// "some text"
// Object {a: 1, b: 2}
// Object {a: 1, b: 2}

// Convert Set to Array
const mySet2 = new Set([1, 2, 3, 4]); 
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// la intersección se puede simular a través de 
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)));

// la diferencia se puede simular a través de
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)));

//iterar entradas de set con forEach
mySet2.forEach(function(value) {
  console.log(value);
});

//1
//2
//3
//4