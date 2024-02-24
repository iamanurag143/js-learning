
//Basics rule to use strings

let fName = "Anurag"
let lName = "Atithi"
console.log("My Full Name is " + fName + " " + lName)  //output: My Full Name is Anurag Atithi


//Modern way to use strings : STRING INTERPOLATION

console.log (`Hello my full name is ${fName} ${lName} !`)    //output: Hello my full name is Anurag Atithi !

/*
here `` (backsticks) are used and ${fName} , ${lName} are place holder to use variables.
It is more readable and the main benefit is we can use operations on variables at the same time
e.g:
console.log (`Hello my full name is ${fName.slice(0,3)} ${lName} !`)  // output: Hello my full name is Anu Atithi !
*/



// Ways to declare String :

let name = "Anurag"   //basic way
console.log(name)  //output: Anurag

let fullName = new String("Anurag-Atithi")   // by using object
console.log(fullName)  //output: [String: 'Anurag-Atithi']




// Some Basic String Method

console.log(name.length) // output: 6
console.log(fullName.length) //output: 13
console.log(fullName.toUpperCase()) // output: ANURAG ATITHI
console.log(fullName.charAt(4)) // output : a
console.log (fullName.indexOf("a")) //output
console.log(fullName.trim()) // output: Anurag-Atithi  //it will remove all the whitespaces & line terminators
console.log(fullName.slice(0,3)) // output : Anu
console.log(fullName.replace("-", " ")) // output: Anurag Atithi  //it will replace "-" with " "
console.log(fullName.includes("Atithi")) // output : true  //It will check Atithi is present in fullName or not
console.log(fullName.split("-")) // output : [ 'Anurag', 'Atithi' ]  //it will split character inside fullName on the basis of "-"
