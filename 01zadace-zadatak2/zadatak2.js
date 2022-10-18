//funkcija koja pretvara kune u eure
const prompt = require("prompt-sync")({sigint:true});

var euro = 7.5345;
var input = prompt("Unesite iznos u kunama: ");
var result = 0;
var kuna = input; //pohranjujemo input u varijablu kune

var euroToKuna = (arg) => {
    arg = kuna/euro;
    console.log("Iznos u eurima: " + arg);
}

console.log(euroToKuna(result));
