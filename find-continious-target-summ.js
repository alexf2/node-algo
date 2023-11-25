/*
    Дан список интов и число-цель. Нужно найти такой range, чтобы сумма его элементов давала число-цель.

    elements = [1, -3, 4, 5]
    target = 9
    result = range(2, 4) # because elements[2] + elements[3] == target
*/

const calcWindow = (arr, width) => {
	let result = 0
  for (let i = 0; i < width; ++i)
  	result += arr[i]
    
   return result
}

function findTargetSummInterval(arr, targetSumm) {
	if (!arr || arr.length < 1)
  	    return []
    
    const idx = arr.findIndex((item) => item === targetSumm)
    if (idx !== -1) 
  	    return [idx, idx]
    
    for (let i = 2; i <= arr.length; ++i) {
        let windowSumm = calcWindow(arr, i)

        for (let j = 0; j <= arr.length - i; ++j) {    	        
            if (j > 0)
                windowSumm = windowSumm - arr[j - 1] + arr[i + j - 1]
            if (windowSumm === targetSumm) 
                return [j, j + i - 1]
        }
    }
    
    return []
}

[
    [[], 2],
    [[1], 2],
    [[2], 2],
    [[1, 1], 2],
	[[1, -3, 4, 5], 9],
    [[2, 4, -1, 7, 2, 1, 8, 12, 1, 0, -1, 5, 4], 10],
].forEach(([arr, target]) => console.log(arr, ' --- ', target, ': ', findTargetSummInterval(arr, target)))

