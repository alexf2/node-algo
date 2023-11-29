/*
    Найти подстроку в строке.
*/
function strStr(str, substr) {
    if (typeof str !== 'string' || typeof substr !== 'string')
  	    return -1
    
    if (str.length < substr.length)
  	    return -1
    
    if (str === substr)
  	    return 0
    
    if (str.length === substr.length)
  	    return -1
    
    for (let i = 0; i <= str.length - substr.length; ++i) {
        let lastResult = true
        for (let j = 0; lastResult && j < substr.length; ++j) {
            lastResult = (str[i + j] === substr[j])
        }

        if (lastResult)
            return i
    }
 
    return -1
}

[
  ['', ''],
  ['abc', 'cabd'],
  ['abc', 'bc'],
  ['Ref forwarding is a technique', 'forward'],
  ['Ref forwarding is a technique', 'Ref'],
  ['Ref forwarding is a technique', 'is'],
  ['Ref forwarding is a technique', 'isa'],
  ['Ref forwarding is a technique', 'que'],
].forEach((item) => console.log(item, ':---', strStr(item[0], item[1])))
