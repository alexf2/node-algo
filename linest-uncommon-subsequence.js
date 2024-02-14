/*
    Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1.

    An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others.

    A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

    For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).
*/

const isSubsequence = (main, sub) => {
    let j = 0
    for (let i = 0; i < main.length && j < sub.length; ++i)
        if (main[i] === sub[j])
            j++

    return j === sub.length
}

const findLUSlength = function(strs) {
    if (strs?.length < 2)  
        return -1

    let maxLen = -1
    const n = strs.length
    for (let i = 0; i < n; ++i) {
        let j = 0
        for (; j < n; ++j) {
            if (i !== j && isSubsequence(strs[j], strs[i]))
                break
        }

        if (j == n)
            maxLen = Math.max(maxLen, strs[i].length)
    }

    return maxLen
};
