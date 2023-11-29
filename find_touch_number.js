/* 
    Дана панель цифр кодового замка в виде матрицы. И дан вектор кода длинной N.
    Найти число движений при наборе кода.
*/
function createMatrix(nStr, mClm) {
    const result = []
    let next = 1

    for (let i = 0; i < nStr; ++i) {
        result[i] = []
        for (let j = 0; j < mClm; ++j)
            result[i][j] = next++
    }

    return result
}

const MATRIX = createMatrix(3, 4)
console.log(createMatrix(3, 4))

const findPathLen = (matrix, codeVector) => {
    const h = matrix.length, w = matrix[0].length
    let summ = 0, prevButton
    for (const digit of codeVector) {
        const y = digit / w >>> 0, x = digit % w - 1

        if (prevButton)
            summ += Math.abs(prevButton[0] - x) + Math.abs(prevButton[1] - y)

        prevButton = [x, y]
    }
    
    return summ
}

console.log(findPathLen(MATRIX, [2, 3, 7, 10]))
