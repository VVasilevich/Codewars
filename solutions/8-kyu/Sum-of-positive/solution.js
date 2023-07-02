function positiveSum(arr) {
  let res = 0;

  arr.forEach(item => {
    if (item > 0) {
      res += item;
    }
  });

  return res;
}