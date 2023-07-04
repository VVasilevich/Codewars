function highAndLow(numbers) {
  let numArr = numbers.split(' ');
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}