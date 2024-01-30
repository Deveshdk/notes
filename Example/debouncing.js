let counter =0;

const data = () =>{
    //calls an api and fetch the data
    console.log("fetching data",counter++);
}
const doSomeMaic = function(fn, delay){  // delay between keypress time between two key press
    let timer;
    return function(){
        let context =this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },delay)
    }
}

const betterFunction = doSomeMaic(getData,300);