console.log("This is my second JS  program")

function test(){
    var temp=5;
    console.log (typeof temp);
    temp="abc";
    console.log (typeof temp);
    temp=true;
    console.log (typeof temp);
}
test();

let a = "10a";
let b = 20;
let c = a + b;
let d = a - b;
console.log(c);
console.log(d);

let count=5;
let count1=++count;
let count2=count++;

console.log(count);
console.log(count1);
console.log(count2);