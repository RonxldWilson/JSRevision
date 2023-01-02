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
let variable = "Hello Let Keyoword";  

// This has some constraints with regards to Scoping
//Let is the prefeered way of creating variable/
//Let is Block scoped and Var is functioned scope
// Just declaring a variable without a keyword create is a global variable

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
var Hello3 = `Hello, ${name2} `; // This is also called as template literals
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
//Falsy Values are: 0,'',undefined, null, NaN, false

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

const rectangle1 = (a,b)=> a*b; // Another way of using arrow function
//If there is one parameter in the function, then you can skip the paranthesis

// const square = num => num*num;

//Every function returns Undefined untill specified otherwise
//Arrow functions do not have a this keyword associated with it


//Tyoe Conversion and Type Coercion 
//Ex:
const str = '10';
const num = '10'; 
console.log(Number(str));
console.log(String(num));

//Type Coercion is type conversion happening automatically  


//Terenary Operator Example
votingAge = 18
votingAge>=18 ? console.log('You can Vote') : console.log(`you can't vote`);

// Condition ? if block : then block
// Since this is an operator it will give a result this can be used to declare variables in an conditional manner
// You can also use terneary operator inside of a template literal, unlike if statemenets

console.log(`Your Eligible for Voting ${votingAge>=18? 'Yes':'No'} `);


let bill = 275, tip = 0;
tip = (bill>= 50 && bill<= 300) ? bill*0.15: bill*0.2;
console.log(`The bill value is ${bill} and the tip is ${tip} and total is ${bill+tip}`)


// JS is backwards compatible but not forward compatible
// That means the code written in 2008 will work in todays borwser but it won't the other way round

// To avoid issues like this we need to convert the Modern JS to used in the development stage to 
// JS used in the production. This is called as Transpile and Polyfill. This can be acheived using tools like Babel


//Strict Mode
// This is added to the first line of a JS file to ensure that the code written is a clean code which is working really well
//  This is done using -> 'usestrict';


helloWorld = (Haha) => {
    console.log("Hello World");
}

helloWorld();
console.log(typeof helloWorld);

//While using Const arrays can be modified as they are not primitive datatypes

//ARRAYS

const names = ['Ron','Wilson','K'];
console.log(Names);

console.log(Names[1]);
//Another way to Declare a varaible

const newNames = new Array('Ronald','Wilson');
