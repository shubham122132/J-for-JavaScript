const obj = {
    name: "shubham",
    age: 23,
    city: "pune"
}

for(const key in obj){
    console.log(key + ": " + obj[key]);
}