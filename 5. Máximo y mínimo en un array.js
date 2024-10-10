function maxMin(array) {
    let maximo = Math.max(...array);
    let minimo = Math.min(...array);
    return { maximo, minimo };
}

const resultado = maxMin([10, 20, 5, 30, 25]);
console.log("Máximo:", resultado.maximo, "Mínimo:", resultado.minimo);
