//funkcija koja prima polje brojeva, a ona ispisuje one koje su dijeljivi s 3
var list = [1,2,3,4,5,6,7,8,9,10];
var list1 = [];

var func = (x) => {
    for (let i in x){
        if (x[i]%3 === 0){
            list1.push(x[i]);
        }
    }
   return "Brojevi dijeljivi s 3: " + list1;
}

console.log(func(list));
