const API_URL = "https://api.github.com/users/Deveshdk";

async function handlePromise(){
    try{
        const data = await fetch(API_URL)
        //fetch() => Response.json() this is again a promise => result
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }

    
}
handlePromise();
// handlePromise().catch(err => console.log(err));