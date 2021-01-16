// console.log("hello worlddd")

// function sayHello() {
//   console.log("HELLO");
// }

// const sayHello = function() {
//   console.log("HELLO!");
// }

// const sayHello = () => {
//   console.log("HELLO!");
// }


// sayHello();

//****FUNCTIONS WITH ARGUMENTS***** 

// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Katy');
const sum = 55; //this is global scope

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2; //you have to delcare the variable again or it will try to use the global sum
  return sum; // this is local scope
}

//if your function should give you a value back, you NEED to use a return statement

console.log(addsTwoNumbers(5, 7)); //logs local scope
console.log(sum); // logs global scope
