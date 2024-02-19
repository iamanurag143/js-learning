/*
() => parenthesis
[] => brackets
{} => braces or curly braces
*/

// The Array object, as with arrays in other programming languages, storing a collection of Multiple items under a single variable
// syntax: let myArray = [2,4,5.6,"Anurag",true]
// when we change in copy of any array it will changes in original array too // It is non-premitive data type and stores in heap memory


let myArray = [2,4,6,8,9]  //Array declaration

let myHeros = new Array("Shaktiman","Thor","Ironman")  //We can declare a Array like that also  //here we don't need to use []

console.log(myArray[0])  //Accessing value of array  //output:2  //here [0] represents index value which starts from 0


// some important Arrays Methods:

myArray.push(143) //It will push 143 at the end of array
console.log(myArray) //output: [ 2, 4, 6, 8, 9, 143 ]

myArray.pop()  //It will remove last element of an array
console.log(myArray) //output: [ 2, 4, 6, 8, 9 ]

myArray.shift()  //It will shift array on its left side 
console.log(myArray) //output: [ 4, 6, 8, 9 ]

myArray.unshift(13)  //It will add value at the first index([0]) of an array
console.log(myArray) //output: [ 13, 4, 6, 8, 9 ]

console.log(myArray.includes(13)) //output:true  //It will check 13 is present in Array or not

console.log(myArray.indexOf(4)) //output:1 //by using this method we can check element is present on which index here 4 is present on index 1


/* Slice & Splice */

let array1 = [4,5,6,7,8,9]
console.log(array1.slice(1,3))  //output:[ 5, 6 ]  //there will be no impact on original array
console.log(array1) //output: [ 4, 5, 6, 7, 8, 9 ]


console.log(array1.splice(1,3))  //output:[ 5, 6, 7 ]  //It will cut value from index 1 to 3(include) and gives us as output  //As well as it will change original array also
console.log(array1)  //output: [ 4, 8, 9 ]  


/* concat, spread, join */

let marvelHeros = ["Thor","Ironman","Black Widow"]
let dcHeros = ["Wonder Women","Aquaman","Flash"]
let indianHeros = ["Shaktiman", "Junior-G"]

let heros = marvelHeros.concat(dcHeros)
console.log(heros)  //output: ["Thor","Ironman","Black Widow", "Wonder Women","Aquaman","Flash"]

let allHeros = [...marvelHeros,...dcHeros,...indianHeros]  //Spread Operator : use to concat two or more than two arrays
console.log(allHeros)  //output: ["Thor","Ironman","Black Widow", "Wonder Women","Aquaman","Flash", "Shaktiman", "Junior-G"]


console.log(marvelHeros.join(dcHeros)) //output: ThorWonder Women,Aquaman,FlashIronmanWonder Women,Aquaman,FlashBlack Widow // It joint the two array and converted them into String


// flat method
//If we have some complex array where we need to work on its element then we can use flat, which return a new array by breaking all into single array

let complexArray = [2,3,4,[5,6,7],[8,9,[10,11]]]

let easyArray = complexArray.flat(Infinity)

console.log(easyArray)  //output: [2,3,4,5,6,7,8,9,10,11]



// sometime we will have a case where we are iterating values and we want that values in an Array format
// so we can use this

let name= "Anurag"

console.log(Array.isArray(name))  //output: flase  //It will check name is array or not

console.log(Array.from(name))  //output: [ 'A', 'n', 'u', 'r', 'a', 'g' ]   //it will convert everything inside name into a array

console.log(Array.of(name))  //output: [ 'Anurag' ]  //it will change it into array

let score1 = 100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)) //output: [ 100, 200, 300 ]