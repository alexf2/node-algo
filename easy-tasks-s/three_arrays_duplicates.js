class Pointer {
	constructor(array) {
  	this.pointer = 0
    this.len = array.length
    this.array = array
  }
  
  get item() {
  	return this.array[this.pointer]
  }
  
  get index() {
  	return this.pointer
  }
  
  next() {
  	if (this.pointer < this.len) {
    	this.pointer++
    }
  }
  
  get alive() {
  	return this.pointer < this.len
  }
}

function findCommonItems(arr) {
	if (!Array.isArray(arr) || arr.length < 2)
  	    return []

	const pointers = arr.map((arr) => new Pointer(arr))
  
    const result = []
    let activePointer = pointers[0]
    while (true) {
        let allEquals = true, isMin = true
        
        for (const p of pointers) {
            if (p === activePointer || !p.alive)
                continue
            
            if (p.item !== activePointer.item)
                allEquals = false
            
            if (activePointer.item > p.item)
                p.next(), isMin = false      	
        }
                
        if (allEquals && pointers.every((p) => p.alive))
            result.push({i: activePointer.index, value: activePointer.item})
        
        if (isMin || allEquals) {
            activePointer.next()

        if (!activePointer.alive) {
            // activePointer = pointers.find((p) => p.alive)
            // if (!activePointer)
            break // все массивы должны быть активны
        }
        }
    }

	return result
}


[
  [[1,2,3,4,8,10,15], [3,8,16], [2,3,4,5,8,16,18]], // 3, 8, 
  [[3,8,16], [1,2,3,4,8,10,15], [2,3,4,5,8,16,18]],
].forEach((item) => console.log(item, ':---', findCommonItems(item)))
