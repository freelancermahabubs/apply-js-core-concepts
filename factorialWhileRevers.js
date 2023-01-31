function factorial(number) {
  let num = number;
  result = 1;
while(num >= 1) {
  result = result * num;
  num--;
}
return result;
}

const fact = factorial(7);
console.log(fact);