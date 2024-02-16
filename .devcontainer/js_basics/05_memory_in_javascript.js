//  MEMORY: Stack & Heap

/*
                                                             |---------|
                                                             |---------|
 Primitive datatype  ----> stores in Stack Memory            |---------|
                                                             |---------|
                                                             |---------|

 In primitive datatype, data is stored in Stack memory and only copy of data is given to us i.e only data is given to us not memory location
 hence when we try to assign it in other variable and try to change data in that variable only data of that variable changed  
 
 */


let emailId = "iamanurag143@gmail.com"
let emailId1 = emailId // here copy of data of emailId is assigned to emailId1
console.log(emailId1)  // iamanurag143@gmail.com
emailId1 = "anurag.atithi@nokia.com"
console.log(emailId1) //anurag.atithi@nokia.com
console.log(emailId) // iamanurag143@gmail.com



/*
                                                             |---------| \           |-------------------|
                                                             |---------|   \         |                   |
 Non-Primitive datatype  ----> stores in Heap Memory         |---------|     \---->  |                   |
                                                             |---------|             |                   |
                                                             |---------|             |-------------------|

 In Non-primitive datatype, data is stored in Heap memory  i.e only data as well as memory location is given to us 
 hence when we try to assign it in other variable and change it, it will change data of that memory location  i.e original data will be changed 
 
 */

 let myData = {
    fName : "Anurag",
    lName : " Srivastava"
 }

 let myData1 = myData
 console.log(myData1)
 myData1.lName = " Atithi" // when we do this lName will change for both myData as well as myData1
 console.log(myData1)
 console.log (myData)