"use strict"

let until = function (array, f, bool) {
  let current = !bool
  for (let i = 0; i < array.length; i++) {
    current = f(array[i])
    if (current == bool) {
      return current
    }
  }
  return current
}

let every = function(array, f) {
  let current = true
  for (let i = 0; i < array.length; i++) {
    current = f(array[i])
    if (current == false) {
      return false
    }
  }
  return true
}

let some = function(array, f) {
  let current = false
  for (let i = 0; i < array.length; i++) {
    current = f(array[i])
    if (current == true) {
      return true
    }
  }
  return false
}

let some2 = function(array, f) {
  return until(array, f, true)
}
let every2 = function(array, f) {
  return until(array, f, false)
}



console.log(every2([NaN, NaN, NaN], isNaN));
// → true
console.log(every2([NaN, NaN, 4], isNaN));
// → false
console.log(some2([NaN, 3, 4], isNaN));
// → true
console.log(some2([2, 3, 4], isNaN));
// → false