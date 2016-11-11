"use strict"

let ANCESTRY_FILE = require('/Users/felixb/javascript/ancestry') 
let ancestry = JSON.parse(ANCESTRY_FILE)

var byName = {}
ancestry.forEach(function (person) {
    byName[person.name] = person
})

function reduceAncestors (person, f, defaultValue) {
    function valueFor(person) {
        if (person == null) 
            return defaultValue
        else 
            return f(person, valueFor(byName[person.father]), 
                             valueFor(byName[person.mother]))
    }
    return valueFor(person)
}

function sharedDNA(person, fromMother, fromFather) {
    if (person.name == "Pauwels van Haverbeke") {
        return 1
    } else {
        return (fromMother + fromFather) / 2
    }
}
let ph = byName["Philibert Haverbeke"]
let output1 = reduceAncestors(ph, sharedDNA, 0) / 4

console.log("Shared DNA: " + output1) 

function countAncestors(person, test) {
    function combine(current, fromMother, fromFather) {
        let thisOneCounts = current != person && test(current)
        return fromMother + fromFather + (thisOneCounts ? 1 : 0)
    }
    return reduceAncestors(person, combine, 0)
}

function longLivingPercentage(person) {
    let all = countAncestors(person, function(person) {
        return true
    })
    let longLiving = countAncestors(person, function(person) {
        return (person.died - person.born) >= 70
    })
    return longLiving / all
}

let output2 = longLivingPercentage(byName["Emile Haverbeke"])
console.log("Longliving percentage Emile: " + output2)

let theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"]
function isInSet (set, person) {
    return set.indexOf(person.name) > -1
}
let output3a = ancestry.filter(function(person) {
    return isInSet(theSet, person)
})
console.log(output3a)

let output3b = ancestry.filter(isInSet.bind(null, theSet))
console.log(output3b)