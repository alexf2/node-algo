/*
    Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

    Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])


const maxVowels = function(s, k) {
    if (!s?.length)
        return 0
    if (s.length <= k)
        return Array.from(s).reduce((acc, curr) => acc + (VOWELS.has(curr) ? 1 : 0), 0)
    
    let count = 0
    for (let i = 0; i < k; ++i)
        if (VOWELS.has(s[i]))
            count++

    let maxCount = count

    for (let i = 1; i <= s.length - k; ++i) {
        if (VOWELS.has(s[i - 1]))
            count--
        if (VOWELS.has(s[i + k - 1]))
            count++

        maxCount = Math.max(maxCount, count)
    }

    return maxCount
};

[
    ["weallloveyou", 7],
    ['ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33],
].forEach(([str, k]) => console.log('\n', str, k, maxVowels(str, k)))
