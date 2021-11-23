/*
    Дан список интов и число-цель. Нужно найти такой range, чтобы сумма его элементов давала число-цель.

    elements = [1, -3, 4, 5]
    target = 9
    result = range(2, 4) # because elements[2] + elements[3] == target
*/
export const findTargetSummInterval = (arr, targetSumm) => {
    if (!arr || !Array.isArray(arr) || !arr.length || isNaN(targetSumm))
        return [];
    
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i, windowSumm = arr[i]; j < arr.length; windowSumm += arr[++j]) {
            if (windowSumm === targetSumm)
                return [i, j];
        }
    }

    return [];
}

function test() {
    [
        [undefined],
        [[1, -3, 4, 5], 9], // 2 - 3
        [[1, 2, 3, 4, 5], 1], // - 0 - 0
        [[1, 2, 3, 4, 5], 12], // 2 - 4
        [[1, 2, 3, 4, 5], 0],
        [[1, 2], 5],
        [[1, 2], 3],
        [[1, 2], 5],
        [[1, 2], 3],// 0 - 1
        [[1, 2, 1, 10, 3], 13], // 1 - 3
        [[1, 2, 1, 10, 3], 11], // 2 - 3
        [[1, 2, 1, 10, 3], 3], // 0 - 1
        [[1, 2, 1, 10, 3], 2], // 1 - 1
        [[1, 2, 1, 10, 3], 5], 
        [[1, 2, 1, 10, 3], 15],
        [[1, 2, 4, 2, 1, 3, 6, 1, 0, 2, 3, 4], 11], // 4 - 7
    ].forEach(([arr, target], i) => {
        console.log(`${i + 1}:`, findTargetSummInterval(arr, target));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
