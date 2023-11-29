/*
    Надо найти в массиве максимальное число и число, второе по величине после максимального
*/
function getTwoMaximum(arr) {
    if (!Array.isArray(arr))
  	    return arr
    if (arr.length === 1)
  	    return [arr[0], arr[0]]
    
    let m1, m2
    for (const item of arr) {
        if (m1 === undefined)
            m1 = item
        else {
            if (item > m1)
            [m1, m2] = [item, m1]
        else if (m2 === undefined || item > m2)
            m2 = item
        }
    }

    return [m1, m2]
}

[
    [1, 2],
    [1,5,2,4,7,6,0],
    [1],
    [],    
    [2,1],
    [3,2,1],
].forEach((item) => console.log(item, ':---', getTwoMaximum(item)))
