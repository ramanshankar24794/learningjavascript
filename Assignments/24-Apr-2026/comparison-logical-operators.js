/* Exercise 1 Age Range Validator */
let age=66;
console.log("Exercise 1");
if ((age >=18) && (age<=65))
{
    console.log("AGE is "+ age);
    console.log("✅ Valid age range (18-65)");
}
else 
{
    console.log("AGE is "+ age);
    console.log("❌ Age must be between 18 and 65");
}

/* Exercise 2 Login Credentials Validator */
let username = "";
let password ="";
let email = "test@null.com";
console.log("");
console.log("Exercise 2");

if ((username !=="" && password !=="") || email !== "")
{
    console.log("Username is " + username);
    console.log("Password is " + password);
    console.log("Email is " + email);
    console.log("✅ Sufficient login credentials");
}
else
    {
    console.log("Username is " + username);
    console.log("Password is " + password);
    console.log("Email is " + email);
console.log("❌ Insufficient credentials - provide username+password OR email");
}

/* Exercise 3: Test Status Validator */
let status="FAILED";
let errorCount=1;
console.log("");
console.log("Exercise 3");

if ((status=="PASSED" || status=="SKIPPED" ) && errorCount==0)
{
    console.log("Test status is " + status);
    console.log("Error Count is " + errorCount);
    console.log("✅ Test completed successfully");
}
else 
{
    console.log("Test status is " + status);
    console.log("Error Count is " + errorCount);
    console.log("❌ Test has issues");
}

/* Exercise 4: Response Time Validator */
let responseTime=3.5;
console.log("");
console.log("Exercise 4");

if(responseTime<3)
{
    console.log("Threshold is 3");
    console.log("Actual response time is " + responseTime);
    console.log("✅ Performance test PASSED (response time:"+ responseTime +" seconds)");
}
else 
{
     console.log("Threshold is 3");
    console.log("Actual response time is " + responseTime);
    console.log("❌ Performance test FAILED (response time: " + responseTime + " seconds, threshold: 3 seconds)");
}

/* Additional Challenge */


let result = validateCompleteUser(
    "testuser",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

function validateCompleteUser(username, password, email, age) {
    console.log("Validating test user...\n");
    if (username !=="" && (username.length>=3 && username.length <=20))
    {
        console.log("Valid Username");
    }
    else
    {
        console.log ("invalid Username");
    }

     if (password !=="" && password.length>=3)
    {
        console.log("Valid Password");
    }
    else
    {
        console.log ("invalid Password");
    }

     if (email !== "" && (email.contains =="@" && email.contains == "."))
    {
        console.log("Valid email");
    }
    else
    {
        console.log ("invalid email");
    }

    if (age >=18 && age<=120)
    {
        console.log("Valid Age");
    }
    else
    {
        console.log("Invalid Age");
    }
}

