/**
 *  배열 요소 접근
 */

function badGroupButton() {
  const confirmButton = document.getElementsByName('button')[0];
  const cancelButton = document.getElementsByName('button')[1];
  const resetButton = document.getElementsByName('button')[2];
  // ...some code
}

function goodGroupButton() {
  const [confirmButton, cancelButton, resetButton] 
    = document.getElementsByName('button');
  // ...some code
}

// ------------------------------------------------------

function badFormDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}

function goodFormDate(targetDate) {
  const [date] = targetDate.toISOString().split('T');
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}