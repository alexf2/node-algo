import * as fs from 'fs';
import * as os from 'os';
import * as readline from 'readline';

const getTemp = (startTemp, endTemp, mode) => {
	switch (mode) {
    	case 'heat':
        	return Math.max(startTemp, endTemp);
        case 'freeze':
        	return Math.min(startTemp, endTemp);
        case 'auto':
        	return endTemp;
        case 'fan':
        	return startTemp;
        default:
        	return 0;
    }
}

console.log('START')

function processFile2(callback, inputTranformer, resulttransformer) {
    const input = fs.createReadStream('./input.txt', {encoding: 'utf8'});
    const output = fs.createWriteStream('./output.txt', {encoding: "utf8"});
    const rl = readline.createInterface({input, terminal: false, console: false, historySize: 0});

    console.log('IN')

    const lines = []

    rl.on('line', (line) => {
        lines.push(...line.split(os.EOL))
    })
    .on('close', () => {
        const res = callback(...inputTranformer(lines));
        output.write(`${resulttransformer(res)}${os.EOL}`);
        output.close();
    })

    process.on('SIGINT', () => {
        rl.close();
        input.destroy();
        output.destroy();
    })
}

/*async function processFile(p, transformInput, transformResult, agg) {
    const inputStr = fs.createReadStream('./input.txt', {encoding: 'utf8'});
    const outStr = fs.createWriteStream('./output.txt', {encoding: "utf8"});

    try {
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
        inputStr.close();
        // outStr.end(() => outStr.close());
        outStr.close();
    } catch (err) {
        console.log(String(err))
    }
}

// await processFile(getTemp, line => line?.split(' '), result => result, false);
await processFile(getTemp, lines => [].concat.apply([], lines.map(l => l?.split(' '))), result => result, true);*/
processFile2(getTemp, lines => [].concat.apply([], lines.map(l => {
    return l?.split(' ')
})), result => result)