/*
    Нечёткий поиск.
    Подстрока str должна быть в dataStr слитно, но в произвольном порядке символов.
*/

export const fuzzySearch = (str, dataStr) => {
    if (typeof str !== 'string' || !str || typeof dataStr !== 'string' || !dataStr)
        return;

    const searched = new Set(str.split(''));
    let count = 0, len = str.length;
    for (const c of dataStr)
        if (searched.has(c)) {
            if (++count === len)
                break;
        } else
            count = 0;

    return count === len;;
}

function test() {
    [
        [undefined], // 0
        ['123', '46810'], // false // 1
        ['123', 'abc1xxjj213zz3'], // true // 2
        ['axzz', 'axDDD128zxaz0'], // true // 3
        ['axzzz', 'axDDD1zxzaz28zz0'], // true // 4
        ['axzz', ' axDDD128z0'], // false // 5
        ['axzz', 'axDDD1280'], // false // 6
        ['axzz', 'axDDD1280_z'], // false // 7
        ['axzz', 'axDDDzzax1280_z'], // true // 8
        ['axzz', 'axDDD1280_zxaz'], // true // 9
    ].forEach(([strToSearch, dataStr], i) => {
        console.log(`${i + 1}:`, fuzzySearch(strToSearch, dataStr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
