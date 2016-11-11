"use strict"

var arrays = [[1, 2, 3], [4, 5], [6]]

console.log(arrays.reduce(function(a,b) {
				return a.concat(b)
}))
// Your code here.
// → [1, 2, 3, 4, 5, 6]