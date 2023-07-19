// 1

function stray(numbers) {
  let result = 0;
  for (const num of numbers) {
    result ^= num;
  }
  return result;
}

// 2

function stray(numbers) {
  for (const num of numbers) {
    if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
      return num;
    }
  }
}