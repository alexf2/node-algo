export function compose(...functions) {
  if (!functions?.length) {
    return function() {
      return Array.from(arguments)
    };
  }

  return function() {
    return functions.reduce((acc, current, i) => current.apply(this, i ? [acc] : acc), arguments)
  }
}


function test() {
  const f1 = (a, b) => a + b
  const f2 = (a) => a * 2
  const f3 = (a) => a * -1

  console.log(compose()(2, 4))
  console.log(compose(f1, f2, f3)(2, 4))
  console.log(compose(f1, f3, f2, f3)(2, 4))
  console.log(compose(f1, f3, f2, f3, f2)(2, 4))
}

if (process.env.NODE_ENV !== 'test')
    test();