/*
    Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
    Надо вернуть [1, 2, 2, 3] (порядок неважен)

    Фактически нам нужно вернуть пересечение множеств, но с повторением элементов.
*/
export const intersectArrays = (a, b) => {
    if (!a || !b || !Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length)
        return [];

    const m = new Map();
    for (const item of a)
        m.set(item, (m.get(item) || 0) + 1);

    const result = [];
    for (const item of b) {
        const t = m.get(item);
        if (t) {
            m.set(item, t - 1);
            result.push(item);
        }
    }

    return result;
}

function test() {
    [
        [],
        [[]],
        [[1], [2]],
        [[1, 2, 3], [2, 4, 5]],
        [[1, 2, 3], [2, 4, 5, 1, 1, 1]],
        [[1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]],
    ].forEach(([a, b], i) => {
        console.log(`${i + 1}:`, intersectArrays(a, b));
    });
}

if (process.env.NODE_ENV !== 'test')
    test(); 
