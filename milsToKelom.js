function milesToKilometer(miles) {
  const kilometer = miles * 1.609344;
  return kilometer
}
const miless = 145;
const totalKilometer = milesToKilometer(miless);
console.log('total kilo hobe', totalKilometer);
const fix = totalKilometer.toFixed(2);
console.log(fix);

function meterToCentimeter(meter) {
  const centimeter = meter * 5;
  return centimeter
}
const totalMeter = 14000;
const totalCentimeter = meterToCentimeter(totalMeter);
console.log('this is total cetimeter', totalCentimeter);

function kgToIbs (kg) {
  const ibs = kg * 5;
  return ibs
}
const totalkg = 135;
const totalibs = kgToIbs(totalkg);
console.log(totalibs);