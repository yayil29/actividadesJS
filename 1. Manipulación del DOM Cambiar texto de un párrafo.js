<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Manipulación del DOM</title>
</head>
<body>
    <p id="miParrafo">Texto original</p>
    <button id="miBoton">Cambiar texto</button>

    <script>
        document.getElementById('miBoton').onclick = function() {
            document.getElementById('miParrafo').innerText = "Texto cambiado!";
        };
    </script>
</body>
</html>
