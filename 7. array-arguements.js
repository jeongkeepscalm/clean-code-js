/**
 * 유사 배열 객체
 */
function generatePriceList1() {
  console.log(Array.isArray(arguments)); // false
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    console.log(element); 
  }
}
generatePriceList1(100, 200, 300, 400, 500);


function generatePriceList2() {
  return Array.from(arguments).map((arg) => arg + '원');
}
const newList = generatePriceList2(100, 200, 300, 400, 500);
console.log(newList); // [ '100원', '200원', '300원', '400원', '500원' ]