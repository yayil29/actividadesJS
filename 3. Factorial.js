function factorial(n) {
    if (n < 0) return undefined; // No existe factorial de números negativos
    if (n === 0) return 1; // 0! = 1
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("Factorial de 5 es:", factorial(5));
