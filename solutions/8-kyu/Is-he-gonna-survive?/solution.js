function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}

console.log(hero(100, 40));
console.log(hero(7, 4));
console.log(hero(10, 5));