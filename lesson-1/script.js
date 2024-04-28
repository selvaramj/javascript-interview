// 1) Scope
// var, let, and const
// scope - it refers visibility and accessiblity of the variable.
/**
 * 1) Global scope
 * 2) Module scope
 *    In js, module scope refers to the scope of variables and functions withing JS module,
 *    we need to export explicitly, then only in other js file we can import it and use it.
 * 3) Function scope
 * 4) Block scope
 */

// var variable can be either global scoped or function scoped

var a = 10; // global scoped and attached in windows object
{
  var a = 100; // shadowing or redeclared or overriding the existing a variable in windows object
}
function testing() {
  var a = 50; // local scoped and maintaining in testing function execution context memory till the ife of the funt execution. so it cannot be accessible from outside this function
  console.log('function or local scoped ', a); // 50
}
testing();
console.log('global scoped ', a); // 100

// let and const can be either global scope and block scoped, but it will differ based where we are declaring and accessing.

let data = 10;
{
  let data = 20;
  console.log('block scoped', data);
}

function testing2() {
  let data = 30;
  console.log('function or block scoped ', data);
}
testing2();
console.log('global scoped ', data);

// 2) Hoisting
console.log(typeof getData);
getData();
// arrow function is hoisted with undefined as placeholder
var getData = () => console.log('getData function called');
