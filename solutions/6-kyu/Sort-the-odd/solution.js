// 1

function sortArray(array) {
  const result = [];
  const oddArr = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
  let countIndex = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(oddArr[countIndex++]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

// 2

function sortArray(array) {
  const odd = array.filter(num => num % 2).sort((a, b) => a - b);
  return array.map(num => num % 2 ? odd.shift() : num);
}