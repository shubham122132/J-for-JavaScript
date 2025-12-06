function upperCase(str){
    return str.toUpperCase();
}

let str = "hello world";
console.log(upperCase(str));

// arrow function

const sum = (a,b)=>{
    return a+b;
}

console.log(sum(5,10));

// for each function

let numbers = [1,2,3,4,5]; 
numbers.forEach((value, index)=>{
    console.log(`The index is ${index} and value is ${value}`);
})

let arraySum = numbers.reduce((result,value)=>{
    return result + value;
})
console.log(arraySum);
