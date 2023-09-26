/*
keywords used to declare variable

var
let
const

Scope -->
var can not be redeclared
var can be updated.

*/

// example

console.log("for variable")

var greeter = "Welcome Sir!!"

function myfunc () {
    var greeter = "hello"
}
console.log(greeter)

if (true) {
    var greeter = "hello"
}

console.log(greeter)
console.log("for let")
let greeting = "Welcome Sir!!"

function myfunc () {
    let greeting = "hello"
}
console.log(greeting)

if (true) {
    let greeting = "hello"
}

console.log(greeting)