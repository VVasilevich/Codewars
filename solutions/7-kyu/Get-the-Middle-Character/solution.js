function getMiddle(s) {
  const middleChar = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(middleChar - 1, middleChar + 1) : s.charAt(middleChar);
}