/*
    Given two 2-D arrays which represent intervals. Each 2-D array represents a list of intervals. Each list of intervals is disjoint and sorted in increasing order. Find the intersection or set of ranges that are common to both the lists.

    Как вариант этой задачи: найти интервалы времени, когда два пользователя работали одновременно.
 */
function findIntersectBrute(arr1, arr2) {
	if (!arr1.length || !arr2.length)
  	    return []
    
  const result = []
  for (const a of arr1) 
  	for (const b of arr2)
    	if (a[0] >= b[0] && a[0] <= b[1] || a[1] >= b[0] && a[1] <= b[1])
      	result.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])])
 
  return result
}

function findIntersect(arr1, arr2) {
	const l1 = arr1.length, l2 = arr2.length
	if (!l1 || !l2)
  	    return []
  
  
  const result = []
  let i = 0, j = 0
  while (i < l1 && j < l2) {
  	const left = Math.max(arr1[i][0], arr2[j][0])
    const right = Math.min(arr1[i][1], arr2[j][1])
    if (left <= right)
    	result.push([left, right])
      
    if (arr1[i][1] < arr2[j][1])
    	i++
    else 
    	j++
  }
 
  return result
}


[
    [ [[0, 4], [5, 10], [13, 20], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]] ], //{{1, 4}, {5, 5}, {8, 10}, {15, 20}, {24, 24}, {25, 25}}
    [ [[0, 2], [5, 10], [12, 22], [24, 25]], [[1, 4], [9, 12], [15, 24], [25, 26]] ], // {{1, 2}, {9, 10}, {12, 12}, {15, 22}, {24, 24}, {25, 25}} 
    [ [[1, 2], [8, 10], [14, 18], [20, 22], [23, 24]], [[9, 15], [18, 19], [21, 22]] ],
].forEach(([arr1, arr2]) => console.log(findIntersectBrute(arr1, arr2)))
