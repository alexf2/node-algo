export const mergeOverlappedIntervals = intervals => {
    if (!intervals || !Array.isArray(intervals) || !intervals.length)
        return [];
    
    const result = [...intervals].sort((a, b) => a[0] - b[0]);
    const merged = [];
    let lastItem;

    for (const item of result) {
        if (lastItem && lastItem[1] >= item[0])
            lastItem[1] = Math.max(lastItem[1], item[1]);
        else
            merged.push(lastItem = item);
    }

    return merged;
}

function test() {
    [
        undefined,
        [],
        [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]],
        [[1, 5], [-2, 0], [10, 12]],
        [[2, 5], [3, 7], [0, 1]],
        [[2, 5], [3, 7], [3, 12]],
        [[5, 8], [4, 5], [7, 11], [9, 10], [11, 20]],
    ].forEach((interval, i) => {
        console.log(`${i + 1}:`, mergeOverlappedIntervals(interval));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
