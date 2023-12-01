/*
    Заполнение квадратной матрицы змейкой.
*/
const printMatrix = (m, pad = 4) => {
	let res = '\n'
	for (let row = 0; row < m.length; ++row)
  	    res += m[row].reduce((p, c) => `${p}  ${String(c).padStart(pad)}`, '') + '\n'
    
    return res
}

function fillmatrix(size) {
    if (size < 2)
  	    return []
	const m = Array(size).fill().map(() => Array(size))
  
    let row = 0, col = 0, next = 1, dir = 'r'
    let top = 0, left = 0, right = size - 1, bottom = size - 1
    while (top <= bottom && left <= right) {
        switch (dir) {
            // right moving
            case 'r': {
                while (col <= right)
                    m[row][col++] = next++
                
                dir = 'd'
                col = right
                row++, top++
                break;
            }
            
            // down moving
            case 'd': {
                while (row <= bottom)
                    m[row++][col] = next++
                
                dir = 'l'
                row = bottom
                col--, right--        
                break;
            }
            
            // left moving
            case 'l': {
                while (col >= left)
                    m[row][col--] = next++
                
                dir = 'u'
                col = left
                row--, bottom--
                break;
            }
            
            // upper moving
            case 'u': {
                while (row >= top)
                    m[row--][col] = next++
                
                dir = 'r'
                row = top
                col++, left++
                break;
            }      	
        }
    }
    
    return m
}

console.log(printMatrix(fillmatrix(3)))
