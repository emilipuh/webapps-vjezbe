//funkcija koja pretvara x u sate i minute
const prompt = require("prompt-sync")({sigint:true});
var x = prompt("Upišite broj: ");

var convert = (arg) => {
    var h = Math.floor(arg/60); //math.floor samo za zaokruživanje
    var min = arg % 60; //modulo -> ostatak cijelobrojnog dijeljenja
    return "Ovo je " + h + "h i " + min + " min";
}

console.log(convert(x));
