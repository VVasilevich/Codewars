function descendingOrder(n) {
  const num = n.toString().split('');
  const sortNum = num.sort((a, b) => {
      return b - a;
  });
  return parseInt(sortNum.join(''));
}