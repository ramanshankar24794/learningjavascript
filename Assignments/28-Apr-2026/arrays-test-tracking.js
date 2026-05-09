console.log("");
console.log("===============");
   console.log("Exercise 1")
   console.log("===============");

let testCases = ["Valid credentials",
   "Invalid password",
   "Empty username",
    "Empty password",
   "Remember me checkbox"];
 let lastValue= testCases[testCases.length-1];
   console.log (`The complete array ${testCases}`);
   console.log(`The total number of test cases are ${testCases.length}`);
   console.log(`The first test case is ${testCases[0]}`);
   console.log(`The last test case is ${lastValue }`);

   /*## Exercise 2: Test Results Tracker*/
console.log("");
console.log("===============");
   console.log("Exercise 2")
   console.log("===============");
  let testResults =[];
  testResults.push("Passed")
  console.log(`Test 1 completed : ${testResults[0]}`);
   testResults.push("Passed")
  console.log(`Test 2 completed : ${testResults[1]}`);
   testResults.push("Failed")
  console.log(`Test 3 completed : ${testResults[2]}`);
   testResults.push("Passed")
  console.log(`Test 4 completed : ${testResults[3]}`);
   testResults.push("Skipped")
  console.log(`Test 5 completed : ${testResults[4]}`);
console.log("");
console.log("Test Summary:");
console.log(`Total Tests Run ${testResults.length}`);
console.log(`Results : ${testResults}`);


    let failIndex = testResults.indexOf("Failed")
    console.log(`Contains Failures : Yes (Found at ${failIndex})`)


/*## Exercise 3: Test Data Management*/
console.log("");
console.log("===============");
   console.log("Exercise 3")
   console.log("===============");

let testEmails=["user1@test.com",
   "user2@test.com",
   "user3@test.com"];

   console.log(`Initial Emails ${testEmails}`);
   console.log(`Initial Count ${testEmails.length}`);

   testEmails.push("user4@test.com");
    console.log("");
   console.log(`After adding email at last ${testEmails}`)
   console.log(`Count after adding email ${testEmails.length} `);

   testEmails.unshift("admin@test.com");
    console.log("");
   console.log(`After adding email at the beginning ${testEmails}`)
   console.log(`Count after adding email ${testEmails.length} `);

   /*## Exercise 4: Test Score Analysis*/
console.log("");
console.log("===============");
   console.log("Exercise 4")
   console.log("===============");


 let testScores =[85, 92, 78, 95, 88, 73, 90];

 console.log(`Scores : ${testScores}`);
 console.log(`Total Scores : ${testScores.length}`);
 console.log(`First Score : ${testScores[0]}`);
 console.log(`Last Score : ${testScores[7]}`);

 
    let scoreA = testScores.indexOf(95)
    console.log(`Contains Score 95 : Yes (Found at ${scoreA})`)



