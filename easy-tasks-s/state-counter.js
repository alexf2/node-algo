/*
  Нужно написать функцию, которая принимает число N и возвращает функцию, вызов которой первые N раз возвращает 'yes', а потом – 'no'.
*/

export const stateCounter = (n) => {
  let countDown = n

  return () => countDown-- > 0 ? 'yes' : 'no'
}

function test() {
  const generate = (count, countTo = count + 3) => {
    const f = stateCounter(count)
    while (countTo-- > 0)
      console.log(f())
  }

  [2, 5].forEach(n => {
    console.log('N = ', n)
    generate(n)
    console.log('----------')
  })
}

if (process.env.NODE_ENV !== 'test')
    test();

