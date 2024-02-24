
/*  Object declarartion: */
//we can declare anything in object i.e variables,arrays,functions,...

let user = {
    name: "Anurag",
    "full Name": "Anurag Atithi",
    age: 25 ,
    email: "anurag@nokia.com" ,
    isLoggedIn: false ,
    lastLoginDays: ["Monday","Tuesday","Sunday"]
}

user.greeting = function() {
    console.log("Hello user!!!")
}

user.greeting2 = function() {
    console.log(`Hello ${this.name}, welcome!!!`)  //If we have to access element inside object in function we have to use this keyword with element
}

console.log(user)



/* Accessing of an object */
//There are two ways to access the object

console.log(user.name) //output: Anurag

console.log(user["name"]) //output: Anurag  //here we need to give keys as string because internally it is treated as a String

console.log(user["full Name"])  //output: Anurag Atithi  //there is no other way to access fullname instead of this way because we gave space between full & Name

//console.log(user.full Name) // gives an error

console.log(user.greeting()) //output: Hello user!!!  //we can access object function like this

console.log(user.greeting2()) //output: Hello Anurag, welcome!!!

// console.log(user[0]) // output: undefined //we can't access it like that



/* Changing value of object */

user.email = "atithi@nokia.com"
console.log(user)


/* If we have to prevent someone to change value of object, we can use "Object.freeze" on that object */

Object.freeze(user)
user.age = 26
console.log(user.age) //output: 25  //here it will not changr the age because we freeze the object user



/*  using Symbol in object */

let mySymbol = Symbol("Key1")

let obj1 = {
    name: "Atithi",
    age: 25,
    //mySymbol:"myKey1" //It will treat this mySymbol as String, we can check by using typeof
    [mySymbol] : "myKey1" //always declare keys of symbol like that: [mySymbol]
}
console.log(obj1) //output:{ name: 'Atithi', age: 25, [Symbol(Key1)]: 'myKey1' }

//console.log(obj1.mySymbol) //we can't access symbol like that

//console.log(obj1["mySymbol"]) //Neither we can access symbol like that, we can't pass it like string because its type is symbol

console.log(obj1[mySymbol]) //output: myKey1  //we have to access it like this

