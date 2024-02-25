function min(a, b, c) {
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  return min;
}

module.exports = {min};
