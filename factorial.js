function fac(n) {
    if (typeof n !== 'number')
  	    throw new Error('Bad argument')
    
    if (n < 0)
        return 0
    if (n === 0 || n === 1 || n === 2)
        return n
        
    let result = 1
    while (n)
        result *= n--
        
    return result
}
