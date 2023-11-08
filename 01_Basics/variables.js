userId = '12345';
//Variables defined with var are hoisted to the top and can be initialized at any time.

//Meaning: You can use the variable before it is declared:
var userId;
console.log(userId);
let x= 20;
console.log(x);
//let x = 30;     //Let Keyword cannot be re-declared
//console.log(x);
var y = 30;
//console.log(y);
var y = 'javascript';  // Var Keyword can be re-declared
console.log(y);
/*{
    let userName = 'Basha';  //Variables declared inside a { } block cannot be accessed from outside the block:
}
console.log(userName);*/

//Variables declared with the var keyword can NOT have block scope.
{
    var lastName = "shaik";
}
console.log(lastName);