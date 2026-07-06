function pivotIndex(nums: number[]): number {
  let pivot = -1;

  for (let i = 0; i < nums.length; i++) {
    const leftArr = nums.slice(0, i);
    const rightArr = nums.slice(i + 1, nums.length);

    const leftSum = leftArr.reduce((acc, cur) => acc + cur, 0);
    const rightSum = rightArr.reduce((acc, cur) => acc + cur, 0);

    if (leftSum === rightSum) {
      pivot = i;
      break;
    }
  }
  return pivot;
}
