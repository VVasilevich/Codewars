function accum(s) {
  let newStr = '';
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toUpperCase();
    newStr += letter + letter.toLowerCase().repeat(i);
    if (i !== s.length - 1) {
      newStr += '-';
    }
  }
  return newStr;
}