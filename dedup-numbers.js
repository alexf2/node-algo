// подстрока str должна быть в dataStr в нужном порядке, но не обязательно слитно
export const dedupNumbers = nums => {
    if (!nums || !Array.isArray(nums) || !nums.length)
        return nums;

    let prevNum, result = [];
    for (const n of nums) {
        if (n !== prevNum)
            result.push(n);
        prevNum = n;
    }

    return result;
}

function test() {
    [
        undefined,
        [],
        [1],
        [1, 2, 3],
        [1, 2],
        [1, 1],
        [2, 3, 5, 6, 6, 6, 8],
        [1, 1, 2, 3, 3, 3, 4, 5, 7, 7, 7],
        [1, 8, 8],
        [1, 2, 2, 5],
        [1, 2, 2, 5, 5],
        [1, 2, 2, 5, 5, 5],
        [1, 1, 2],
        [1, 2, 2],
        [2, 2, 2],
        [1, 2, 2, 3, 3],
    ].forEach((nums, i) => {
        console.log(`${i + 1}:`, nums, ' --> ', dedupNumbers(nums));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
