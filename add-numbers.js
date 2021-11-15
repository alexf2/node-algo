String.prototype.reverse_string = function() {return this.split("").reverse().join("");}

const getDigint = (arr, index) => {
    const d = parseInt(index >= arr.length ? 0 : arr[index]);
    if (isNaN(d))
        throw new Error(`Operand has not a number: '${arr[index]}''`);
    return d;
}

export const addNumbers = (a, b) =>
{
    if (isNaN(a) || isNaN(a) || a === undefined || b === undefined)
        return NaN;

    const v1 = a.toString().reverse_string(), v2 = b.toString().reverse_string();
    const size = Math.max(v1.length, v2.length);
    const result = [];
    let rem = 0;

    for (let i = 0; i < size; ++i) {
        const d1 = getDigint(v1, i);
        const d2 = getDigint(v2, i);
        const value = d1 + d2 + rem;
        rem = value > 9 ? 1 : 0;

        if (value > 9) {
            result.push(value - 10);
            rem = 1;
        } else {
            result.push(value);
            rem = 0;
        }
    }

    if (rem)
        result.push(rem);

    return parseInt(result.reverse().join(''));
}

function test() {
    [
        [],
        [1, undefined],
        [undefined, 1],
        [123, 1],
        [0, 123],
        [123, 0],
        [1, 9],
        [2, 71],
        [71, 2],
        [9237, 98],
        [8625912, 99],
        [99, 8625912],
        [100001, 12688],
        [12688, 100001],
        [11, 22],
        [17, 19],
        [19, 1997],
        [1988779909, 521117007],
    ].forEach(([a, b], i) => console.log(`${i + 1}: ${a} + ${b} --> ${addNumbers(a, b)} : ${a + b} / ${addNumbers(a, b) === (a + b)}`));
}

if (process.env.NODE_ENV !== 'test')
    test();
