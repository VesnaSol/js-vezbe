/* Zadatak 1:
 Napraviti dve varijable. Svakoj varijabli dodeli broj.
 Napraviti trecu varijablu, koja ce sabrati prve dve.
 Ispisi rezultat trece varijable u konzoli. */

var a = 1;
var b = 2;
var c = a + b;

console.log(c);

// varijacija na temu

// function expression, arrow function:
// ako je one line code block, nije potrebna kljucna rec return (implicit return), 
// i nisu potrebne viticaste zagrade
// ako je jedan parametar, nisu potrebne zagrade
var add = (a, b) => a + b; 

console.log(add(3, 5));

// function declaration:
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));



