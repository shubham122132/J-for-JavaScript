let a =0;
let b =1;
let n =10; //number of terms
let output = "Fibonacci Series:"+a+" "+b+" ";
for(let i=1;i<=n;i++){
    let c = a + b;
    output += c + " ";
    a = b;
    b = c;
}
console.log(output);