console.log("Start");
setTimeout(function cb(){
    console.log("timer");
},5000);
console.log("End");

// Explaination : Js engine will put the callback in the storage and move forward, then after the execution is all completed
// our execution context will be popped out of the call stack. Now in the meantime our timer will be running.
// Once the timer expires,  the callback will put the callback fn inside the Callback Queue and event will check the callback queue
// and put the callback fn inside the call stack of our js engine. And then it will be executed.

// How fetch works :
// fetch fn returns a promise.


console.log("Start");

setTimeout(function cbT(){
    console.log("cbt SetTimeout");
},5000);

fetch("https://www.netflix.com")
.then(function cbf(){
    console.log("cb Netflix");
});

console.log("End");