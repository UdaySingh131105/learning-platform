/*
primitive: -->
int
char
string, etc
*/
var num1 = 100
var num2 = new Number(100); // cerates new variable rather than refferencing.and type is object

//
var num = null
console.log(num) // null
console.log(typeof(num)) // object

var n = undefined
console.log(n) // undefined 
console.log(typeof(n)) // undefined (datatype not specified yet since no value in it.)

/*
to define a string we use -->

'single quotes'
"double quotes"
`backtiks`

example demonstarated below
*/
var str1 = "str1"
var str2 = new String ('Str2')
var str3 = `${str1} and ${str2}`

console.log(str1)
console.log(str2)
console.log(str3)