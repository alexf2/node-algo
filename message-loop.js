console.log('A');
setTimeout(() => console.log('tt'), 0);

const p = Promise.reject().then(
    () => console.log('1'),
    () => console.log('2'),
)
.then(() => console.log('3'))
.finally(() => console.log('4'))
.catch(() => console.log('5'))
.then(() => console.log('6'))

console.log('B');
