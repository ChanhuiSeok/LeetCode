function reverseWords(s: string): string {
  const trimmed = s.trim();
  const splitted = trimmed.split(" ").filter(Boolean).reverse();
  return splitted.join(" ");
}

// javascript string 메서드는 은근 강력
