
const TEST_NAME = "Login Functionality";
let tester="Raman";
let step = "Open Browser";
let testStatus="In Progress";

console.log("==========================================");
console.log("      TEST EXECUTION FLOW                 ");
console.log("==========================================");
console.log("Test Name : " + TEST_NAME);
console.log("Tester : " + tester);
console.log("");
console.log("Step 1 : " + step);
console.log("Status : " + testStatus);

step = "Naviating to login page";
testStatus="In Progress";
console.log("");
console.log("Step 2 : " + step);
console.log("Status : " + testStatus);

step = "Entering credentials";
let username="test@null.com";
testStatus="In Progress";
console.log("");
console.log("Step 3 : " + step);
console.log("Username : " + username);
console.log("Status : " + testStatus);

step = "Clicking login button";
testStatus="In Progress";
console.log("");
console.log("Step 4 : " + step);
console.log("Status : " + testStatus);

step = "Verifying dashboard";
testStatus="Completed";
console.log("");
console.log("Step 5 : " + step);
console.log("Status : " + testStatus);

console.log("");
console.log("==========================================");

if (testStatus="Completed"){
console.log("Final Status: PASSED");
}
else
{
    console.log("Final Status: Failed");
}

console.log("Test Duration: 2.5 seconds");
console.log("==========================================");





