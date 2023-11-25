// Check whether second string can be formed from characters of first string

function canMakeSecondAgainsFirst(str1, str2) {
    const map1 = new Map()
    for (const c of str1)
  	    map1.set(c, (map1.get(c) || 0) + 1)
    
    for (const c of str2) {
  	    if (!map1.has(c) || map1.get(c) < 1)
    	    return false
      
        map1.set(c, map1.get(c) - 1)
  }

  return true
}


[
    ['geekforgeeks', 'geeks'], //t
    ['geekforgeeks', 'and'], //f
    ['geekforgeeks', 'geeeek'], //t
].forEach(([str1, str2]) => console.log(str1, str2, canMakeSecondAgainsFirst(str1, str2)))

