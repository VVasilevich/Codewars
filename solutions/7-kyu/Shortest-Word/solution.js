function findShort(s) {
  const words = s.split(' ');
  return words.reduce((min, word) => Math.min(min, word.length), words[0].length);
}