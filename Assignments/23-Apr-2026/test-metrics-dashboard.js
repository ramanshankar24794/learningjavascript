
let totalTests = 120;              // number
let passedTests = 89;                // number
let failedTests = 31;                   // Number
let passRate = (passedTests/totalTests)*100;                        // decimal number
let testSuitName = "Billing Engine Test";     // String
if (passedTests==totalTests){
let AllTestPassed = true;  

console.log("All Tests Passed : "+ AllTestPassed);
}    
else {
    AllTestPassed = false;
    console.log("All Tests Passed : "+ AllTestPassed);
}           // Boolean


console.log("========================================");
console.log("             Test Summary               ");
console.log("========================================");
console.log("");
console.log("Test Suit : " + testSuitName);
console.log("Total Tests : " + totalTests);
console.log("Tests Passed : " + passedTests);
console.log("Tests Failed : " + failedTests);
console.log("Pass Percentage : " + passRate);
if (passedTests==totalTests){
let AllTestPassed = true;  
console.log("All Tests Passed : "+ AllTestPassed);
}    
else {
    AllTestPassed = false;
    console.log("All Tests Passed : "+ AllTestPassed);
}    
console.log("");
console.log("========================================");