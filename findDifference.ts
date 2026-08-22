function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const diff1: number[] = [];
  const diff2: number[] = [];

  for (const n of set1) {
    if (!set2.has(n)) diff1.push(n);
  }
  for (const n of set2) {
    if (!set1.has(n)) diff2.push(n);
  }

  return [diff1, diff2];
}
