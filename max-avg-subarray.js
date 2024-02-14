/*
    You are given an integer array nums consisting of n elements, and an integer k.
    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/
const findMaxAverage = function(nums, k) {
    if (!nums?.length)
        return 0

    if (nums.length <= k)
        return nums.reduce((acc, curr) => acc + curr) / nums.length

    let summ = 0
    for (let i = 0; i < k; summ += nums[i++]);

    let maxSumm = summ
    for (let i = 0, j = k; i < nums.length - k; ++i, ++j)        
        maxSumm = Math.max(maxSumm, summ += -nums[i] + nums[j])    

    return maxSumm / k
};

[
    [[1,12,-5,-6,50,3], 4],
].forEach(([items, k]) => console.log(items, k, findMaxAverage(items, k)))
