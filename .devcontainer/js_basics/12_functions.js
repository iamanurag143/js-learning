/* function: block of code to do specific task */

//function declaration
function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("G")
}

//function calling
sayMyName() //output: A N U R A G(vertically word by word)




function addTwoNumbers(num1,num2){
    num1 =num1; //here num1 from the left side is variable of the function whose name will be anything but num1 from the right side indicates parameter num1
    num2=num2; //we can't do let num2 = num2 ,otherwise gives an error : 'num2' has already been declared //we can use let a=num1
    sum=num1+num2;
    console.log(sum)
}

addTwoNumbers(8,7)   //output: 15  //here 8 & 7 are arguments which will refers to function addTwoNumbers parameter's i.e num1 will be 8 & num2 will be 

let result = addTwoNumbers(6,20) //output: 26  //but it will not store in result because we are doing console.log which doesn't return any value
console.log("sum:", result)  //output: sum: undefined  //because we are not returning anything




/* function with return */

function multiplyTwoNumbers(num1,num2){
    num1=num1; //here num1 from the left side is variable of the function whose name will be anything but num1 from the right side indicates parameter num1
    num2=num2 ;
    result=num1*num2;
    //console.log(sum)
    return result
}

multiplyTwoNumbers(5,6) //no output, to see output we need to do console.log(multiplyTwoNumbers(5,6)) or we can store it in another variable and console.log it
let output = multiplyTwoNumbers(5,8)
console.log("Multiplication:",output) //output: Multiplication: 40




function loginUserMessage(username){
    if(!username){
        // "!username" means username is undefined //if we not pass anything in the function then it will return undefined and undefined is false value so it will never enter in that if block
        console.log("please enter a username")
    }
    else{
        return `${username} just logged in`
    }
    
}
//console.log(loginUserMessage("Anurag")) //output: Anurag just logged in

console.log(loginUserMessage())  //output: please enter a username





/* */

function greetings(name=""){
    return `welcome ${name}!`
}

console.log(greetings()) //output: welcome !  //because we are providing default value for name i.e ""  //we can give anything as default value say name="user", then output will be welcome user!

console.log(greetings("Anurag")) //output: welcome Anurag!
