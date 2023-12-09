/*
    Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

const VOWELS = new Set('aeiouAEIOU'.split(''))

var reverseVowels = function(s) {
    if (!s || s.length < 2)
        return s

    const result = new Array(s.length)
    for (let i = 0, j = s.length - 1; i <= j;) {
        const left = s[i], right = s[j]
        const leftVowel = VOWELS.has(left)
        const rightVowel = VOWELS.has(right)

        if (leftVowel && rightVowel)
            result[i++] = right, result[j--] = left
        else {
            result[i] = left, result[j] = right
            if (!leftVowel)
              ++i
            if (!rightVowel)
              --j
        }
    }

    return result.join('')
};

[
    'hello',
    'leetcode',
    'kozakova',
].forEach((item) => console.log(item, reverseVowels(item)))

