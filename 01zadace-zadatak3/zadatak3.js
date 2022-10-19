//funkcija koja provjerava nalazi li se zadani broj x u intervalu [100,150000]

var prompt = require("prompt-sync")({sigint:true});
var broj = prompt("Upišite broj: ");

var func1 = (arg) => {
    if (broj >= 100 && broj <= 150000) {
        return broj + " se nalazi unutar [100,150000].";
    }else{
        return broj + " se ne nalazi unutar [100,150000].";
    }
}

console.log(func1(broj));

