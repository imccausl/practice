function repeatedStrings(s, n) {
  for (let i = 0; i < Math.floor(n / s.length); i++) {
    s += s;
  }

  for (let i = 0; i < s.length % n; i++) {
    s += s[i];
  }

  console.log(s);
  return s.match(/a/gi).length;
}

console.log(repeatedStrings("a", 100000));
