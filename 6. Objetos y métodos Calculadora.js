const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b !== 0 ? a / b : "Error: División por cero.")
};

console.log("Suma:", calculadora.sumar(10, 5));
console.log("Resta:", calculadora.restar(10, 5));
console.log("Multiplicación:", calculadora.multiplicar(10, 5));
console.log("División:", calculadora.dividir(10, 0));
