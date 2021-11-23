/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

        An input string is valid if:

        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
*/
const opens = new Set(['(', '{', '[']);
const isOpen = c => opens.has(c);
const match = (open, close) =>
    open === '(' && close === ')' ||
    open === '{' && close === '}' ||
    open === '[' && close === ']';

export const validBrackets = str => {
    if (!str || typeof str !== 'string')
        return undefined;
    
    const stack = [];
    for (const c of str)
        if (isOpen(c))
            stack.push(c);
        else if (!match(stack.pop(), c))
            return false;
    
    return !stack.length;
}

function test() {
    [
        undefined,
        1,
        '',
        '()',
        '()[]{}',
        '(]',
        '([)]',
        '(',
        ')',
        '(()',
        ')))',
        '{[]}',
        '(()[({})])',
        '(()[({})])[][{}{}]',
    ].forEach((str, i) => {
        console.log(`${i + 1}:`, str, ' --> ', validBrackets(str));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
