//funkcija koja string ispisuje velikim slovima bez razmaka
var string = "web apps vjezbe";

var func5 = (str) => {
    var temp = str.split(" ");
    var temp2 = [];
    for (let i of temp){
        if (temp.indexOf(i) === 0){
            temp2.push(i);
            continue; 
        }
        var first = i.charAt(0).toUpperCase();
        var second = i.slice(1, )
        var end = first + second;
        temp2.push(end);
    }
    return temp2.join("");
}

console.log(func5(string));
