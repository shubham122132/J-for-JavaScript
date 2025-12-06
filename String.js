let str = "Hello World";
let len = str.length;
for (let i = 0; i < len; i++) {
    console.log(str[i]);
}

const obj = {
    item:"pen",
    price:10
}

console.log(`the cose of ${obj.item} is ${obj.price} Rs`);

console.log(str.slice(0,5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace("World","JavaScript"));