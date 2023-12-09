/*
    You are given an integer array nums and an integer k.

    In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

    Return the maximum number of operations you can perform on the array.
*/

const maxOperations = function(nums, k) {
    if (!nums || nums?.length < 1)
        return 0

    nums.sort((a, b) => a - b)

    let count = 0, left = 0, right = nums.length - 1
    while (left < right) {
        if (nums[left] + nums[right] > k)
            right--
        else if (nums[left] + nums[right] < k)
            left++
        else {
            count++
            left++
            right--
        }
    }

    return count
};

[
    [[1,2,3,4], 5],
    [[4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2]
].forEach(([arr, k]) => console.log(arr, k, ':----', maxOperations(arr, k)))
