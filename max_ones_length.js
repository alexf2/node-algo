/*
    Дан массив из нулей и единиц. Нужно определить, какой максимальный по длине подинтервал единиц можно получить, удалив ровно один элемент массива.
*/

function maxSequenceLen(str) {
	if (!str || str.length < 1)
  	    return 0
   
   let result = 0, currentLen = 0, countZeros = 0
   for (const c of str) {
   	    if (c === 1)
      	    currentLen++, countZeros = 0
        else if (++countZeros > 1) {
        	result = Math.max(result, currentLen)
            currentLen = 0
        }
   }

   return Math.max(result, currentLen)
}

[
    [],
	[1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
].forEach((item) => console.log(item, '---', maxSequenceLen(item)))

