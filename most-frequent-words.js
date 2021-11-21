/*
    Вернуть K наиболее частых слов.
*/

export const mostFrequentWords = (str, k) => {
    if (!str || typeof str !== 'string' || !str.trim())
        return [];
    if (!k || isNaN(k))
        return [];

    const words = new Map();
    for (const w of str.split(' ')) 
        words.set(w, (words.get(w) || 0) + 1);
    
    const freqs = Array.from(words.entries()).sort(([key1, value1], [key2, value2]) => value2 - value1);

    return freqs.slice(0, k).map(([key]) => key);
}

function test() {
    [
        [],
        [''],
        ['', 1],
        ['   ', 1],
        ['i love leetcode i love coding'],
        ['i love leetcode i love coding', 1],
        ['i love leetcode i love coding', 2],
        ['the day is sunny the the the sunny is is', 4]
    ].forEach(([str, num], i) => {
        console.log(`${i + 1}:`, mostFrequentWords(str, num));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
