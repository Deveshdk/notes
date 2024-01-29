// older times
//1.
const cart = ["shoes","pants","kurtas"]
createOrder(cart,function (){
    proceedToPayment(orderId,function(paymentInfo){
        orderSummary(paymentInfo,function(){
            updateWllaetBalance();
        });
    });
});

// Explaination :
// This is how we handle async operations using callback. Now there is a issue in this : Inversion of Control
// We are relying on createOrder fn will call our function back and gives us the data.
// Not knowing when will this api make a call or how many times it will call.

//2.
// Using promises :
const promise= createOrder(cart); // it will returns us a promise.  {data : undefined } later this undefined will be filled with data
// automatically after the completion o asynchronous call {data: orderDetails}

//attaching a callback fn by passing 
promise.then(function (orderId){
    proceedToPayment(orderId);
});

// Explaination & Advantages : We are attaching a callback fn to our promise object.
// Here we will have the control of our callback fn. when an asynchronous call is completed promise will automatically call our 
// callback fn and It will 100% call our callback fn and it will call just once.


//3.
// fetch fn returns us a promise.
const GITHUB_API = "https://github.com/Deveshdk?tab=repositories";
const user= fetch(GITHUB_API);
console.log(user);
// now we attach a callback fn
user.then(function(data){
})

//4.Promise Chaining

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return orderSummary(paymentInfo)
})
.then(function(paymentInfo) {
    returnwalletUpdate(paymentInfo)
})



