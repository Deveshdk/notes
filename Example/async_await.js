// always returns a promise

const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved value");
    },5000);
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved value");
    },10000);
})

// after async await
async function handlePromise(){
    console.log("hello world");
    const val1 = await p1;
    console.log("Hello1");
    console.log(val1);
    const val2 = await p2;
    console.log("Hello2");
    console.log(val2);
}
handlePromise();
// Explaination :
// When the execution starts, handlePromise will be added in the call stack , and when it will find await p1
// handlePromise will move out of the call stack and will not block the main thread.
// now once p1 is resolved after 5 sec then handlePromise will again be added in the call stack and it will start it's execution 
// from where it left and then again when it will find await p2 , handlePromise will again suspend the execution and move out of 
// the call stack and when p2 is resolved , then handlePromnise will again be added in the call stack and will start its 
// execution from where it left.

// JS engine never waits for the promise to resolve but it looks like that JS engine is waiting.
// what happens is JS engine suspends the execution and pops the fn out of the call stack and when the promise is resolved 
// then the fn is again added to the call stack.


// before async await
// function getDate(){
//     p.then(res=> console.log(res));
//     console.log("Hello");
// }
// getDate();