// 1 + 2 + 3 + 4 + 5 + 6 + 7 
function sumOfNumbers(number) {
  let sum = 0;
for(let i = 1; i <= number.length; i++) {
  sum = sum + i;
  console.log(i, sum);
}
return sum;
}
const totalNumberSum = [1, 2, 3, 4, 5, 6, 7];
const myNumbers = sumOfNumbers(totalNumberSum);
console.log(myNumbers);
