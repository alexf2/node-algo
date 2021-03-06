/*
    Нечёткий поиск.
    Подстрока str должна быть в dataStr в нужном порядке, но не обязательно слитно.
*/
export const fuzzySearchOrdered = (str, dataStr) => {
    if (typeof str !== 'string' || !str || typeof dataStr !== 'string' || !dataStr)
        return;

    let i = 0, currChar = str[0];
    for (const c of dataStr) {
        if (c === currChar) {
            if (i === str.length - 1)
                return true;
            currChar = str[++i];
        }
    }

    return false;
}

function test() {
    [
        [undefined], // 0
        ['123', '46810'], // false // 1
        ['123', 'abc1xxjj12zz3'], // true // 2
        ['axzz', 'axDDD128zz0'], // true // 3
        ['axzzz', 'axDDD1z28zz0'], // true // 4
        ['axzz', ' axDDD128z0'], // false // 5
        ['axzz', 'axDDD1280'], // false // 6
        ['axzz', 'axDDD1280_z'], // false // 7
        ['axzz', 'axDDDzz1280_z'], // true // 8
        ['axzz', 'axDDD1280_zz'], // true // 9
    ].forEach(([strToSearch, dataStr], i) => {
        console.log(`${i + 1}:`, fuzzySearchOrdered(strToSearch, dataStr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
