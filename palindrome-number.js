/*
    Проверить, является ли число палиндромом.
*/
export const palindromeNumber = value => {
    if (typeof value !== 'number' || value < 0 || value % 10 === 0 && !!value)
        return false;

    let rev = 0;
    while (value > rev) { // цикл до половины числа: читиаем правую половину справа налево
        rev = rev * 10 + value % 10; // забираем последнюю цифру справа
        value /= 10;
        value >>>= 0; // отбрасываем дробную часть
    }

    // console.log(`value = ${value}, rev = ${rev}`)

    // тут мы распилили число на две половины. Если число десятичных цифр чётное, то у полиндрома половины равны, а если нечётное, то из сравнения выкидываем последнюю цифру
    return rev === value || value === (rev / 10 >>> 0);   
}

function test() {
    [
        undefined, //f
        '', //f
        'abc', //t
        0,
        1,
        121,
        10,
        15,
        12321,
        999,
        15051,
        101,
        123321,
        12321,
    ].forEach((val, i) => {
        console.log(`${i + 1}:`, ` ${val}: `, palindromeNumber(val));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
