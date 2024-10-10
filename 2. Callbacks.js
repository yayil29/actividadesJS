function ejecutarCallback(callback) {
    callback("Este es un mensaje desde el callback.");
}

ejecutarCallback(function(mensaje) {
    console.log(mensaje);
});
