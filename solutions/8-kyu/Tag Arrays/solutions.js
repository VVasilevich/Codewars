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
      res.push(sheep);
    }
  })

  return res.length;
}

// Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);
}

// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// 1

function digitize(n) {
  let newN = [...'' + n];
  let res = [];

  for (let i = 0; i < newN.length; i++) {
    res.push(newN[i]);
  }

  return res.map(Number).reverse();
}

// 2

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

// Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x) {
  return x.reduce((acc, count) => acc * count);
}

// Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

const invert = array => array.map(num => -num);

// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

// 1

function squareSum(numbers) {
  let num = [];
  let res = 0;

  for (let i = 0; i < numbers.length; i++) {
    num.push(Math.pow(numbers[i], 2));
  }

  for (i = 0; i < num.length; i++) {
    res += num[i];
  }

  return res;
}

// 2

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b * b, 0);
}

// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => !geese.includes(item));
}

// Printing Array elements with Comma delimiters
// https://www.codewars.com/kata/56e2f59fb2ed128081001328

function printArray(array) {
  return array.join(',');
}

// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}