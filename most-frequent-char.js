/*
    Найти наиболее частый символ в строке и вернуть счётчик и сам символ.
*/

function findMostFrequentChar(str) {
    if (typeof str !== 'string' || !str.length)
  	    return []

  if (str.length === 1)
  	return [0, str[0]]
    
  let count = 0, char = '', map = new Map()
  for (const c of str) {  
  	let charCount
   	map.set(c, charCount = (map.get(c) || 0) + 1)
    if (charCount > count) {
    	count = charCount
      char = c
    }
    
  }
  
  return [count, char]
}

[
	undefined,
  '',
  '   \n',
  '1',
  'abc',
  'abbcff123ccccc7',
  'aa123ccczz',
].forEach((it) => console.log(it, ':---', findMostFrequentChar(it)))
