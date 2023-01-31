// function isLeapYear (year) {
//   const remainder = year % 4;
//   if(remainder === 0) {
//     return true;
//   }
//   else{
//     return false;
// }
// }
// function isLeapYear (year) {
//   const remainder = year % 4;
//   if(remainder === 0) {
//     return true;
//   }
//     return false;
// }

// const isMyYearLeapYear = isLeapYear(1933);
// console.log('my year:', isMyYearLeapYear)
// const isYourYearNoLeapYear = isLeapYear(1960);
// console.log('Your Year:', isYourYearNoLeapYear);

function isLeapYear(year) {
  const remainder = year % 4;
  if(remainder === 0){
    return true;
  }
  return false;
}
const isLeapYearSections = isLeapYear (1981);
console.log('is Leap year Sections', isLeapYearSections);
const isYourLeapYearSections = isLeapYear (2043);
console.log('is Your leap Year', isYourLeapYearSections);
const isMyLeapYearSections = isLeapYear (2018);
console.log('my leap year', isMyLeapYearSections);
const isAntorLeapYearSections = isLeapYear(1920);
console.log('is Antor leap year', isAntorLeapYearSections)
const isJibonLeapYearSections = isLeapYear (1990);
console.log('is Jibon Leap Year', isJibonLeapYearSections);
const isKamalLeapYearSections = isLeapYear (1985);
console.log('is Kamal Leap Year', isKamalLeapYearSections);
const isJamalLeapYearSections = isLeapYear (1980);
console.log('is jamal leap year', isJamalLeapYearSections);

// function checkLeapYear(year) {
//   if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     return true;
//   }
//   return false;
// }

// const isYourLeapYear = checkLeapYear (2051);
// console.log(isYourLeapYear);
// const isMyYearLeapYear = checkLeapYear (2044);
// console.log(isMyYearLeapYear);

function checkLeapYear(year) {
  const remainder = year % 400;
  if(remainder === 0){
    return true;
  }
  return false;
}
const isMyYearLeapYear = checkLeapYear (2045);
console.log(isMyYearLeapYear);

