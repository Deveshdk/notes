const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p1 fail")
    },5000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p2 fail")
    },1000);
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p3 fail")
    },4000);
});


Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
    console.log(err.errors);
})

