/*
    Реализовать парсинг целых чисел. На вход могут приходить числа со знаком и с примесью нечисловых знаков. Нечисловые хвосты надо отсекать, а префиксы обрабатывать правильно.
    Возвращать ошибку, а пробелы пропускать. Знак должен быть указан слитно с числом.
*/

const MINUS_CODE = '-'.charCodeAt(0);
const PLUS_CODE = '+'.charCodeAt(0);
const ZERO_CODE = '0'.charCodeAt(0);
const NINE_CODE = '9'.charCodeAt(0);

export const atoi = str => {
    if (!str || typeof str !== 'string' || !str.length)
        return NaN;
    
    let sign = 1;
    let hasSign = false;
    let result = new ArrayBuffer(str.length);
    let view = new Uint8Array(result);
    let count = 0;
    let inNumber = false;

    for (let i = 0; i < str.length; ++i) {
        const code = str.charCodeAt(i);
        if (code >= ZERO_CODE && code <= NINE_CODE) {
            inNumber = true;
            view[count++] = code - ZERO_CODE;
        } else if (code === MINUS_CODE) {
            if (hasSign)
                return 0;
            if (inNumber)
                throw Error('Illegal position of minus');
            sign = -1;
            hasSign = true;
        } else if (code === PLUS_CODE) {
            if (hasSign)
                return 0;
            if (inNumber)
                throw Error('Illegal position of minus');
            hasSign = true;
        } else if (inNumber)
            break;
    }

    return sign * view.slice(0, count).reduce((p, c, i) => p * 10 + c, 0);
}

function atoi2(str) {
    if (typeof str !== 'string' || !str?.length)
        return NaN;

    let result = 0, sign = 1, started = false
    for (let i = 0; i < str.length; ++i) {
        const c = str.charCodeAt(i)
        if (!started) {
            if (c === MINUS_CODE) {
                sign = -1
                continue
            }
        }
        if (c >= ZERO_CODE && c <= NINE_CODE) {
            started = true
            result = result * 10 + c - ZERO_CODE
        }
        else if(started)
            break
    }

    return result * sign
}

function test() {
    [
        undefined,
        '',
        '123',
        '0',
        '-1',
        '+1',
        '1',
        '  1',
        '   1 www',
        '-1',
        ' 121a',
        '876787',
        '  -87654',
    ].forEach((str, i) => {
        const val = atoi(str);
        const val2 = atoi2(str);
        const valTrue = parseInt(str)

        console.log(`${i + 1}:`, val, val2, ' / ', valTrue === val || isNaN(valTrue) && isNaN(val));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
