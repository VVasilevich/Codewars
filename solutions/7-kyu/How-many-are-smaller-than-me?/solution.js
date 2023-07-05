function smaller(n) {
  let result = [];

  for (let i = 0; i < n.length; i++) {
    let count = 0;
    for (let j = i + 1; j < n.length; j++) {
      if (n[j] < n[i]) {
        count++;
      }
    }
    result[i] = count;
  }

  return result;
}