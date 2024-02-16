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




/*
Datatype is divided on the basis of :  how to store data in memory  & how to access it

There are two types of Datatypes:

1) Primitive : call by value => only copy of data is given to us not original data from memory location

   Datatype  ReturnType

   String => string
   Number => number
   Boolean => boolean
   null => object // when we check (typeof null), it will return object
   undefined => undefined
   Symbol => symbol
   BigInt => bigint


2) Non-Primitive : call by reference => here reference of memory location is given to us, so when we changed the data here it will change data from memory location also   

    Datatype  ReturnType

    Array => object
    Objects => object
    Functions => function //object function

*/   




/*
javascript is dynamically typed language i.e variables types are determined at runtime and we do not need to
explicitly declare the type of variable before using it.
*/