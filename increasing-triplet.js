/*
    Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
    If no such indices exists, return false.
*/

const increasingTriplet = function(nums) {
    if (nums?.length < 3)
        return false

    /*const {length} = nums
    for (let i = 0; i < length - 2; ++i)
        for (let j = i + 1; j < length - 1; ++j)
            for (let k = j + 1; k < length; ++k)
                if (nums[i] < nums[j] && nums[j] < nums[k])
                    return true*/

    let first = Infinity, second = Infinity
    for (const val of nums) {
        if (val <= first)
            first = val
        else if (val <= second)
            second = val
        else 
            return true

    }

    return false
};

[
    [20, 100, 10, 12, 5, 13],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [2, 1, 5, 0, 4, 6],
].forEach((item) => console.log(item, increasingTriplet(item)))
