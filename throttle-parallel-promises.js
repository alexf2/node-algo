/*
    Дан массив url и максимальное число параллельных запросов limit. 
    Нужно запросить все url через fetch так, чтобы запросы выполнялись параллельно, но одновременным количеством не более заданного ограничения limit.
    При этом, если какой-либо запрос завершился, то сразу должен запускаться запрос для следующего url из списка.

    Так же, нужно вернуть результаты запросов в порядке следования url в списке.
    
    Дополнительно: мемоизировать результаты так, чтобы в случае наличия одинаковых url в списке, запрос не повторялся,
    а брался бы уже готовый результат.
*/

const fakeQuery = (url, order) => {
    const p = new Promise((fulfill, _) => {  
        // тут добавляем в респонс order и key (сам промис).
        // order нужен для быстрого доступа к queries пока запросов больше, чем limit, а далее нужен key, так как queries всё время уменьшается
        setTimeout(() => fulfill({url, order, response: null, key: p}), Math.random() * 1500 >>> 0)
    })

    return p
}

async function loadThrottle(urls, limit, spawnQuery = fakeQuery) {
    if (!urls || urls.length === 0)
        return Promise.resolve([])

    // это нужно, чтобы исключить одинаковые url и не запрашивать их повторно, а брать потом в самом конце response из results
    const queryUrls = Array.from(new Set(urls).values())

    // тут будут результаты запросов по url
    const results = new Map()
    let limitIndex = Math.min(queryUrls.length, limit) - 1

    let queries = new Array(limitIndex + 1)
    for (let i = 0; i <= limitIndex; ++i )
        queries[i] = spawnQuery(queryUrls[i], i)
    
    while (queries.length > 0) {
        // race возвращает первый промис, который зарезолвится из которого получается payload: {url, order, response: null, key: p}
        const response = await Promise.race(queries)
        const {key, ...rest} = response
        // сохраняем результат запроса отбросив лишнее
        results.set(response.url, rest)

        if (++limitIndex < queryUrls.length)
            // пока задач остаётся больше, чем limit, то заменяем каждую завершившуюся загрузку на новую прямо в queries по индексу
            queries[response.order] = spawnQuery(queryUrls[limitIndex], response.order)
        else
            // а когда задачи кончаются, то каждый раз сжимаем queries на единицу, чтобы удалить завершившуюся загрузку
            // и далее в цикле дожидаемся завершения оставшихся загрузок: пока queries не станет пустым
            queries = queries.filter((q) => q !== response.key)
    }

    return urls.map((u) => results.get(u))
}

const data = [
    'url1',
    'url2',
    'url3',
    'url4',
    'url5',
    'url6',
    'url7',
    'url8',
    'url9',
    'url10',
    'url11',
]

const result = await loadThrottle(data, 3)

console.log('\nFinish: ', result)
