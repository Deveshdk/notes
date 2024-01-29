//Function Statement
// function a(){
//     console.log(a);
// }

// Function Expression :
// var b = function(param1, param2){
//     console.log("b called");
// }

//Main Difference between function statement and function expression is hoisting.

// Function Decalaration :
// Function Declaration is also Function Statement.

// Anonymous Function :
// Function without a name is called anonymous function.
// Anonymous fn does not have its own identity.
// function () {

// }

// Named Function Expression :
// var c = function abc(){
//     console.log("b called");
// }

// abc(); // this will result in error because this fn abc was not created in global scope. It was created as a local variable.

// First Class Functions :

var a = function b(param1){
    return (
        console.log(b)
    )
}

a(function(){

})


