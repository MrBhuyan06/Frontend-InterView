// Reduce
// Reduce is a HOF this is used to boildown the array elementy in to a single value 

//sum of an array element

let arrayVal=[3, 5, 7, 9, 12, 11]

// let resValue=arrayVal.reduce((acc,curr,i,array) => {    
//     return acc+curr
// },0)

// console.log(resValue)


// polyfil

Array.prototype.myReduceMethod=function(callBack,initialValue){
    var acc=initialValue
    for(let i=0; i<this.length; i++){
        acc=acc?acc+this[i]:this[i]
    }
    return acc
}

console.log(arrayVal.myReduceMethod((acc,curr,i,array) => {    
        return acc+curr
    }));

