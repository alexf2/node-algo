/*
    Sample Input ["eat", "tea", "tan", "ate", "nat", "bat"]
    Sample Output [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]

    Т.е. сгруппировать слова по "общим буквам".
*/

const orderString = (w) => Array.from(w).sort((a, b) => a.localeCompare(b)).toString()

function group(words) {
    const map = new Map()

    for (const word of words) {
        const key = orderString(word)

        let group
        map.has(key) ? group = map.get(key) : map.set(key, group = [])

        group.push(word)
    }

    const result = Array.from(map.values())
    result.forEach((arr) => arr.sort((a, b) => a.localeCompare(b)))

    return result
}

[
	["eat", "tea", "tan", "ate", "nat", "bat"]
].forEach((item) => console.log(item, ': ', group(item)))
