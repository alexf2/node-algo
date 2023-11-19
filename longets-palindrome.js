/*
    Finding the longest palindromic substring in a string.
*/

function getPolindrome(str, start /*центр*/, end /*центр*/) {
    const {length} = str
    for (; start >= 0 && end < length && str[start] == str[end]; start--, end++);

    return str.substring(start + 1, end)
}

function getLogestPolindrome(str) {
    if (!str || str.length < 2)
        return str

    let result = ''
    for (let i = 0; i < str.length; ++i) {
        let polindrome = getPolindrome(str, i, i) // тест для нечётной длины
        if (result.length < polindrome.length)
            result = polindrome

        if (i < str.length - 1) {
            polindrome = getPolindrome(str, i, i + 1) // тест для чётной длины
            if (result.length < polindrome.length)
                result = polindrome
        }
    }

    return result
}

[
    '121',
    '1',
    '1223_123454321_211112',
    'abc',
    'казакabc',
    '1abc2cab3aabbcc',
    '',
    '12312332223344444',
    '123123322233444444444',
].forEach((str) => console.log(`${str}:  ${getLogestPolindrome(str)}`))
