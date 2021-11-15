export const palindromeWords = value => {
    if (typeof value !== 'string' || !value)
        return false;

    const len = value.length;
    for (let i = 0; i <= (len / 2 >>> 0); ++i) {
        if (value[i] !== value[len - i - 1])
            return false;
    }

    return true;
}

function test() {
    [
        undefined,
        '',
        'abc',
        1,
        '1',
        'казак',
        'xzzx',
        'xz1zx',
        'xz12zx',
        '3123',
    ].forEach((val, i) => {
        console.log(`${i + 1}:`, ` ${val}: `, palindromeWords(val));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
