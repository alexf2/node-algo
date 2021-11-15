export const bubbleSorting = arr => {
    if (!Array.isArray(arr) || !arr.length)
        return arr;

    for (let i = 0; i < arr.length - 1; ++i) {

        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; ++j)
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }

        if (!swapped)
            break;
    }

    return arr;
}

function test() {
    [
        undefined,
        '',
        [],
        [1],
        [2, 1],
        [1, 2],
        [5, -1, 12, 111, 10.5, -6, 0, 1, 2, 9, -27],
        [2, 3, 1],
        [1, 2, 3],
        [4, 3, 2, 1],
        [2, 2, 3, 4],
        [4, 3, 0, 2, 1],
        [2, 2, 3, 4, 0],
        [0, 2, 2, 3, 4, 0],
        [1, 1],
        [1, 3, 1],
    ].forEach((val, i) => {
        console.log(`${i + 1}:`, bubbleSorting(val));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
