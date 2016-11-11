"use strict"

let cat = {
    sound: 'miau',
    talk: function () {
        console.log(this.sound)
    }
}

cat.talk()
let talkFunction = cat.talk
let boundFunction = 
    talkFunction.bind(cat)
boundFunction()