// console.log(4/2); 
// console.log(98/2); 
// console.log(144/2); 
// console.log(186/2); 

// console.log(4%2); 
// console.log(98%2); 
// console.log(144%2); 
// console.log(186%2); 


// console.log(7%2); 
// console.log(97%2); 
// console.log(143%2); 
// console.log(189%2); 

function isEven(number) {
  const remainder = number % 2;

  if(remainder === 0){
    return true;
  }
  else{
    return false;
  }
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const yourNumberIsEven = isEven(1280);
console.log(yourNumberIsEven);


