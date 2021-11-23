/*
    Дано N - число скобок. Нужно сгенерировать все комбинации правильных скобочных структур длины 2*N.
*/

const generateLevel = (n) => {
    
    const res = [];
    const track = (acc = [], left = 0, right = 0) => {
        if (acc.length >= 2 * n)
            res.push(acc.join(''));
        else {
            if (left < n) {
                acc.push('(');
                track(acc, left + 1, right) ;
                acc.pop();
            }

            if (right < left) {
                acc.push(')');
                track(acc, left, right + 1);
                acc.pop();
            }
        }
    }
    track();
    
    return res;
}

export const generateALlValidBrackets = n => {
    if (!n || typeof n !== 'number' || isNaN(n))
        return '';
    
    return generateLevel(n);
}

function test() {
    [
        undefined,
        1,
        2,
        3,
        4,
        /*5,
        6,
        7,*/
    ].forEach((n, i) => {
        console.log(`${i + 1}:`, n, ' --> ', generateALlValidBrackets(n));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
