/*
    Evaluate the value of an arithmetic expression in Reverse Polish Notation.
    Valid operators are +, -, *, /. Each operand may be an integer or another
    expression.
    Some examples:
    ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
    ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

const OPERATIONS = new Set(['+', '-', '*', '/'])

const evalPolishExpression = (expr) => {
    if (!expr?.length)
        return null

    const isOperation = (arg) => OPERATIONS.has(arg)
    const applyOperation = (a, b, operation) => {
        switch(operation) {
            case '+':
                return a + b

            case '-':
                return a - b

            case '*':
                return a * b

            case '/':
                return a / b
        }
    }

    const args = expr.split(' ').map((arg) => arg.trim()).filter(Boolean)
    const evalStack = []
    for (const arg of args) {
        if (isOperation(arg)) {
            if (evalStack.length === 1) {
                switch (arg) {
                    case '-':
                        evalStack.push(evalStack.pop() * -1)
                        break
                    case '+':
                        break
                    default:
                        throw new Error(`Unsupported unary operation: ${arg}`)
                }
            } else if(evalStack.length > 1)
                evalStack.push(applyOperation(evalStack.pop(), evalStack.pop(), arg))
            else
                throw new Error(`Can't evaluate operation ${arg}: unbalanced expression`)
        } else {
            const val = +arg
            if (isNaN(val))
                throw new Error(`Not a number argument: ${arg}`)
            evalStack.push(val)
        }
    }

    if (evalStack.length !== 1)
        throw new Error("Can't evaluate: unbalanced expression")

    return evalStack.pop()
}

[
    '2 1 + 3 *',
    '4 13 5 / +',
    '1 - 3 +',
    '11',
    '11 -',
    '11-',
].forEach((str) => {
    let res
    try {
        res = evalPolishExpression(str)
    } catch (err) {
        res = String(err)
    }
    console.log(`${str} = ${res}`)
} )

