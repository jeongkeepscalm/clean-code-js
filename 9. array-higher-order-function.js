/**
 * 배열 고차 함수
 * 
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬렬
 */

const price = ['3000', '1000', '2000', '4000', '5000'];

const suffixWon = (price) => price + '원';
const isOver1000 = (price) => Number(price) > 1000;
const sortPrice = (a, b) => a - b;

function getWonPrice(price) {
  return price.map(suffixWon).filter(isOver1000).sort(sortPrice);
}

console.log(getWonPrice(price)); // [ '2000원', '3000원', '4000원', '5000원' ]