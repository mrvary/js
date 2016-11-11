"use strict"

function rangeDeprecated(start, end) {
    let numArray = [], counter = 0
    for (start; start <= end; start++) {
        numArray[counter] = start
        counter++
    }
    return numArray
}

// returns a range as an array of numbers, works for +/-
function range(start, end, step) {
    let currentValue = start, array = []
    if (step == null) step = 1

    if (step > 0) {
        for (var i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (var i = start; i >= end; i += step)
            array.push(i);
    }

    //for (var i = 0; i <= ((end - start) / step); i++) {
    //    array[i] = currentValue
    //    currentValue += step
    //}
    return array
}

function sum(array) {
    let sum = 0
    for (var i = 0; i < array.length; i++) 
        sum += array[i]
    return sum
}

console.log(sum(range(1,10)) + " 55")
console.log((range(1,10,2)))
console.log((range(5,2,-1)))


    