// function getSumOfAnArray(numbers) {
// let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     const indexs = i;
//     const element = numbers[indexs]
//     sum = sum + element;
//     console.log(indexs, element, sum);
//   }

// }
// const myNumbers = [12, 45, 47, 65, 78, 32, 43, 91];
// getSumOfAnArray(myNumbers);

// function getSumOfAnArrary(numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     const indexs = i;
//     const element = numbers[indexs];
//     sum = sum + element;
//     console.log(indexs, element, sum);
//   }

// }
// const myNumbers = [45, 48, 45, 124, 42, 781, 25, 12, 14, 16];
// getSumOfAnArrary(myNumbers)

// function getSumOfAnArrary(numbers) {
//   let sum = 0;
//   for(let j = 0; j < numbers.length; j++){
//     const indexs = j;
//     const element = numbers[indexs]
//     sum = sum + element;
//     // console.log(indexs, element, sum);
//   }
// }

// function getOddNumbersOfAnArray(numbers) {
//   const oddNumbers = [];
//   for(let i = 0; i < numbers.length; i++) {
//     const indexs = i;
//     const element = numbers[indexs];
//     if(element % 2 !== 0) {
//     console.log(indexs, element);
//     oddNumbers.push(element);

//     }
  
//   }

//   return oddNumbers;
// }
// const myNumbers = [45, 14, 124, 451, 48, 42, 48, 43, 458, 733];
// const oddnNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddnNumbers);
// getSumOfAnArrary(myNumbers);

function getSumOfAnArrary(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    const indexs = i;
    const element = numbers[indexs];
    sum = sum + element;
    console.log(indexs, element, sum);
  }
  return sum;
}

function getOddNumbersOfAnArray(numbers) {
  let oddNumbers = [];
  for(let i = 0; i < numbers.length; i++) {
    const indexs = i;
    const element = numbers[indexs];
    if(element % 2 !== 0) {
      console.log(indexs, element);
      oddNumbers.push(element);
    }
  
    
  }
  return oddNumbers
}
const myNumbers = [45, 12, 14, 17, 23, 16, 20];

const oddNumber = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumber);

const getOddSumnum = getSumOfAnArrary(oddNumber);
console.log(getOddSumnum);






