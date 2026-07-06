function reverseVowels(s: string): string {
  // find vowels
  let result = [...s];
  const checked = check(s);
  checked.forEach((item) => {
    const { idx, origin } = item;
    result[idx] = origin;
  });
  return result.join("");
}

function check(origin: string) {
  const lowered = origin.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const resultIdx: number[] = [];
  const resultStrs: string[] = [];

  for (let i = 0; i < lowered.length; i++) {
    if (vowels.includes(lowered[i])) {
      resultIdx.push(i);
      resultStrs.push(origin[i]);
    }
  }
  return resultStrs.reverse().map((item, i) => ({ idx: resultIdx[i], origin: item }));
}

// 다른 풀이법 -> 투 포인터로, 맨 왼쪽(i)에 하나, 맨 오른쪽(j)에 하나 두고 vowels 인지 확인하고 맞으면 스왑
// i가 j보다 작을 때까지 반복. i는 오른쪽, j는 왼쪽으로 이동.
