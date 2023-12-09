/*
    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.
*/

const productExceptSelf = function(nums) {
    if (nums?.length < 2)
        return nums

    const leftProducts = new Array(nums.length)
    for (let i = 0, currentProd = 1; i < nums.length; ++i)
      currentProd = leftProducts[i] = currentProd * nums[i]

    const rightProducts = new Array(nums.length)
    for (let i = nums.length - 1, currentProd = 1; i >= 0; --i)
      currentProd = rightProducts[i] = currentProd * nums[i]

    const result = new Array(nums.length)
    for (let i = 0; i < nums.length; ++i)
      result[i] = (i > 0 ? leftProducts[i - 1] : 1) * (i < nums.length - 1 ? rightProducts[i + 1] : 1)

    return result
};

[
    [1, 2, 3, 4],
    [-1, 1, 0, -3, 3],
].forEach((item) => console.log(productExceptSelf(item)))