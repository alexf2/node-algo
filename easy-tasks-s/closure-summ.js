export const sum = (a) => {
  let sum = a

  const proxy = new Proxy(function f() {}, {
    get (obj, key) {
      return sum
    },

    apply (reciever, ...args) {      
      sum += args[1][0]
      return proxy
    },
  })

  return proxy
}

const sum2 = (a) => {
  let sum = a
  const f = (b) => {
    if (b === undefined) {
      return sum
    }
    sum += b
    return f
  }
  return f
}

function test() {
  // console.log(sum(2)(3)(1)(5).value)
  console.log(sum2(2)(3)(1)(5)())
}

if (process.env.NODE_ENV !== 'test')
    test();