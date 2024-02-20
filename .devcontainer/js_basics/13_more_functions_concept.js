/* sometime we don't know how many arguments we need in functions , In that case we use rest (...parameter) , similar like spread */

function calculatePrice(...pricePerItem){
    return pricePerItem
}

console.log(calculatePrice(200,500,600,700,1200))  //output: [ 200, 500, 600, 700, 1200 ]



//one more example

function sumOfNumbers(num1,num2,...nums){
    return nums
    //It will return arrays of values that we can sum all by using loops
}

console.log(sumOfNumbers(10,20,30,40,50))  //output: [ 30, 40, 50 ]  //here first 10 will assign in num1 & 20 will assign in num2 then rest all will assign in nums




/*  passing an object inside function : use "anyobject" in parameter of function */

let items= {
    name : "pen",
    price :"$10"
}

function knowThePrice(anyobject){
    // function knowThePrice(items){ return `item name is ${name} and price is ${price}`} //It will gives an error 
    return `item name is ${anyobject.name} and price is ${anyobject.price}`
}

console.log(knowThePrice(items)) //output: item name is pen and price is $10

//console.log(knowThePrice({name:"pen",price:"$10"}))   //we can pass direct object also as an arguments





/* passing an array inside function  : use "getArray" in parameter of that function */

let arr = [100,200,200,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr))  //output: 200

//console.log(returnSecondValue([100,200,300,400]))  //we can also pass array as an arguments