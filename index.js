//variables
let name = 'John';
var john = 'name';
const pi = 3.142;

//Data type
//string
let instructor = 'Tobi';
//number
let age = 20;
//Boolean
let isMale = true;
//object
let Person1 = {
  name: 'Tobi',
  age: 25,
  isMale: true,
};

//operators
//Bitwise operator { &, |, ^, ~, <<, >>, >>> }

//conditionals
if (1 > 2) console.log('1 is greather than 2');
// if and else
if (1 < 2) console.log('1 is greather than 2');
else console.log('2 is greather than 1');
if (1 > 2) console.log('1 is greather than 2');
else if (2 > 1) console.log('2 is greather than 1');
else console.log('They are both equal');
//tenary operator
let Age = 16;
Age > 18 ? console.log('He is an adult') : console.log('child they worry am.');
//loop
//for loop
for (let i = 0; i <= 5; i++) console.log(`Loop number ${i}`);

//while loop
let i = 0;
while (i <= 5) {
  console.log(`Loop number ${i}`);
  i++;
}
//for in loop

//for of loop

//function

//function declaration
function Sum(a, b) {
  return a + b;
}

// function expression
let sub = function (a, b) {
  return a - b;
};

// arrow function
const mul = (a, b) => a * b;

console.log(Sum(3, 2));
console.log(sub(3, 2));
console.log(mul(3, 2));

//switch case
let day = 10;
switch (day) {
  case 1:
    console.log('monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Something went wrong');
}

for (let i = 0; i < 10; i++) console.log(i);

//Object
//Object Literal
let Human = {
  name: 'Ade',
  age: 20,
  isMale: true,
};

//constructor function
function Person(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

let person2 = new Person('tobi', 20, true);
console.log(person2);

//class
class person {
  constructor(name, age, ismale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
  }
  sayHello() {
    console.log('Hello my name is ' + this.name);
  }
}

let person3 = new person('Tobi', 20, 'Male');
person3.sayHello();

//Arrays
let fruits1 = ['orange', 'Apple', 'banana', 'mango'];
// array literal
let fruits2 = new Array('lemon', 'cucumber', 'pawpaw', 'coconut');

//array methods
fruits2.push('mango');
fruits2.pop();
fruits2.shift();
fruits2.splice(1, 2);
fruits2.unshift('kiwi');
let know = fruits2.concat(fruits1);
console.log(know);
let fruits3 = fruits2.join(',');
fruits3.sort();
console.log(fruits3);
