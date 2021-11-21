/*
    Проверить, является ли число палиндромом.
*/
export const palindromeNumber = value => {
    if (typeof value !== 'number' || value < 0 || value % 10 === 0 && !!value)
        return false;

    let rev = 0;
    while (value > rev) {
        rev = rev * 10 + value % 10;
        value /= 10;
        value >>>= 0;
    }

    return rev === value || value === (rev / 10 >>> 0);
    
}

function test() {
    [
        undefined,
        '',
        'abc',
        0,
        1,
        121,
        10,
        15,
        12321,
        999,
        15051,
        101,
    ].forEach((val, i) => {
        console.log(`${i + 1}:`, ` ${val}: `, palindromeNumber(val));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
