const radius = [1,2,3,4,5];

const area = function (radius){
    return 2*Math.PI*radius*radius;
}

const calculate = function (radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[1]));
    }
    return output;
}

console.log(calculate(radius,area));

// Explaination : Here calculate is a higher order function and area is a callback function.