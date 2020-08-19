const firstRow = prompt('Write down the first row please');
const secondRow = prompt('Write down the second row please');
let firstCount = 0;
let secondCount = 0;
let result = '';

function getRow(firstRow, secondRow) {
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) === 'а') {
      firstCount++} else {
        firstCount = firstCount}}
  for (let i = 0; i < secondRow.length; i++) {
    if (secondRow.charAt(i) === 'а') {
      secondCount++} else {
        secondCount = secondCount}}
  if (firstCount > secondCount) {
    result = firstRow} else if (firstCount < secondCount) {
      result = secondRow} else {
        result = 'Amount of a is equal'}
  alert(result);
}

alert(getRow(firstRow, secondRow));
