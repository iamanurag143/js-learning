// Way to define NUMBERS


let score = 100 ;  //basic way to define number
console.log(score)
//output: 100


let score1 = new Number(200);  //define a number by using object
console.log(score1)
//output: [Number: 200]


//some bsic Number methods: //
console.log(score1.toString()) //output: 200  //it will convert score1 (100 in number) into string (100 in string)
console.log(score1.toFixed(2)) //output : 200.00  //after decimal it will fixed value in two digits only



// ++++++++++++++++++++ MATHS: +++++++++++++++++++++++

console.log(Math.abs(-143))  //output: 143  //It gives the absolute value i.e positive value

console.log(Math.round(142.7))  //output: 143  //It gives round off value

console.log(Math.floor(4.9)) // output: 4  // It will always give lowest value of 4 here i.e 4

console.log(Math.ceil(4.1)) //output:5  //It will always give value greater than 4 here i.e 5 

console.log(Math.sqrt(25))  //output: 5 //It gives square root value

console.log(Math.pow(5,3))  //output: 125 //It gives value of 5 to the power 3

console.log(Math.max(23,34,5,6,6,7,99)) // output: 99  //it gives maximum value among all

console.log(Math.min(2,456,78,8,9)) //output: 2  //It gives minimum value among all

console.log(Math.random()) // output : value between 0 -1 (e.g: 0.3873185977564215 )

/* If we want random value between 10 and 20 */

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min )




