"use strict"

function countChar(s, c) {
    let counter = 0
    for (var i = 0; i < s.length; i++ ) {
        if (s[i] == c)
            counter++
    }
    return counter
}

function countBs(s) {
    return countChar(s, "B")
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))