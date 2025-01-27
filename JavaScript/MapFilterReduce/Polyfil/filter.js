// Filter

// iterate over  an array and execute a function over each ele,emt of any array of if the condition define inside inside the callback is statisfied with element it will retrun or push the element to the new array

//[2,4,3,12,20,30,23,25,40]
// return those element which is divisible by 5

let array = [2, 4, 3, 12, 20, 30, 23, 25, 40];
// let resArray = array.filter((ele, i, arr) => ele % 5 === 0);
// console.log(resArray);

//polyfil for the filter function

Array.prototype.myFilter = function (callBack) {
  let resArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) resArray.push(this[i]);
  }
  return resArray;
};
console.log(array.myFilter((ele,i,arr) =>{
    return ele%5===0
}));
