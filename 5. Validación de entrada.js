let entrada = prompt("Ingresa un número:");
if (!isNaN(entrada) && entrada.trim() !== "") {
    console.log("Has ingresado el número: " + entrada);
} else {
    console.log("Error: No es un número válido.");
}
