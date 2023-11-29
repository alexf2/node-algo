/*
    Даны две строки.

    Написать функцию, которая вернёт True, если из первой строки можно получить вторую, совершив не более 1 изменения (== удаление / замена символа)
*/
function canTransform(str1, str2) {
	if (typeof str1 !== 'string' || typeof str2 !== 'string' || Math.abs(str1.length - str2.length) > 1)
  	    return false
    
    let idx1, idx2, minLength = Math.min(str1.length, str2.length)
    for (let i = 0; i < minLength; ++i)
        if (str1[i] !== str2[i]) {
            idx1 = i
        break
        }
        
    if (idx1 === undefined)
        return true
        
    for (let j1 = str1.length - 1, j2 = str2.length - 1, i = 0; j1 >= 0 && j2 >= 0; --j1, --j2, ++i)
        if (str1[j1] !== str2[j2]) {
            idx2 = i
        break
        }
        
    return idx1 === idx2
}

[
    ['abc', 'akc'],
    ['abc', 'abcc'],
    ['123bb2', '123bb21'],
    ['123bb', '123bb21'],
].forEach((item) => console.log(item, canTransform(item[0], item[1])))

