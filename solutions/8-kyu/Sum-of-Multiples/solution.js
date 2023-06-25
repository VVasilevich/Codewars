function sumMul(n, m) {
    let res = 0;
    
    for (let i = 0; i < m; i++) {
      if (i % n === 0) {
        res += i;
      }
    }
    return m > 0 ? res : 'INVALID';
}