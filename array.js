let testScores = [80,81,76,90,50,71,49,18,88,80.1];

let greaterThan=[];
for (let i=0; i<testScores.length;i++)
{
    if (testScores[i] > 80)
    {
         greaterThan.push(testScores[i]);
    }
}
console.log(greaterThan);