function gcdOfStrings(str1: string, str2: string): string {
  // 순서를 바꿔 이어붙였을 때 다르면 공통 패턴이 없음
  if (str1 + str2 !== str2 + str1) return "";

  // 최대공약수. 예를 들어 6글자, 3글자 짜리는 반드시 답 문자열의 길이는 3이어야 함.
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  return str1.slice(0, gcd(str1.length, str2.length));
}
