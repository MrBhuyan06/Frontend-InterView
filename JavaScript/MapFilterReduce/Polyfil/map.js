//First the How does this work?

// let arry = [2, 3, 5];
// //multiple this array element with 2
// let resultArray = arry.map((ele, i, arr) => ele * 2);
// console.log(resultArray);

//create a polyfill of Map function
//1. Syntax array.map((ele, i, arr) => {})
let numArray = [2, 4, 5, 6];
Array.prototype.myMap = function (callback) {
  let newArray = [];
  //3.what does this function do
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  //4. Return a transformed array
  return newArray;
};
//2.what does this function take as an argument
console.log(numArray.myMap((ele, i, arr) => ele * 2));
