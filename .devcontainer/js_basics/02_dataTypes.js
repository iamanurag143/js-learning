"use strict"; // treat all javascript code as newer version

// alert(1+4) // we cannot use alert in node js, it works on browser // it will pop alert window with 5 as output


let name = "Anurag" // datatype => string  // should always in double quotes or single quotes "" // e.g: "Anurag", "143",..
let age = 25  // datatype => number // e.g: 1,55,143,..
let isLoggedIn = true  // datatype => boolean  // either true or false


/*

there are some more datatype :

1. null => stansalone value // let value = null; //

2. undefined // let xyz; // if we don't define any value at the time of declaration, it is undefined util we declare something into it

3. symbol => uniqueness 

4. object

bigint // when we have to store large number // rarely we use it

*/

let xyz;
let abc = null ;

console.log(typeof xyz )  // output: undefined
console.log(typeof abc ) // output: object // note: null is also a datatype in javascript but when we check it gives object as datatype