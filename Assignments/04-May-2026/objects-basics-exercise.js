console.log("");
console.log("===============");
   console.log("Exercise 1")
   console.log("===============");


   const testCase ={
   id: "TC-001",
   name: "Login with valid credentials",
   priority: "High",
   status: "Passed",
   duration: 2.5,
   browser: "Chrome"
   };

   console.log(testCase.id);
   console.log(testCase.name);
   console.log(testCase.priority);
   console.log(testCase.status);
   console.log(testCase.duration);
   console.log(testCase.browser);

   testCase.tester = "John Doe";
   testCase.status = "Failed";

  console.log(testCase.tester);
  console.log(testCase.status);


  /*## Exercise 2: Test User Objects*/
  console.log("");
console.log("===============");
   console.log("Exercise 1")
   console.log("===============");

  const user1 = { Username: "admin@test.com",
  Password: "********",
  Email: "admin@test.com",
  Role: "admin"
  }

  const User2 = {
  Username: "user1@test.com",
  Password: "********",
  Email: "user1@test.com",
  Role: "user"
  }

  const User3 = {
  Username: "user2@test.com",
  Password: "********",
  Email: "user2@test.com",
  Role: "user"
  }

  let users = [user1,User2,User3];

  for (let i=0;i<users.length;i++)
  {
    console.log(users[i]);
  }
 
  console.log("Summary");
  console.log(`Total Users : ${users.length}  `);
/*
  if (users.Role == 'admin'){
     let userAdm = userAdm++;
     console.log(`Admin : ${userAdm.length}`);
  }
 if (users.Role == 'user')
  {
    let userReg = userReg++
  console.log(`Regular Users : ${userReg.length}`);
  }

  */


  /*## Exercise 3: Test Results Array*/
  console.log("");
console.log("===============");
   console.log("Exercise 3")
   console.log("===============");

 
const testResults = [
  {
    name: "Login Test",
    result: "PASSED",
    duration: 12
  },
  {
    name: "Signup Test",
    result: "FAILED",
    duration: 8
  },
  {
    name: "Profile Update Test",
    result: "PASSED",
    duration: 15
  },
  {
    name: "Payment Test",
    result: "SKIPPED",
    duration: 0
  },
  {
    name: "Logout Test",
    result: "PASSED",
    duration: 5
  }
];


console.log("Test Results:");


testResults.forEach(test => {
  console.log(
    `Test: ${test.name}, Result: ${test.result}, Duration: ${test.duration}s`
  );
});


let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;
let totalDuration = 0;

testResults.forEach(test => {
  totalDuration += test.duration;

  if (test.result === "PASSED") {
    passedCount++;
  } else if (test.result === "FAILED") {
    failedCount++;
  } else if (test.result === "SKIPPED") {
    skippedCount++;
  }
});

const totalTests = testResults.length;
const passRate = ((passedCount / totalTests) * 100).toFixed(2);


console.log("\nTest Summary:");
console.log("Total tests:", totalTests);
console.log("Passed count:", passedCount);
console.log("Failed count:", failedCount);
console.log("Skipped count:", skippedCount);
console.log("Pass rate:", passRate + "%");
console.log("Total duration:", totalDuration + "s");

/*## Exercise 4: Object Methods and 'this' Keyword*/

console.log("");
console.log("===============");
   console.log("Exercise 4")
   console.log("===============");

const testRunner = {
  name: "Login Suite",
  totalTests: 5,
  passedTests: 0,
  failedTests: 0,

  start() {
    console.log(`Running test suite: ${this.name}`);
  },

  pass() {
    this.passedTests++;
    console.log(`Passed Tests: ${this.passedTests}`);
  },

  fail() {
    this.failedTests++;
    console.log(`Failed Tests: ${this.failedTests}`);
  },

  report() {
    const passRate = (this.passedTests / this.totalTests) * 100;

    console.log("\n--- Test Summary ---");
    console.log(`Total Tests: ${this.totalTests}`);
    console.log(`Passed: ${this.passedTests}`);
    console.log(`Failed: ${this.failedTests}`);
    console.log(`Pass Rate: ${passRate}%`);
  }
};


testRunner.start();

testRunner.pass();
testRunner.pass();
testRunner.pass();

testRunner.fail();

testRunner.report();


const testCase1 = {
  name: "Login Test",
  status: "NOT STARTED",
  duration: 0,
  startTime: null,

  start() {
    this.status = "RUNNING";
    this.startTime = Date.now();

    console.log(`Test "${this.name}" started`);
  },

  pass() {
    this.status = "PASSED";
    this.duration = Date.now() - this.startTime;

    console.log(`Test "${this.name}" passed`);
    console.log(`Duration: ${this.duration} ms`);
  },

  fail(reason) {
    this.status = "FAILED";
    this.duration = Date.now() - this.startTime;

    console.log(`Test "${this.name}" failed`);
    console.log(`Reason: ${reason}`);
    console.log(`Duration: ${this.duration} ms`);
  }
};


testCase1.start();


setTimeout(() => {
  testCase1.pass();

}, 1000);

  





