"use strict"

let ANCESTRY_FILE = require('/Users/felixb/javascript/ancestry') 
let ancestry = JSON.parse(ANCESTRY_FILE)

function filter(array, test) {
    let passed = []
    for (let i = 0; i < array.length; i++) {
        if(test(array[i])) {
            passed.push(array[i])
        }
    }
    return passed
}

let output1 = filter(ancestry, function (person) {
    return person.born > 1900 && person.born < 1925
})

function map(array, transform) {
    var mapped = []
    for (let i = 0; i < array.length; i++){
        mapped.push(transform(array[i]))
    }
    return mapped
}

let overNinety = ancestry.filter(function (person){
    return person.died - person.born > 90
})

let output2 = map(overNinety, function(person) {
    return person.name
})

function reduce(array, combine, start) {
    let current = start
    for (let i = 0; i < array.length; i++) {
        current = combine(current, array[i])
    }
    return current
}

let output3 = reduce([1,2,3,4], function (a,b) { return a + b }, 0)

let output4 = ancestry.reduce(function (min, cur) {
    if (cur.born < min.born) return cur
    else return min
})

// ---------- composability ---------------- //

function average(array) {
    function plus(a, b) {return a + b}
    return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born }
function male(p) { return p.sex == "m"}
function female(p) { return p.sex == "f"}

let output5a = average(ancestry.filter(male).map(age))
let output5b = average(ancestry.filter(female).map(age))

console.log(output5a)
console.log(output5b)