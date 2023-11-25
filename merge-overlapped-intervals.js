/*
    Слияние отрезков: (дубликат)

    Вход: [1, 3] [100, 200] [2, 4]
    Выход: [1, 4] [100, 200]
 */
export const mergeOverlappedIntervals = intervals => {
    if (!intervals || !Array.isArray(intervals) || !intervals.length)
        return [];
    
    const result = [...intervals].sort((a, b) => a[0] - b[0]);
    const merged = [];
    let lastItem;

    for (const item of result) {
        if (lastItem && lastItem[1] >= item[0])
            lastItem[1] = Math.max(lastItem[1], item[1]);
        else
            merged.push(lastItem = item);
    }

    return merged;
}

function mergeIntervals2(arr) {
	if (!Array.isArray(arr))
  	throw new Error('Bad argument')
    
  if (arr.length < 2)
  	return arr
  
  const sourceArray = arr.slice().sort((a, b) => a[0] - b[0])
 
  const result = []
  let j = 0
  for (const item of sourceArray) {
  	const [start, end] = item
  	if (!result.length) {
    	result[0] = [start, end]
      continue;
    }
    
    if (result[j][1] >= start) {
    	result[j][1] = Math.max(result[j][1], end)
    } else {
    	result[++j] = [start, end]
    }
  }
  
  return result
}

function mergeIntervals3(arr) {
	if (!Array.isArray(arr) || arr.length < 2)
  	return arr
    
  arr.sort((a, b) => a[0] - b[0])
    
  let prev
  let toRemove = new Set(), i = 0
  for (const current of arr) {
  	if (prev && prev[1] >= current[0]) {
    	prev[1] = Math.max(prev[1], current[1])
      toRemove.add(i)
    } else
     	prev = current
    ++i
  }
  
  return arr.filter((item, i) => !toRemove.has(i))
}


function test() {
    [
        [],
        [[0, 2], [1, 2], [3, 3]],
        [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]],
        [[1, 5], [-2, 0], [10, 12]],
        [[2, 5], [3, 7], [0, 1]],
        [[2, 5], [3, 7], [3, 12]],
        [[5, 8], [4, 5], [7, 11], [9, 10], [11, 20]],
    ].forEach((interval, i) => {
        console.log(`${i + 1}:`, mergeOverlappedIntervals(interval));
        console.log(mergeIntervals2(interval))
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
