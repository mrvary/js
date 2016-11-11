"use strict"
function reverseArray(array) {
    let newArray = [], elements = array.length
    for(var i = 0; i < elements; i++)
        newArray.push(array.pop())
    return newArray
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

