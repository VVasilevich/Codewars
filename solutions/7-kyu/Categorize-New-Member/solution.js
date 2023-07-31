function openOrSenior(data){
  const result = [];
  
  for (const [age, handicap] of data) {
    if (age >= 55 && handicap > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  
  return result;
}