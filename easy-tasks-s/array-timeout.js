/*
// необходимо дописать функцию в которой элементы массива будут 
// последовательно выводиться в консоль спустя промежуток времени 
// указанный в атрибуте timeout

*/
import readline from 'readline'

const DATA = [
	{ name: 'first', timeout: 1200 },
	{ name: 'second', timeout: 5100 },
	{ name: 'third', timeout: 2200 }
];

// Version 1, needs console blocking
export const printWithTimeout = (data) => data.forEach(({ name, timeout }) => setTimeout(() => console.log(name), timeout))


const printWithTimeoutPromiseCore = (data) => data.map(({ name, timeout }) => 
  new Promise((resolve, _) => setTimeout(() => {
    console.log(name)
    resolve(true)
  }, timeout))
)
// Version 2
export const printWithTimeoutPromise = (data) => Promise.all(printWithTimeoutPromiseCore(data))

function test() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Press to exit>\r\n', () => rl.close() )

  rl.on("close", function() {
    console.log('Done!')
    process.exit(0)
  })

  printWithTimeout(DATA)
}

async function testPromise() {
  await printWithTimeoutPromise(DATA)
  console.log('Done!')
}

if (process.env.NODE_ENV !== 'test')
testPromise();
