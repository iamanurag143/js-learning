let value = 143
let negValue = - value
console.log(negValue) // It will print value as -143

/*
console.log(2+2) // output:4
console.log(4-3) // output:1
console.log(1*3) // output:3
console.log(4/2) // output:2 // it gives us quotient as output
console.log(4%2) // output:0 // it gives us remainder as output
console.log(4**2) // output:16 // ** denotes to power

please cover operators from mdn
*/



// STRING CONCATINATION :

let fName = "Anurag"
let lName = " Atithi"
console.log(fName + lName ) // it will give Anurag Atithi as output


// things to remember: if string comes first in concatination then it treat rest of values as string also

console.log( 1 + "4") // output: 14

console.log("4" + 1) // output: 41

console.log("1" + 4 + 3 ) // output: 143 // here string "1" comes first so js treats 4 and 3 as string also

console.log(1 + 4 + "3") // output: 53  // but here because string comes last so js treats 1 and 4 as number, so it adds 1 and 4 then concatinate with string "3"

let x=5
let y=2
console.log(x+y) // output: 7
console.log(String(x)+y)  // output:52



// COMPARISON OPERATOR:

console.log("2" > 1) // output: true // js is not that strict so it checks value only

console.log("2" == 2) // output: true

console.log("2" === 2) //output: false /* in js  ===  checks values as well as datatype




/*

ITS BETTER TO DO OPERATION BY CONVERTING THEM INTO SAME DATATYPE

*/