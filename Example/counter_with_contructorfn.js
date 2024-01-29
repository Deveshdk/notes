//Q1. Create a counter 
// var count=0;
// function incrementCounter (){
//     count++;
//     console.log(count);
// }
// incrementCounter();


//Q2. Create a increment counter and with encapsulation.
// function counter (){
//     var count=0;
//     return function incrementCounter (){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();

/// Explaination : In this process we are encapsulating(data hiding) count variable by putting it inside the function
// so it cannot be used from outside. but we can access it but calling the function counter.
// incrementCounter will form a closure with count and will remember its memory reference.
// Output : 1


//Q3. Create another counter2 and call the counter inside.
// function counter (){
//     var count=0;
//     return function incrementCounter (){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();

// var counter2 = counter();
// counter2();counter2();counter2();counter2();counter2();
// Explaination : In this case counter1 and counter2 has different space. they both will have their own copy of counter and 
// Output : 1 1 2 3 4 5


//Q4. Create a counter which is scalable and has decrement counter as well.
function Counter (){
    var count=0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter(); 
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
// Explaination: Here counter is a constructor function and in order to create a instance of a constructor fun we have to new keyword.
// This is now scalable and our count variable is still private or data hidden.