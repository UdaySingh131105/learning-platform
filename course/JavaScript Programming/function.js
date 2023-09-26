// arrow functions.

const sum = (a, b) => {
    return a+b
}
console.log(sum(5,5))

console.log("-----------------------------------------------------")

function printHello () {
    console.log("hello")
}

function foo (func) { // creating function with function as parameter
    console.log ("in foo function")
    console.log ("calling func")
    func();
    console.log("finished calling")
    console.log ("returning")
}

foo(printHello)
console.log("-----------------------------------------------------")

foo (() => console.log("hey there"))

// console.log("-----------------------------------------------------")
// // function returns object
// function foo1 () {
//     function printCompleted() {
//         console.log("This is print function.")
//     }
//     return printCompleted;
// }

// var p = foo1();
// printCompleted();