// LET , VAR, CONST

/**
 * These are the three ways to define a variable in JavaScript
 * let and const are introduce in ES6
 */

//Scope
/**
 * A scope is sutain a region of a program where a varibale is exist where it can be recognised and beyond that it can not be recognised
 */

// Global Scope , Local Scope , Block Scope
//what does Block Scope mean ==== {} it basically compound multiple statements and it is help full where javascript is expected just one statement

let a = 10;
let b = 10;
const c = 10;

/**
 * Shadowing (Shadow come with the the ES6 Feature where we introduced the Block Scope and let and const)
 *
 * it shouldnot cross this boundary only reason we can  do shadowing from let to car
 * let a=10
 * {
 * var a=10 // this is illegal shadowing // here it is violating the the rules
 * }
 */
