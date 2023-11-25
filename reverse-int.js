function reverseInt(num) {
	if (typeof num !== 'number' || Math.abs(num) < 10)
  	return num
    
    
  let result = 0
  const sign = num < 0 ? -1 : 1
  num = Math.abs(num)
  while (num > 0) {
  	const rem = num % 10
    result = result * 10 + rem
    num = num / 10 >>> 0
  }
 
  return result * sign
}

[
  -12,
  123,
  8754,
  1,
  21,
  516,
  88289,
].forEach((item) => console.log(item, reverseInt(item)))
