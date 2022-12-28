console.log('Hello World');
console.log('Test');
//Variables
/*
Operations on Variables
1. Create 
2. Store
3. Use
4. Change it
*/

var names = "Hello, Variable";
let variable = "Hello Let Keyoword";  // This has some constraints with regards to Scoping
//Let is the prefeered way of creating variable
const constant = 4;
//Const is used to devlare variable that would never change it's value
console.log(names);
console.log(variable);
console.log(constant);
// Few rules while creating Identifiers 
// 1. Name must be unique   
// 2. should not be any reserved JS Keyword
// 3. For Special characters only _ and $ works for beginging 
//

// Types of Data Types:
// 1. Primitive Data Type:
//     - String 
//     - Numbers
//     - Booleans
//     - Null
//     - Undefined
//     - *Symbols - Rarely Used 
// 2. Complex
//     - Objects

//String are of 3 types:
//1. Single Quotes
var Hello1 = 'Hello World';
console.log(Hello1);
//2. Double Quotes
var Hello2 = "Hello World 1";
console.log(Hello2);
//3. BackTicks
var Hello3 = `Hello World Back Ticks`;
console.log(Hello3);

//Use Case of BackTicks
const name2 = 'Ron';
var Hello3 = `Hello, ${name2} `;
const backticks = `${2+2}`;
console.log(Hello3);
console.log(backticks);

console.log(typeof backticks);

// NaN - Not a Number - This is recieved when you are doing some randon stuff

//Boolens - Logical entity has 2 possible values T&F

const isThisBool = true;
console.log(isThisBool);

// Demo of If Statements usecase in if Statements

if(isThisBool){
    console.log(isThisBool);
}
else{
    console.log(false);
}

console.log(`Comparision of 5>6 ${5>6} `);

//Null
let age = null;
console.log(age);

//Undefined - The variable that has not been defined a value is undefined

let newName;
console.log(newName);

//js BY DEFAULT SETS THE VALUE OF A VARAIABLE AS UNDEFINED
// It needs to be specifically defined in the code
// Turns out that Null is an object and not a dataType
// This is a bug which was intentionally left out in the development of JS

//Objects

const person = {
    name: 'Ron',
    age: 21
}

//Here there is an object as person with 2 keys as name and age, each key has a value assigned to the same.
console.log(person);
//Dot Notation
console.log(person.age);

console.log(typeof person);


// Statically Typed Languages
// Dynaimcally Typed Languages

// C, C++, Java are all statically typed languages
// JS is Dynamically types

//dynamically typed means the variable can take up any data type through out its lifecycle

//Comparission statments is always a true/false

//Equality Vs Strict Equality
//
console.log(5==5);
console.log(5=='5');
console.log(5==='5');
console.log(5===5);

//For strict equality to be true the datatypes should also match
//Prefered to use Strict Equality as it is much more stable and ensures that
// Avoid using simple == and !=
// Use strict Equality and strict Inequality


// Logic and Control Flow
//
//If Statements
//Truth/Falsy Values
//Switch Statements 
//Ternary Operator

// if(condition){
//     //Block of Code
// } else if(condition){
//     //Block of Code 
// } else{

// }

//Truthy/falsy Condition 
// While Loops 
// while(conditioon){
//     //Block of Code
// }
//  
for(let i=0;i<5;i++){
    console.log(i);
}
//
// Working with functions

function square(number){
    return number*number;
}
console.log(square(7));

//Ways to declare function
//1. The Normal Way
function name(params){
    //Statements
    //Main advatage of using declaration method is that it has access to 'this' keyword 
}
//2. Using Anonymous funnctions/ Function expressions
const fun = function(params){

}
// 3. An arrow funcitons
const fun1 = (params)=>{
    //Statements
}
//Arrow is the most frequently used one

const rectangle = (a,b)=>{
    return a*b;
}
console.log(rectangle(7,8));