let lista = [10, 20, 30, 40, 50];
let valorBuscado = 30;
let posicion = lista.indexOf(valorBuscado);

if (posicion !== -1) {
    console.log("El valor " + valorBuscado + " se encuentra en la posición:", posicion);
} else {
    console.log("El valor no se encuentra en el array.");
}
