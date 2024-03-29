/*
    Реализовать двоичный поиск числа в отсортированном по возрастанию массиве чисел.
 */
export const binarySearch = (arr, value) => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return -1;

    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const i = left + (right - left) / 2 >>> 0;
        const currValue = arr[i];

        if (currValue === value)
            return i;

        if (value < currValue)
            right = i - 1;
        else
            left = i + 1;
    }

    return -1;
}

function biSearch(sortedArr, a) {
    if (!Array.isArray(sortedArr) || sortedArr.length < 1)
  	    return -1
    
    const {length} = sortedArr
    
    if (length === 1)
  	    return sortedArr[0] === a ? 0 : -1
    
    let left = 0, right = length - 1
    while (left <= right) {
        const i = (right + left) / 2 >>> 0
        
        const currValue = sortedArr[i]
        if (currValue === a)
            return i
        
        if (a < currValue) 
            right = i - 1
        else 
            left = i + 1
        
    } 
    
    return -1
}



function test() {
    [
        [], // -1 //1
        [undefined], //-1 //2
        [[], 1], //-1 //3
        [[-1, 0, 3, 5, 9, 12], 9], //4 //4
        [[-1, 0, 3, 5, 9, 12], 2], //-1 //5
        [[1], 1],//0 //6
        [[1, 2, 3], 3], //2 //7
        [[1, 2, 3], 2], //1 //8
        [[1, 2, 3], 1], //0 //9
        [[-1, 1, 2, 3], 1], //1 //10
        [[-1, 1, 2, 3], -3], //-1 //11
        [[-1, 1, 2, 3], 2], //2 //12
        [[-1, 1, 2, 3], 3], //3 //13
        [[-1, 1, 2, 3], -1], //0 //14
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 11], //3 //15
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 19], //6 //16
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 21], //8 //17
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 5], //1 //18
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], -1], //0 //19
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 2], //-1 //20
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], -2], //-1 //21
        [[-1, 5, 10, 11, 12, 15, 19, 20, 21], 0], //-1 //22
    ].forEach(([arr, val], i) => {
        console.log(`${i + 1}:`, binarySearch(arr, val));
        console.log(`${i + 1}:`, biSearch(arr, val));
        console.log()
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
