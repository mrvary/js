"use strict"
var ancestry = JSON.parse(require('/Users/felixb/javascript/ancestry'));

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

let byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// ---------------------    Your code here --------------------- //

function hasMother(person) {
   return person.mother != null && byName[person.mother]
}

function ageWhenGivingBirth (person) {
  return person.born - byName[person.mother].born
}
let birthAges = ancestry.filter(hasMother).map(ageWhenGivingBirth)

console.log(average(birthAges))

// → 31.2