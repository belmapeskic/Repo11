// Create an array here
var myArr = [2, 4, 0, 8, 10];
myArr [0]; // 2
myArr [1]; // 4
myArr [2]; // 0
myArr [3]; // 8
myArr [4]; // 10
// End of creating an array
// Create a funcation below this line
function myArrayFunction(myItems) {
    myArr = myItems;
    myArr [2] = 6; // [2, 4, 6, 8, 10]
    return myItems
}
// End of creating a function
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction