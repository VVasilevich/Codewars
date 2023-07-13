function cookie(x) {
  if (typeof x === 'string') {
    who = 'Zach';
  } else if (typeof x === 'number') {
    who = 'Monica';
  } else {
    who = 'the dog';
  }
  return `Who ate the last cookie? It was ${who}!`;
}