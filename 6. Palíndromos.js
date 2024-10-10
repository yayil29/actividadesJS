let palabra = prompt("Ingresa una palabra:");
let esPalindromo = palabra === palabra.split('').reverse().join('');
if (esPalindromo) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}
