function addedChar(s1, s2) {
  const charCount = {};
  
  for (const char of s2) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  for (const char of s1) {
    charCount[char]--;
  }
  
  for (const char in charCount) {
    if (charCount[char] > 0) {
      return char;
    }
  }
}