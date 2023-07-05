export const banana = () => ('b' + 'a' +  + 'a' + 'a').toLowerCase()

function test() {
  console.log(banana())
}

if (process.env.NODE_ENV !== 'test')
    test();
    