const accountId = 143
let accountEmail = "abc143@gmail.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"
let accountState; // if we declare variable like this then it will be undefined

//accountId =345 // cannot change and redeclare in const
//console.log(accountId)
accountEmail ="xyz@google.com" //can change in let but can't redeclare it // scope : within block
console.log(accountEmail)
accountPassword="321" // can change as well as redeclare in var // scope : global
console.log(accountPassword)
accountCity = "patna" // same as var // we can declare variables like this also in javascript // prefer not to use this or var
console.log(accountCity)
console.log(accountState)

// we can also print single or multiple things in tabular form using console.table

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);