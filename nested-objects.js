/*
    Построить по шаблону объект с вложенными полями-объектами.
*/

export const nestingObjects = str => {
    if (!str || typeof str !== 'string' || !str.length)
        return {};

    if (!(/[A..Z]+(\.[A..Z]+)*/gi).test(str))
        throw new Error(`Illegal format: ${str}`);

    const result = {};
    let currRoot = result;
    for (const node of str.split('.'))
        currRoot = currRoot[node] = {};

    return result;
}

function test() {
    [
        undefined,
        '',
        'a',
        'a.b',
        'a.b.c',
        'a..b',
        'asd.dddf-sdsd.sdsd',
        'ss*d.sdsd',
        'sdsd.sdsd.sdsd/sdsd',
    ].forEach((str, i) => {
        console.log(`${i + 1}:`, nestingObjects(str));
    });
}

try {
    if (process.env.NODE_ENV !== 'test')
        test();
} catch (e) {
    console.log(e.message);
}

