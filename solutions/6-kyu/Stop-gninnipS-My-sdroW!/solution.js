function spinWords(string) {
  const arrWords = string.split(' ');
  const newString = arrWords.map((word) => (word.length >= 5) ? word.split('').reverse().join('') : word);
  return newString.join(' ');
}