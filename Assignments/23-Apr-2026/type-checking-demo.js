
let totalTests = 120;              // number
let passedTests = 89;                // number
let failedTests = 31;                   // Number
let passRate = (passedTests/totalTests)*100;                        // decimal number
let testSuitName = "Billing Engine Test";     // String
let undf;
var testNull=null;
let testbigint= 2123124342312312312413423513512412412412432131231241241241241241n;
if (passedTests==totalTests){
let AllTestPassed = true;  
console.log("All Tests Passed : "+ AllTestPassed);
}    
else {
    AllTestPassed = false;
    console.log("All Tests Passed : "+ AllTestPassed);
}           // Boolean

console.log("========================================");
console.log("             Type Check                 ");
console.log("========================================");
console.log("");
console.log("Type of totalTests is " + typeof (totalTests));
console.log("Type of passRate is " + typeof (passRate));
console.log("Type of testSuitName is " + typeof (testSuitName));
console.log("Type of AllTestPassed is " + typeof (AllTestPassed));
console.log("Type of undf is " + typeof (undf));
console.log("Type of testNull is " + typeof (testNull));
console.log("Type of testbigint is " + typeof (testbigint));
console.log("");
console.log("========================================");
