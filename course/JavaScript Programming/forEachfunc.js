var arr = [10,20,30,40,50,60,70,80];
arr.forEach((val, ind, array) => {
    console.log("Value:,",val,"Index:",ind, "arr:", array);
})
console.log("================================================================")
console.log(arr);
arr.forEach((_, ind) => {
    console.log("Index:",ind);
})
console.log("================================================================")

var arr1 = [1,2,4,5,6,7,8,9,10]
var arr2 = arr1.filter(a => a % 2 == 0)
console.log("arr:",arr1)
console.log("arr2:",arr2)
console.log("================================================================")

var arr3 = [10,20,30,40,50,60,70,80,90,100]
var val = arr3.find(a => a > 80)
console.log(val)