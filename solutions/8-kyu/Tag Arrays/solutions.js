// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
  return arr.filter((item, index) => index % 2 === 0)
}

// Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  let res = [];
  for (let i = integer; i <= limit; i+=integer) {
      res.push(i);
  }
  return res;
}

// Remove duplicates from list
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

const distinct = a => [...new Set(a)];