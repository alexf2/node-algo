/*
    Заполнение матрицы слева направо, справо налево и змейкой.
*/
const printMatrix = (m, pad = 4) => {
	let res = '\n'
	for (let row = 0; row < m.length; ++row)
  	    res += m[row].reduce((p, c) => `${p}  ${String(c).padStart(pad)}`, '') + '\n'
    
  return res
}

// dir
function fillmatrixMath(size, getCellValue) {
	if (size < 1)
  	    return []
	const m = Array(size).fill().map(() => Array(size).fill(0))
 
 	for (let row = 0; row < size; ++row)
  	    for (let col = 0; col < size; ++col)
    	    m[row][col] = getCellValue(size, row, col)
    
    return m
}

const regularValue = (size, row, col) => row * size + col + 1
const regularRevValue = (size, row, col) => row * size + size - col
const regularBFValue = (size, row, col) => row % 2 === 0 ? regularValue(size, row, col) : regularRevValue(size, row, col)

console.log(printMatrix(fillmatrixMath(5, regularBFValue)))
