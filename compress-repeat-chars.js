
export const compressChart = str => {
    if (!str || str.length < 2)
        return str;

    const result = [];
    let prevChar;
    let count = 0;

    for (const c of str) {
        if (prevChar === c)
            ++count;
        else {
            result.push(count > 0 ? `${count + 1}${c}` : c);
            count = 0;
        }
        prevChar = c;
    }

    if (count > 0)
        result.push(`${count + 1}`);

    return result.join('');
}

function test() {
    [
        undefined,
        '', // 1
        'abc',// 2
        'a', // 3
        'aa', // 4
        'abb', // 5
        'abbb', // 6
        'abbbc', // 7
        'aaaac18xxxx', // 8
        'acvsssssbzzkl129zz', // 9
        'xxxxzxxxxx', // 10
        'bbcc', // 11
        'bbZcc', // 12
        'abccccc', // 13
        'a bbbcxxx1h6f1dd', // 14
    ].forEach((str, i) => console.log(`${i + 1}: ${str} --> ${compressChart(str)}`));
}

if (process.env.NODE_ENV !== 'test')
    test();
