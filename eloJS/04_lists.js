"use strict"
function arrayToList(array) {
    let list = null
    for(var i = array.length - 1; i >= 0; i--) 
        list = prepend(array[i], list)
    return list
}

function listToArray(list) {
    let array = []
   
    while(list.rest != null) {
        array.push(list.value)
        list = list.rest
    }
    array.push(list.value)
    return array
}

function prepend(elem, list) {
    return { value: elem, rest: list }
}

function nth(list, num) {
    for (var i = 0; i < num; i++) {
        list = list.rest       
    }
    return list.value 
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

