function factorial (number) {
  let num = number;
  let result = 1;
  while(num <= number) {
    result = result * num;
    num++
  }
  return result;
}
const fact = factorial(9);
console.log(fact);