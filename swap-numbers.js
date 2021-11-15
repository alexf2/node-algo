export const swapNumbers1 = (a, b) => {
    [b, a] = [a, b];
    return [a, b];
}

export const swapNumbers2 = (a, b) => {
    a ^= b;
    b ^= a;
    a ^= b;
    return [a, b];
}

function test() {
    [
        [1, 2]
    ].forEach(([a, b], i) => {
        console.log(`${i + 1}:`, swapNumbers1(a, b), ' / ', swapNumbers2(a, b));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
