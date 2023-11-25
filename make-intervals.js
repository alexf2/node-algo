/*
    Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
        [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
        [1,4,3,2] => "1-4"
        [1,4] => "1,4"
*/
export const makeIntervals = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return [];
    if (arr.length === 1)
        return [...arr];

    const tmp = [...arr].sort((a, b) => a - b);
    const result = [];
    let left, right;

    const formatInterval = () => left === right ? String(left) : `${left}-${right}`;

    for (const item of tmp) {
        if (left === undefined)
            left = right = item;
        else if (item - right === 1)
            right = item;
        else {
            result.push(formatInterval());
            left = right = item;
        }
    }

    result.push(formatInterval());

    return result.join(', ');
}

function makeIntervals2(data) {
	if (data?.length < 2 || !Array.isArray(data))
  	return data

	data.sort((a, b) => a - b)

  const result = [], {length} = data
  let startIndex = 0
 
  for (let i = 1; i <= length; ++i) {
  	const end = i === length,
        currentValue = end ? undefined : data[i],
        prevValue = data[i - 1]
    
    if (!end && currentValue - prevValue < 2) {
    	continue
     } else {
     	result.push(i - startIndex === 1 ? String(prevValue) : `${data[startIndex]}-${prevValue}`)
      startIndex = i
     }
  }

	return result
}


function test() {
    [
        [],
        [2],
        [2, 5, 7],
        [2, 5, 7, 1],
        [1, 4, 5, 2, 3, 9, 8, 11, 0], // 0-5,8-9,11
        [1, 4, 3, 2], // 1-4
        [1, 4], //1, 4
        [5, 8, 6, 7, 11, 10, 13], // 5-8, 10-11, 13
        [1, 2, 4, 7], // 1-2, 4, 7
        
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, arr, ' --> ', makeIntervals(arr), '-->', makeIntervals2(JSON.parse(JSON.stringify(arr))));
    });
}

if (process.env.NODE_ENV !== 'test')
    test(); 
