function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",()=>{
        console.log("Button Clicked" , ++count);
    })
}
attachEventListeners();