const CASH_STORAGE = new Map([
    [5000, 5],
    [1000, 15],
    [500, 25],
    [100, 30],
    [50, 40],
    [10, 100],
    [5, 100],
    [2, 100],
    [1, 100],
])

const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const getTotal = (storage) => {
	let result = 0
    const cash = storage instanceof Map ? storage : Object.entries(storage)

    for(const [key, value] of cash)
        result += key * value

  return result
}

const updateStorage = (dst, src) => src.forEach((value, key) => dst.set(key, value))

function getChange(cashStorage, changeAmount) {
    const result = {}

    if (isNaN(changeAmount) || !changeAmount)
        return result

    const total = getTotal(cashStorage)
    const snapshotStorage = new Map(cashStorage)
    let theRest = changeAmount

    for (const [nominal, amount] of cashStorage) {
        // идём с больших номиналов вниз, проверяем, что номинал ещё не пустой и сдача не меньше номинала
        if (amount > 0 && theRest >= nominal) {
            const coinCount = Math.min(theRest / nominal >>> 0, amount)
            theRest -= coinCount * nominal

            result[nominal] = coinCount
            cashStorage.set(nominal, cashStorage.get(nominal) - coinCount)
        } // иначе пропускаем номинал

        // сдача сдана
        if (!theRest)
            break
    }

    if (theRest > 0) {
        const remainTotal = getTotal(cashStorage)
        updateStorage(cashStorage, snapshotStorage) // откатываем сдачу
        return { status: `Unable to get change: ${changeAmount}. Total cash: ${total}, the rest: ${remainTotal} and not given remainder: ${theRest}`, result }
    }

    return {given: true, status: `Ok: ${formatter.format(getTotal(cashStorage))}`, result }
}

[
    [new Map(CASH_STORAGE), 12, 11, 17, 119, 98, 57, 194, 199, 20678, 30001, 121, 17, 3298, 397, 4297, 3666, 417],
].forEach(([stg, ...change]) => {
    console.log('Всего: ', formatter.format(getTotal(stg)))

    change.forEach((amount) => {
        const change = getChange(stg, amount)
        const amountOfChange = formatter.format(getTotal(change.result))
        const logger = change.given ? console.log : console.error

        logger(`${amount}:  `, change.status, '---', JSON.stringify(change.result), ' = ', amountOfChange)
    })
})
