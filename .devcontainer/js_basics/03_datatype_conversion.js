/*

SYNTAX TO CONVERT DATATYPES:

let a = "12"
let aNumber = Number(a)  // now string a is converted into a number

let b = 143
let bString = String(b) // now number b is converted into a string

let isLoggedIn = 1
let is LoggedInBoolean = Boolean(isLoggedIn) // now number isLoggedIn is converted into a boolean value

*/



let value = "33"
console.log(typeof value);
console.log(value)

let convertValueInNumber = Number(value);
console.log(typeof convertValueInNumber)
console.log(convertValueInNumber)





// DATA CONVERSION CONFUSION:

/*
coverting into number:
"33" => 33
"33aa" => NaN (Not a Number) // its value will be NaN but still datatype is converted into a number
true => 1;
false => 0;
undefined => NaN // its value will be NaN but still datatype is converted into a number
*/
let a = "12aa"
let aNumber = Number(a) 
console.log(aNumber)
console.log(typeof aNumber)


/*
converting into boolean
1 => true
0 => false
143 => true
"Anurag" => true
"" => false
undefined => false
*/
let isLoggedIn = ""
let isLoggedIn1 = "Anurag"
let isloggedInBoolean = Boolean(isLoggedIn)
console.log(isloggedInBoolean) 
console.log(typeof isloggedInBoolean)

let isloggedInBoolean1 = Boolean(isLoggedIn1) 
console.log(isloggedInBoolean1) 
console.log(typeof isloggedInBoolean1) 

let x= 143;
let xBoolean = Boolean(x)
console.log(xBoolean)
console.log(typeof xBoolean)
