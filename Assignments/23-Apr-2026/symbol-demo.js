let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       
console.log("Type of sym1 is " + typeof (sym1));     
console.log("Type of sym2 is " + typeof (sym2));       
console.log("Description of sym1 is "+ sym1.description);   
console.log("Description of sym2 is "+ sym2.description);  

const testobj = {
    [sym1] : 'value 1',
    [sym2] : 'value 2'
};
console.log(testobj);
