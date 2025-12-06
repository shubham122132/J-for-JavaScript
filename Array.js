let marks = [12,13,12,15];
console.log(marks);
console.log(marks.length);

marks.push(20);
// console.log(marks.findIndex((value) => value === 15));

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

for(let i in marks){
    console.log(`The index is ${i} and value is ${marks[i]}`);
}
for(let value of marks){
    console.log(value);
}