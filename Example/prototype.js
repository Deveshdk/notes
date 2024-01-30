let object = {
    name : "Devesh",
    age : 28,
    city: "Purnia",
    getIntro: function(){
        console.log("My name is"+ this.name + "And my age is " + this.age);
    }
}

let object2 = {
    name : "Mona",
    age :29
}
object2.__proto__ = object;
console.log("My name is "+ object2.name + " and i am from "+ object2.city);

Function.prototype.mybind = function(){
    console.log("I am Heman!!");
}

function fun(){
    fun.__proto__.mybind();
}