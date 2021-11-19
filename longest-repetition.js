// подстрока str должна быть в dataStr в нужном порядке, но не обязательно слитно
export const logestRep = str => {
    if (typeof str !== 'string' || !str)
        return 0;

    let prev, count = 0, countMax = 0;
    for (const c of str) {
        if (c === prev)
            count++;
        else {
            if (count > 1)
                countMax = Math.max(countMax, count);
            count = 1;
        }
        prev = c;
    }

    return Math.max(countMax, count > 1 ? count : 0);
}

function test() {
    [
        undefined,
        '',
        '12345678',
        'd',
        'd11d', //2
        'aabbcxyz1111hbgfr', //4
        'ght1111ku785zzhgytr6666666', // 7
        '1111', //4
        '2223344444110', // 5
    ].forEach((str, i) => {

        console.log(`${i + 1}:`, logestRep(str));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();


/*
// const readline = require('readline');
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

const lines = [];
rl.on('line', line => lines.push(line));
rl.on('close', () => console.log(logestRep(lines)));

const logestRep = str => {
    if (!str || !str.length)
        return 0;

    let count = 0, maxCount = 0;
    for (const c of str) {
        if (c === '1') {
            count++;
            maxCount = Math.max(count, maxCount);
        }
        else {
            count = 0;
        }
    }

    return maxCount === 0 ? '' : String(maxCount);
}
*/
