/* "this" keyword */

let user = {
    username : "Anurag",
    id : "iamanurag143@gmail.com",

    welcomeMessage: function(){
        console.log(`Hi ${this.username}, welcome to website`)  //"this" indicates current context //here current context is: all thing inside "user" object
    }

}

console.log(user.welcomeMessage())  //output: Hi Anurag, welcome to website

user.username = "Atithi"

console.log(user.welcomeMessage())  //output: Hi Atithi, welcome to website  // because now current context is: username is "Atithi" , so because we used this so it prints username = "Atithi"


console.log(this) //output: {}  => because of node  //but when we check in browser it will give window object


// ++++++++++++++++++++++ //

function one(){
    let name = "Anurag"
    console.log(this)  // here it returns many things like window object
    console.log(this.name)  //output: undefined   // so we use this keyword only inside object or object function
}
one()





/* Arrow Function */        //we can't use this keyword in arrow function

let arrowFunction = () => {
    let username = "Anurag"
    console.log(username)
}

arrowFunction()  //output: Anurag


// Implicit return in arrow function : if it is one line code // Explicit return : when we use return keyword

let addOne = (num1,num2) => (num1+num2 )   //if we use curly braces then we have to  use return keyword but here it is not needed
// instead of (num1,num2), we can return a object also like ({name:"Anurag"})
console.log(addOne(5,6))  //output: 11

