function debounce(callback, timeout = 3000) {
    if (typeof callback !== 'function' || typeof timeout !== 'number')
        throw new Error('Bad argument type')

    let timerId
    return function (...args) {
        if (timerId)
            clearTimeout(timerId)

        const that = this
        timerId = setTimeout(() => {
            timerId = undefined
            callback.apply(that, args)
        }, timeout)
    }
}

const debounce2 = function(fn, t) {
    const that = this
    let timerId, arg

    return function(...args) {
        arg = args
        if (timerId !== undefined) {
            clearTimeout(timerId)
        }

        timerId = setTimeout(() => fn.apply(that, arg), t)
    }
}
