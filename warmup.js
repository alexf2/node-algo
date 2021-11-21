/*
    Вернуть число символов S, которые встречаются в J.
*/
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

/*import * as fs from 'fs';
import * as os from 'os';
import * as readline from 'readline';

//const fs = require('fs');
//const os = require('os');
//const readline = require('readline');

async function processFile(p, transformInput, transformResult, agg) {
    const inputStr = fs.createReadStream('./input.txt', {encoding: 'utf8'});
    const outStr = fs.createWriteStream('./output.txt', {encoding: "utf8"});

    const rl = readline.createInterface({
        input: inputStr,
        crlfDelay: Infinity,
        console: false,
        terminal: false,
        historySize: 0,
    });

    if (agg) {
        const data = [];
        for await (const line of rl) {
            data.push(line);
        }

        const res = p(...transformInput(data));
        outStr.write(`${transformResult(res)}${os.EOL}`);
    } else {
        for await (const line of rl) {
            const res = p(...transformInput(line));
            rl.pause();
            outStr.write(`${transformResult(res)}${os.EOL}`, () => rl.resume());
        }
    }

    rl.close();
    outStr.end(() => outStr.close());
}

await processFile(wrapup, line => line?.split(' '), result => result, false);
*/
