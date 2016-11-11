"use strict"

function deepEqual(a, b) {

    if (a === b) return true

    if (typeof a != "object" || a == null || typeof b != "object" || b == null) {
        return false
    }
    

    let props_a = 0, props_b = 0

    for (let prop in a) {
        props_a++
    }

    for (let prop in b) {
        props_b++
        if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
            return false
        }

    }
    return props_a == props_b
    
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true