function isIsogram(str){
  const result = [];
  
  for (const char of str.toLowerCase()) {
    if (result[char]) {
      return false;
    }
    result[char] = true;
  }
  
  return true;
}