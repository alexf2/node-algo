/*
    Реализовать глубокое клонирование объекта.
*/
import isEqual from 'lodash/isEqual.js';

const isScalar = obj => {
    switch (typeof obj) {
        case 'object':
            return false;
        default:
            return true;
    }
}

export const deepClone = obj => {
    if (!obj || typeof obj !== 'object')
        return obj;

    let clone;
    if (Array.isArray(obj)) {
        clone = [...obj];
        for (const i in obj) {
            if (!isScalar(obj[i]))
                clone[i] = deepClone(obj[i]);
        }
    } else {
        clone = {};
        for (const key in obj)
            if (obj.hasOwnProperty(key)) {
                const fieldVal = obj[key];
                clone[key] = isScalar(fieldVal) ? fieldVal : deepClone(fieldVal);
            }
    }

    return clone;
}

const needsRecusrion = (obj) => Array.isArray(obj) || typeof obj === 'object'

function clone2(obj) {
    if(!obj)
        return obj

    if (Array.isArray(obj)) {
        const res = [...obj]
        for (let i = 0; i < res.length; ++i) {
            const item = res[i]
            if (needsRecusrion(item))
            res[i] = clone2(item)
        }    
        return res
    } else if (typeof obj === 'object') {
        const res = {...obj}
        for (const key in obj) {
            const item = obj[key]
            if (needsRecusrion(item))
            res[key] = clone2(item)
        }
        return res
    } else
        return obj
}


function test() {
    [
        undefined, //1
        {}, //2
        {a: 1, b: 68887878787897n, n: null, s: Symbol('5')}, //3
        {ss: 'ccc', ab: {bb: 1, ss: 0, str: 'test'}}, //4
        [1, 2, 3], //5
        [], //6
        [1, {a: 1}, 2, {bb: 'ss', x: {a: {text: 'test', h: 123}, m: 1278}}], //7
        {a: 222, ss: true, mm: [1, 2, 3]}, //8
    ].forEach((obj, i) => {
        // const o = deepClone(obj);
        const o = clone2(obj);
        console.log(`${i + 1}:`, o, ' --> ', isEqual(o, obj));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
