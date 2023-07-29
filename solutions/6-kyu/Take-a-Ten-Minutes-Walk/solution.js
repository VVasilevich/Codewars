function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  
  walk.forEach(elem => {
    switch (elem) {
        case 'n':
          n++;
          break;
        case 's':
          s++;
          break;
        case 'w':
          w++;
          break;
        case 'e':
          e++;
          break;
    }
  });
  
  return n - s === 0 && w - e === 0;
}