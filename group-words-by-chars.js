/*
    Sample Input ["eat", "tea", "tan", "ate", "nat", "bat"]
    Sample Output [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]

    Т.е. сгруппировать слова по "общим буквам".
 */
export const groupWordsByChars = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return [];

    const res = new Map();
    for (const item of arr) {
        const key = Array.from(item).sort().join('');
        const data = res.get(key) || [];

        data.push(item);
        res.set(key, data);
    }

    return Array.from(res.values());
}

function test() {
    [
        undefined,
        [],
        ["eat", "tea", "tan", "ate", "nat", "bat"],
        ['xxx', 'yyy', 'x2eexx', 'eex2xx'],
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, groupWordsByChars(arr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
