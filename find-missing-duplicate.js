/*
    Дан массив чисел, повторяющихся по два раза, но одно из них не повторяется. Надо найти какое.
*/

function findMissing(x) {
	if (!x || x.length < 2)
  	return undefined
    
  let result = 0
  for (const val of x)
  	result ^= val
    
  return result
}

[
	[5, 2, 5, 2, 1, 10, 11, 10, 11],
  [1, 2, 2, 1, 5, 4, 6, 6, 4],
].forEach((item) => console.log(item, ': ', findMissing(item)))

