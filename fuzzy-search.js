/*
    Нечёткий поиск.
    Подстрока str должна быть в dataStr слитно, но в произвольном порядке символов.
*/

export const fuzzySearch = (str, dataStr) => {
    if (typeof str !== 'string' || !str || typeof dataStr !== 'string' || !dataStr || dataStr.length < str.length)
        return -1;

    const searched = new Set(str.split(''));
    let count = 0, len = str.length, i = 0;
    for (const c of dataStr) {
        i++;
        if (searched.has(c)) {
            if (++count === len)
                break;
        } else
            count = 0;
    }

    return count === len ? i - count : -1;
}

const fuzzySearchWindow = (str, dataStr) => {
    if (typeof str !== 'string' || !str || typeof dataStr !== 'string' || !dataStr || dataStr.length < str.length)
        return -1;

    const getSummCodes = (strVal, idxStart, idxEnd) => {
        let summ = 0;
        for (let i = idxStart; i <= idxEnd; ++i)
            summ += strVal.charCodeAt(i);
        return summ;
    }

    const targetSet = new Set(Array.from(str));
    const testChars = (i1, i2) => {
        for (let j = i1; j <= i2; ++j)
            if (!targetSet.has(dataStr[j]))
                return false;

        return true;
    }

    const lastIndex = str.length - 1;
    const targetSumm = getSummCodes(str, 0, lastIndex);
    let windowSumm = getSummCodes(dataStr, 0, lastIndex);

    for (let i = lastIndex; i < dataStr.length; ++i) {
        if (targetSumm === windowSumm && testChars(i - lastIndex, i))
            return i - lastIndex;
        
        if (i < dataStr.length - 1) {
            windowSumm -= dataStr.charCodeAt(i - lastIndex);
            windowSumm += dataStr.charCodeAt(i + 1);
        }
    }

    return -1;
}

function test() {
    [
        [undefined], // 
        ['123', '46810'], // false // -1
        ['123', 'abc1xxjj213zz3'], // true // 8
        ['axzz', 'axDDD128zxaz0'], // true // 8
        ['axzzz', 'axDDD1zxzaz28zz0'], // true // 6
        ['axzz', ' axDDD128z0'], // false // -1
        ['axzz', 'axDDD1280'], // false // -1
        ['axzz', 'axDDD1280_z'], // false // -1
        ['axzz', 'axDDDzzax1280_z'], // true // 5
        ['axzz', 'axDDD1280_zxaz'], // true // 10
    ].forEach(([strToSearch, dataStr], i) => {
        console.log(`${i + 1}:`, fuzzySearch(strToSearch, dataStr), fuzzySearchWindow(strToSearch, dataStr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
