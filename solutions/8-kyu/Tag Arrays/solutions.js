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

// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// 1

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const sumArray = array.reduce((sum, current) => sum + current);
    const res = sumArray / array.length;
    return res;
  }
}

// 2

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((sum, current) => sum + current) / array.length;
}

// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x) {
  let newX = [...x];
  let res = '';
  for (let i = 0; i < newX.length; i++) {
      if (newX[i] < 5) {
          res += '0';
      } else {
          res += '1';
      }
  }
  return res;
}

// Convert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

function stringToArray(string) {
  return string.split(' ');
}

// Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash(words) {
  return words.join(' ');
}

// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
  let res = [];

  arrayOfSheep.forEach(function(sheep) {
    if (sheep === true) {
      res.push(sheep)
    }
  })

  return res.length;
}