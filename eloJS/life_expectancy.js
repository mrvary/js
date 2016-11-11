"use strict"

let ANCESTRY_FILE = require('/Users/felixb/javascript/ancestry') 
let ancestry = JSON.parse(ANCESTRY_FILE)

function average(array) {
    function plus(a, b) {return a + b}
    return array.reduce(plus) / array.length;
}

function age(person) {
    return person.died - person.born
}

var centuries = {}
ancestry.forEach(function(person) {
    let currentCentury = Math.ceil(person.died / 100)
    if (!(currentCentury in centuries)) {
        centuries[currentCentury] = []
        centuries[currentCentury].push(person)
    } else {
        centuries[currentCentury].push(person)
    }
})
//console.log(centuries)

for (var elem in centuries) {
    let averageAge = average(centuries[elem].map(function(person) {
       return age(person)
   }))
   console.log(elem + " : " + averageAge)
   
}
