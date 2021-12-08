/*
    Проверить простое ли число n.
 */
export const isPrimeNumber = n => {
    if (isNaN(n) || typeof n !== 'number' || n < 2)
        return false;

    if (n === 2)
        return true;

    for (let i = 2; i < n - 1; ++i)
        if (!(n % i))
            return false;

    return true;
}

export const isPrimeNumber2 = n => {
    if (isNaN(n) || typeof n !== 'number' || n < 2)
        return false;

    if (n === 2 || n === 3)
        return true;

    if (n === 4)
        return false;

    if (n % 2 === 0)
        return false;

    let i = 3;
    for (; n % i !== 0; i += 2);

    return n === i;
}

export const isPrimeNumber3 = n => {
    if (isNaN(n) || typeof n !== 'number' || n < 2)
        return false;

    if (n === 2)
        return true;

    if (n % 2 === 0)
        return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2)
        if (!(n % i))
            return false;

    return true;
}

function test() {
    [
        undefined,
        '',
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        97,
        99,
        100,
    ].forEach((n, i) => {
        const v1 = isPrimeNumber(n);
        const v2 = isPrimeNumber2(n);
        const v3 = isPrimeNumber3(n);

        console.log(`${i + 1}:`, ` ${n} --> `, v1, ' / ', `${v2}`, ` / ${v3}`, v1 !== v2 || v1 !== v3 ? '!' : '');
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
