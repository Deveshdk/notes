// Using bind method

// function multiply(x,y){
//     console.log( x*y);
// }

// we can use bind method to make a copy of function multiply
// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3); // here we are making a copy of multiply by using bind method and presetting the value of x to 2.
// And while invoking 3 will be set to y.

// Another approach
//let multiplyByTwo = multiply.bind(this,2,3);
//multiplyByTwo(); // here we are presetting the value of x and y while making a copy so even if we pass any value while invoking
// the fn , it will ignore it.

//Another approach
//let multiplyByThree = multiply.bind(this);
//multiplyByThree(3,10);



// Using closure

function multiply(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree = multiply(10);
multiplyByThree(2);