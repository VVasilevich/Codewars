function consonantCount(str) {
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/ig);
  return consonants ? consonants.length : 0;
}