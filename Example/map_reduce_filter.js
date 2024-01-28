const arr = [1,2,3,4,5]
const users = [
    {fname:"Devesh", lname:"Kumar", age:28},
    {fname:"Mona",lname:"Kaushiki",age:28},
    {fname:"abhishek",lname:"muskan",age:29},
    {fname:"subrat",lname:"Kumar",age:30},
]

const calculateDouble = arr.map(double);

const findBinary = arr.map(binary);

const findOdd = arr.filter(x=>x%2);

const findEven = arr.filter(x=>x%2==0);

const findSum = arr.reduce((sum,x)=>{
    return sum += x;
},0);

const ageLessThan29WithName = users.filter(x=>x.age<29).map(x=> x.fname + " " + x.lname);

const ageLessThan29WithNameusingreduce = users.reduce((agelessthan29,users)=>{
    if(users.age<29){
        agelessthan29.push(users.fname + " " + users.lname)
    }
    return agelessthan29;
},[]);

const findUserWithAgeCount = users.reduce((age,x)=>{
    if(age[x.age]){
        age[x.age] = ++age[x.age];
    }
    else{
        age[x.age]=1;
    }
    return age;
},{});

function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
} 

//console.log(ageLessThan29WithName);   