function isSubsequence(s: string, t: string): boolean {
  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[p]) {
      p++;
    }
    if (p >= s.length) return true; // 미리 빠져나오기 위해 사용
  }

  return p >= s.length;
}
