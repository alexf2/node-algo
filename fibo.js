// 0, 1, 1, 2, 3, 5, 8, 13

export const ERR_MSG = 'Число значений должно быть неотрицательным';

export const getFiboRegular = nFirst => {
    if (isNaN(nFirst) || nFirst < 0) {
        throw Error(ERR_MSG);
    }

    if (nFirst === 0) {
        return [];
    }
  
    const result = [0];
    if (nFirst === 1) {
        return result;
    }

	let prev = 0, current = 1;
    for (let i = 1; i < nFirst; ++i) {
        result.push(current);
        [current, prev] = [prev + current, current];
    }
  
    return result;
}

export function getFiboRecursive(nFirst) {
    if (isNaN(nFirst) || nFirst < 0) {
  	    throw Error(ERR_MSG);
    }
  
  const res = [];
  function recFiboInternal(count, prev = 0, current = 1) {
        if (count > 0) {
            res.push(prev);
            recFiboInternal(count - 1, current, prev + current);
        }
    }

  recFiboInternal(nFirst);
  
  return res;
}

export function *getFiboGeneratorRecursive(count, prev = 0, current = 1) {
	if (isNaN(count) || count < 0) {
  	throw Error(ERR_MSG);
  }

	if (count > 0) {
        yield prev;
        yield *getFiboGeneratorRecursive(count - 1, current, prev + current);
  } else {
  	    return prev;
  }
}

export function *getFiboGenerator(count = 0) {
    let current = 0, next = 1

    while (count-- > 0) {
        yield current;
        [current, next] = [next, current + next];
    }
}

function test() {
    try {getFiboRecursive();} catch(e) {console.log(e.message)}
    try {getFiboRegular();} catch(e) {console.log(e.message)}
    try {[...getFiboGeneratorRecursive()];} catch(e) {console.log(e.message)}


    const genToArray = gen => {
        let val = gen.next();
        const res = [];

        while (!val.done) {
        res.push(val.value);
        val = gen.next();
    }

        if (val && val.value !== undefined) {
            res.push(val.value);
        }
        
        return res;
    }


    [0,1,2,3,4,5,6,7,8,9,10].forEach(n => {
        console.log(n);
        console.log(getFiboRecursive(n));
        console.log(getFiboRegular(n));
        console.log([...getFiboGeneratorRecursive(n)]);
        console.log();
        console.log([...getFiboGenerator(n)]);
        console.log();
    });
}

if (process.env.NODE_ENV !== 'test')
    test();