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

