let max = Number.MAX_SAFE_INTEGER;
console.log(max);
console.log(max + 1);  
console.log(max + 2);  
console.log(max + 3);  


console.log("====================================");


try {
    let max2 = 9007199254740991n;
console.log(max1 + 1);  
console.log(max1 + 2);  
console.log(max1 + 3);  
}
catch {
    
let max1 = 9007199254740991n;
console.log("catch block " +(max1 + 1n));  
console.log("catch block " +(max1 + 2n)); 
console.log("catch block " +(max1 + 3n)); 
console.log("Type of Max1 is "+ typeof(max1))
}

