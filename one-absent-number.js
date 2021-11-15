export const oneAbsentNumber = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return null;

    const uniqueNumbers = new Set();
    let totalSumm = 0, dupSumm = 0;

    for (const i of arr) {
        totalSumm += i;
        if (uniqueNumbers.has(i))
            dupSumm += i;
        else
            uniqueNumbers.add(i);
    }

    return totalSumm - 2 * dupSumm;
}

function test() {
    [
        undefined,
        [],
        [1], // 1
        [1, 1, 2], // 2
        [2, 2, 1], // 1
        [4, 1, 2, 1, 2], // 4
        [6, 8, 11, 6, 9, 8, 11], // 9
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, oneAbsentNumber(arr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
