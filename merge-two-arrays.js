/*
    Объединить два отсортированных по возрастанию смассивов так, чтобы получился массив, упорядоченный по возрастанию.
*/

import {mergeNArrays} from './merge-n-arrays.js';

export const mergeTwoArrays = (arr1, arr2) => {
    if (!arr1 && !arr2) {
        return arr1;
    }

    const a1 = arr1 || [];
    const a2 = arr2 || [];
    const a1Len = a1.length;
    const a2Len = a2.length;

    const result = new Array(a1Len + a2Len);
    let i = 0, j = 0, k = 0;

    while (i < a1Len && j < a2Len)
        result[k++] = a1[i] < a2[j] ? a1[i++] : a2[j++];

    while (i < a1Len)
        result[k++] = a1[i++];

    while (j < a2Len)
        result[k++] = a2[j++];

    return result;
}

function mergeArrays2(arr1, arr2) {
    if (!arr1?.length)
        return arr2
    else if (!arr2?.length)
        return arr1

    let i = arr1.length - 1, j = arr2.length - 1, k = arr1.length + arr2.length - 1
    const result = arr1.slice(0)

    while (k >= 0) {
        if (j < 0 || (i >=0 && result[i] > arr2[j]))
            result[k--] = result[i--]
        else
            result[k--] = arr2[j--]
    }

    return result
}

function test() {
    [
        [undefined, undefined], // 1
        [undefined, []], // 2
        [[], undefined], // 3
        [[1], undefined], // 4
        [undefined, [2]], // 5
        [[1, 3], undefined], // 6
        [undefined, [2, 3]], // 7
        [[], []], // 8
        [[10], []], // 9
        [[], [10]], // 10
        [[10], [1]], // 11
        [[1], [10]], // 12
        [[1, 10], [5]], // 13
        [[5], [1, 10]], // 14
        [[], [5, 9]], // 15
        [[5, 9], []], // 16
        [[0, 2, 5, 8], [1, 12]], // 17
        [[1, 12], [0, 2, 5, 8]], // 18
        [[7], [1, 2, 3, 4, 5, 9, 11, 12]], // 19
        [[1, 2, 3, 4, 5, 9, 11, 12], [7]], // 20
        [[5, 6, 7], [1, 2, 3, 4]], // 21
        [[5, 6, 7], [1, 8]], // 22
        [[5, 6, 7], [1, 8, 9]], // 23
        [[1, 8], [5, 6, 7]], // 24
        [[1, 8, 9], [5, 6, 7]], // 25
    ].forEach(([a, b], n) => {
        console.log(`${n + 1}: `, mergeTwoArrays(a, b), mergeArrays2(a, b));
        console.log(`N ${n + 1}: `, mergeNArrays(a, b));
     });

     console.log('------------');
     console.log(`N: `, mergeNArrays([1], [5, 9, 10, 11], [5, 6, 7], [2, 8, 12], [0, 1, 2]))
}

if (process.env.NODE_ENV !== 'test')
    test();
