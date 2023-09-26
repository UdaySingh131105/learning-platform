// map function returns new array.

console.log("====================================================")

var arr = [10,20,30,40,50,60,70,80,90,100]
var arr1 = arr.map(a => a * 2);
console.log('printing after modifying with map :',arr1)

console.log("====================================================")

// Reduce returns values.
var arr2 = [10,20,30,40,50,60,70,80,90,100]
var arr3 = arr2.reduce((prev, curr) => prev+curr);

console.log('result from reduce method :',arr3)
console.log("====================================================")

// example 1
var arr4 = ["hello", 1,true, NaN, 'bye']
var countArr = arr4.map(ele => typeof(ele) == 'string' ? 1 : 0);
var sum = countArr.reduce((prev, curr) => prev+curr);
console.log('orignal array :',arr4)
console.log('array from map :', countArr)
console.log('number of strings :', sum)
console.log("====================================================")

// example 2
var arr5 = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4],
    [1,2,3],
    [1,2,3,4,5],
    [1,2,3,4,5,5]
]
var arr5Len = arr5.map(ele => ele.length);

console.log("Printing the lengths of arr5:", arr5Len)
console.log("====================================================")