/*
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

var twoSum = function(nums, target) {
    let res = []
    if (!Array.isArray(nums) || nums.length < 1)
        return res

    const map = new Map()
    for (let i = 0; i < nums.length; ++i) {
        const item = nums[i]
        if (map.has(item)) {
            res = [map.get(item), i]
            break
        }
        map.set(target - item, i)
    }

    return res
};

[
    [[2,7,11,15], 9],
    [[3,2,4], 6],
    [[3,3], 6],
].forEach(([arr, target]) => console.log(arr, target, twoSum(arr, target)))
