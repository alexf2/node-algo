/*
RLE - компрессия

Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
И сгенерирует ошибку, если на вход пришла невалидная строка.
Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.
*/
export const compressChart = str => {
    if (!str || str.length < 2)
        return str;

    const result = [];
    let prevChar;
    let count = 0;

    for (const c of str) {
        if (prevChar === c)
            ++count;
        else {
            result.push(count > 0 ? `${count}${c}` : c);
            count = 0;
        }
        prevChar = c;
    }

    if (count > 0)
        result.push(`${count}`);

    return result.join('');
}

function compressChart2 (str) {
	if (!str || typeof str !== 'string' || str.length < 2) 
  	    return str

	let count = 0, prevChar, result = []
    function addPart(ch) {
        result.push(count === 0 ? ch : `${ch}${count}`)
    }

    for (const c of str) {
  	    if (c === prevChar)
    	    count++
        else {    
            addPart(prevChar)
    
            count = 0
            prevChar = c
        }
  }
  
  addPart(prevChar)
  
  return result.join('')
}



function test() {
    [
        undefined,
        '', // 1
        'abc',// 2
        'a', // 3
        'aa', // 4
        'abb', // 5
        'abbb', // 6
        'abbbc', // 7
        'aaaac18xxxx', // 8
        'acvsssssbzzkl129zz', // 9
        'xxxxzxxxxx', // 10
        'bbcc', // 11
        'bbZcc', // 12
        'abccccc', // 13
        'a bbbcxxx1h6f1dd', // 14
    ].forEach((str, i) => console.log(`${i + 1}: ${str} --> ${compressChart(str)}, ${compressChart2(str)}`));
}

if (process.env.NODE_ENV !== 'test')
    test();
