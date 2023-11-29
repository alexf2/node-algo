/*
    Дан массив целых чисел длиной N, надо найти K элементов между которыми минимальная разность.
*/

const findMinimalDifference = (arr, k) => {
	if (!Array.isArray(arr) || arr.length < k)
  	    return {minDiff: undefined, minDiffIndex: undefined}

	// мутируем исходный массив
	arr.sort((a, b) => a - b)
    let minDiff, minDiffIndex

    for (let i = 0, j = k - 1; j < arr.length; i++, j++) {
  	    const diff = arr[j] - arr[i]

        if (minDiff === undefined || diff < minDiff)
    	    minDiff = diff, minDiffIndex = i
    }
  
    return {minDiff, minDiffIndex}
}

[
	[[1, 5, 12, 18, 22, 100, 200, 300, 301, 307, 318, 390, 400, 401], 3]
].forEach(([arr, k]) => {
	const minDiffData = findMinimalDifference(arr, k)
	console.log(arr, k, ':------', minDiffData, ': ', arr.slice(minDiffData.minDiffIndex, minDiffData.minDiffIndex + k))
})
