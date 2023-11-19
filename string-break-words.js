/*
Given a string s and a dictionary of words dict, determine if s can be segmented into
a space-separated sequence of one or more dictionary words. For example, given s =
"leetcode", dict = ["leet", "code"]. Return true because "leetcode" can be segmented as
"leet code".
*/

function canBreak(str, wordsSet) {
    if (!str || !str.length)
        return false

    let exp = ''
    for (const word of wordsSet)
        exp += (exp.length ? '|' : '') + word
    exp = '^(' + exp + ')*$'

    console.log(exp)

    return new RegExp(exp).test(str)
    // return str.match(new RegExp(exp, 'g'))
}

[
    ['abccabxx11xxx', ['xx', '11x', 'abc', 'cab']],
    ['123abcc321', ['123', 'bcc', 'ab', 'cab']],
    ['123abcc321', ['123', 'bcc', 'ab', '321']],
    ['123abcc321', ['123', 'bcc', 'ab', 'abcc', '321']],
    ['abcxxxx', ['xx', 'abc', 'cab']],
].forEach(([str, words]) => console.log(`${str}:  ${canBreak(str, new Set(words))}`))
