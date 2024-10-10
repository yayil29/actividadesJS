function promedio(array) {
    let suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}

console.log("El promedio es:", promedio([10, 20, 30, 40]));
