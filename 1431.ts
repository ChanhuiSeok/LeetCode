function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result: boolean[] = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= Math.max(...candies)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
