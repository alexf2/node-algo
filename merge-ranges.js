/*
    Слияние отрезков:

    Вход: [1, 3] [100, 200] [2, 4]
    Выход: [1, 4] [100, 200]
 */
export const mergeRanges = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return [];

    const ordered = [...arr].sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const res = [];
    let prev;
    for (const item of ordered) {
        if (prev && prev[1] >= item[0])
            prev[1] = Math.max(prev[1], item[1]);
        else
            res.push(prev = item);
    }

    return res;
}

function test() {
    [
        undefined,
        [],
        [[1, 3], [100, 200], [2, 4]],
        [[5, 6], [7, 8], [8, 10], [10, 11],[12, 15]],
        [[1, 5], [2, 4], [4, 5], [7, 12]],
        [[1, 5], [10, 15]],
        [[1, 5], [10, 15], [3, 4]],
        [[1, 5], [10, 15], [3, 5]],
        [[1, 5], [10, 15], [3, 6]],
        [[1, 5], [10, 15], [3, 9]],
        [[1, 5], [10, 15], [3, 14]],
        [[1, 5], [10, 15], [3, 10]],
        [[1, 5], [10, 15], [3, 10], [-1, 0], [1, 1], [2, 4]],
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, arr, ' --> ', mergeRanges(arr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
