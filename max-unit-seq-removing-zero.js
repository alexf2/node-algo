/*
    Вернуть длину наибольшей непрерывной цепочки '1', которую можно получить удалением только одного '0'.
*/
export const maxUnitLenRemovingZero = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return 0;

    let count = 0, zeroCount = 0, maxLen = 0;
    for (const item of arr) {
        if (item === 1)
            count++;
        else {
            if (count && zeroCount < 1)
                count++, zeroCount++;
            else {
                maxLen = Math.max(maxLen, count - 1);
                count = 0, zeroCount = 0;
            }
        }
    }

    return Math.max(maxLen, zeroCount > 0 ? count - 1 : count);
}

function test() {
    [
        undefined,
        [],
        [0],
        [0, 0, 0],
        [1, 1], // 2
        [1, 1, 1], // 3
        [1, 1, 1, 0], // 3
        [0, 1, 1, 1],// 3
        [1, 1, 0, 1, 1], // 4
        [1, 1, 0, 0, 1, 1], // 2
        [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1], // 1
        [0, 1, 0], // 1
        [0, 1, 0, 0], // 1
        [0, 1, 0, 1], // 2
        [0, 0, 1, 1, 0, 1, 1, 0], // 4
        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, arr, ' --> ', maxUnitLenRemovingZero(arr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
