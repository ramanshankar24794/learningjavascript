/* Exercise 1 

1. Create an array called `testCases` with these values:
   - "Login with valid credentials"
   - "Login with invalid password"
   - "Login with empty username"
   - "Logout functionality"
   - "Remember me checkbox"

   */

   const testCases = [
    "Login with valid credentials",
    "Login with invalid password",
    "Login with empty username",
    "Logout functionality",
    "Remember me checkbox"
   ];

   let len = testCases.length;
 console.log("Login Module Test Suite");
 console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

   for (let i =1 ; i<len ; i++)
   {
    console.log("Test Case Name is " + testCases[i]);
   }

   console.log("Total Test Cases " + len);

  /* Exercise 1.5: Refactor with for...of Loop */
console.log("");
   console.log("Login Module Test Suite For of loop");
 console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

  for (let x of testCases)
    {
    console.log("Test Case Name is " + x);
   }
console.log ("Total Test Cases " + testCases.length );



/*  Exercise 2: Count Test Results */

console.log("");
console.log("Exercise 2")
const testResults =["PASSED",
    "PASSED",
    "FAILED",
    "PASSED",
    "SKIPPED",
    "PASSED",
    "FAILED",
    "PASSED"]

    let passed=0
    let failed=0
    for (let result of testResults)
    {
        if (result == "PASSED") {
            passed++;
        }
        else
        {
            failed++;
        }

    }

    console.log("Total Tests :" + testResults.length);
    console.log("Tests Passed :" + passed);
    console.log("Tests Failed :" + failed);
    console.log("Pass Rate : " + ((passed/testResults.length)*100));
    console.log("Fail Rate : " + ((failed/testResults.length)*100));


    /*Exercise 3: Calculate Test Scores*/

    console.log("");
    console.log("Calculate Test Scores");
    console.log("=====================");

const testScores =[85, 92, 78, 95, 88, 73, 90, 87]

let total =testScores[0];;
let average= testScores[0]; ;
let highest = testScores[0];
let lowest = testScores[0];

for (let i=1; i< testScores.length ; i++)
{
    if (testScores[i] > highest)
    {
        highest = testScores[i]
    }
    else if (testScores[i]< lowest)
    {
        lowest = testScores [i]
    }

    total += testScores[i];
    average += testScores[i];
    

    
}
console.log("Total Score is :" + total);
console.log("Average Score is :" + (average/testScores.length));
console.log("Highest score is :" + highest);
console.log("Lowest score is :" + lowest);

/* Exercise 4: Find Failed Tests */

console.log("");
console.log("Exercise 4: Find Failed Tests");
console.log("=============================");

const testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
const testResults1 = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];
let failedtests =[];
console.log ("All Tests")
for (let i=0;i<testNames.length;i++)
{
    
    console.log(testNames[i] + " : " + testResults1[i]);
    if (testResults1[i] == "FAILED")
    {
        failedtests.push(testNames[i]);
        
    }

}
console.log("Failed Tests");
console.log(failedtests);


/*Exercise 5: Retry Logic with do...while */


        



