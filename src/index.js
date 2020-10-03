exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        let minimum
        array.forEach(element => {
            if (typeof(element) === 'number' && !isNaN(element))
                if (typeof(minimum) === 'number') {
                    if (element < minimum) minimum = element
                } else minimum = element
        })
        if (typeof(minimum) === 'number' && !isNaN(minimum)) return minimum
    }
    return 0

}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        let maximum
        array.forEach(element => {
            if (typeof(element) === 'number' && !isNaN(element))
                if (typeof(maximum) === 'number') {
                    if (element > maximum) maximum = element
                } else maximum = element
        })
        if (typeof(maximum) === 'number' && !isNaN(maximum)) return maximum
    }
    return 0
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        const sum = sum(array)
        return sum / array.length
    }
    return 0
}