/*
Написать функцию которая вернет массив суммы рядом стоящих элементов.
 */
export const summAdjucent = (items) => {
  let summValues = []

  if (!items?.length) {
    return []
  }
  if (items.length === 1) {
    return items
  }

  for (let i = 0; i < items.length; ++i) {
    const v1 = items[i]
    const v2 = i < items.length - 1 ? items[i + 1] : 0

    summValues.push(v1 + v2)
  }

  return summValues
}

function test() {
  [[], [1], [2, 3], [3, 1, 0], [5, -1, 2, 7]].forEach(arr => {
    console.log(arr)
    console.log(summAdjucent(arr))
    console.log('-----------')
  })
}

if (process.env.NODE_ENV !== 'test')
    test();