/* 
Написать функцию которая получает число и если число
 попадает в диапазон ключа из 
 priceList возвращает value этого ключа.

 Доп. сложность: нельзя использовать map/for/forEach(перебирающие методы) 
 для priceList
 */

const PL = {
  '1-10': 1, 
	'11-20': 3, 
	'21-30': 5, 
	'31-40': 9, 
	'41-Infinity': 10
}

const isInRange = (value, price) => {
  const [v1, v2] = price.split('-')
  return value >= +v1 && value <= +v2;
}

export const searchValue = () => {
  const p = Object.entries(PL)

  return (price) => {
    const item = p.find(([priceItem, value]) => isInRange(price, priceItem))
    const result = item?.[1]

    return result === undefined ? 'None' : result
  }
}

function test() {
  const f = searchValue();

  [1, 5, 0, 12, 33, 30, 31, 55, 100, 41, 40].forEach(v => console.log(`${v}: ${f(v)}`))
}

if (process.env.NODE_ENV !== 'test')
    test();
