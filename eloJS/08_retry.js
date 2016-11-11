"use strict"

function MultiplicatorUnitFailure(message) {
  this.message = message
  this.stack = (new Error()).stack
} 
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)
MultiplicatorUnitFailure.name = "MultiplicatorUnitFailure"

function primitiveMultiply(a, b) {
  let randomBoolean = Math.random() < 0.5 ? false : true
  if (randomBoolean) {
    return a * b
  } else {
    throw new MultiplicatorUnitFailure("something clearly went wrong .. ")
  }
}

function betterMultiply(a, b) {
  for (;;) {
    try {
      let result = primitiveMultiply(a, b)
      return result
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        // console.log("Gotcha..")
      } else {
        console.log("Caught an exception of Type: " + e.stack)
      }
    }
  }
}

console.log(betterMultiply(5, 10))
console.log(betterMultiply(5, 10))
console.log(betterMultiply(5, 10))
console.log(betterMultiply(5, 10))
console.log(betterMultiply(5, 10))
console.log(betterMultiply(5, 10))