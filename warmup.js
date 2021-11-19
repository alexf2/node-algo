// подстрока str должна быть в dataStr в нужном порядке, но не обязательно слитно
export const warpup = (s, j) => {
    if (typeof s !== 'string' || !s || typeof j !== 'string' || !j)
        return 0;

    const chars = new Set(j.split(''));
    return s.split('').reduce((acc, curr) => chars.has(curr) ? acc + 1 : acc, 0);
}

function test() {
    [
        [],
        ['', 'ab'],
        ['ab', ''],
        ['abc', 'xyz'], // 0
        ['abc', 'xyazc'], // 2
        ['xyazc', 'abc'], // 2
    ].forEach(([strToSearch, dataStr], i) => {
        console.log(`${i + 1}:`, warpup(strToSearch, dataStr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test(); 


/*const readline = require('readline');
// import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', line => {
    lines.unshift(line);
});
rl.on('close', () => console.log(countIntersection(lines)));

const countIntersection = ([s, j]) => {
    if (typeof s !== 'string' || !s || typeof j !== 'string' || !j)
        return 0;

    const chars = new Set(j.split(''));
    return s.split('').reduce((acc, curr) => chars.has(curr) ? acc + 1 : acc, 0);
}
*/