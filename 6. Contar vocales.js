function contarVocales(palabra) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log("Cantidad de vocales en 'Hola':", contarVocales("Hola"));
