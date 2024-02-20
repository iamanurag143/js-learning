let tinderUser1 = {}  //non-singleton object
console.log(tinderUser1) //output: {}

let tinderUser = new Object()   //we can declare object like this also //singleton
console.log(tinderUser)  //output: {}

tinderUser.name = "Ben"   // way to assign value in singleton object
tinderUser.id = "ben@google.com"
tinderUser.isLoggedIn = false

console.log(tinderUser)



/*  we can declare object inside object also */

let regularUser = {
    email: "thor@asgard.com",
    fullName : {
        userFullName: {
            fName : "Thor",
            lName : "Asgard-King"
        }
    }
}

/* how to access it */
console.log(regularUser) //output:  { email: 'thor@asgard.com', fullName: { userFullName: { fName: 'Thor', lName: 'Asgard-King' } } }
   
console.log(regularUser.fullName.userFullName.fName) //output: "Thor"




/* Merging of Objects */

let obj1 = {
    1 : "a",
    2 : "b"
}

let obj2 = {
    3 : "c",
    4 : "d"
}

let obj3 = {
    5 : "e",
    6 : "f"
}

//rule1 : Object.assign
let obj4 = Object.assign({},obj1,obj2)  //here value of obj1 and obj2 will assign into {}
console.log(obj4)  //output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//rule2 : Spread
let obj5 = {...obj1,...obj2,...obj3}
console.log(obj5) //output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }




/* Array Object and how to access it: */

let ArrayObj = [
    {
        name: "ironman"
    },

    {
        name : "hulk"
    }
]

console.log(ArrayObj[0].name)  //output: ironman



/* we can also extract only keys or only values from the object */

console.log(Object.keys(tinderUser))  //output: [ 'name', 'id', 'isLoggedIn' ]   //they comes in the form of array so we can use it by using loops in projects

console.log(Object.values(tinderUser))  //output: [ 'Ben', 'ben@google.com', false ]



/* We can also check property are present inside object or not by using "hasOwnProperty" method */

console.log(tinderUser.hasOwnProperty("name"))  //output: true

console.log((tinderUser.hasOwnProperty("address")))  //output: false