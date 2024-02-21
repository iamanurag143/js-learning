var a = 10;
var x = 90;
let f = 50;  // we can use this inside any block because this "a", "x" & "f" variable is global for all block

if (true) {
    let a = 40;  // for this "a" => its scope is only inside this block because it is defined with let (or it should be with const for block scope)
    let b = 20;
    const c = 30;
    var d = 60;  // but for this "d" => because it is defined with var so its scope will be global , so we can access it from outside also
    var x = 88;
    console.log("value of a:",a)  //output: value of a: 40
    console.log("value of f:",f)  //output: value of f: 50
}


console.log("value of a:",a)  //output: value of a: 10  // because it is declared with let that's why it is showing value of global variable

console.log("value of x:",x)  //output: value of x: 88  // initially value of x was 90 but because it is declared with var and again redeclared inside if block so its value changed // that's why we don't have to use var

//console.log(b)  // getting error because scope of "b" is only if block and we are trying to access it outside that if block

//console.log(c)  // getting error because scope of "c" is only if block and we are trying to access it outside that if block

console.log("value of d:",d) //output: 60  // we can access it because it is declare with var //that's why we don't have to use var

