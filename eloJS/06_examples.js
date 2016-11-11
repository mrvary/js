"use strict"

let rabbit = {}
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'!")
}

rabbit.speak("I'm alive")

function speak (line) {
  console.log("The " + this.type + " rabbit says '" + line + "'")
}

let whiteRabbit = {type: "white", speak: speak}
let fatRabbit = {type: "fat", speak: speak}

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!")
fatRabbit.speak("I feel like having a carrot..")

speak.apply(fatRabbit, ['Burp!'])
speak.call({type: "old"}, "Oh my.")