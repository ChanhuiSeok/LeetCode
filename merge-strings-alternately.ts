function mergeAlternately(word1: string, word2: string): string {
  const word1Arr = [...word1];
  const word2Arr = [...word2];
  let result = "";

  for (let i = 0; i < Math.max(word1Arr.length, word2Arr.length); i++) {
    if (word1Arr[i]) {
      result += word1Arr[i];
    }
    if (word2Arr[i]) {
      result += word2Arr[i];
    }
  }
  return result;
}
