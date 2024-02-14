const pivotIndex = function(nums) {
  let sl = 0, sr = nums.reduce((acc, curr) => acc + curr, 0) - nums[0]
  let i = 0
  for (; sl !== sr && i < nums.length; ++i) {
      const valLeft = nums[i]
      const valRight = i < nums.length - 1 ? nums[i + 1] : 0
      sl += valLeft, sr -= valRight
  }

  return i === nums.length ? -1 : i
};

[
  [1,7,3,6,5,6],
  [1,2,3],
  [2,1,-1],
].forEach((item) => console.log(item, ': ', pivotIndex(item)))

