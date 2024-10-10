<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Detectar Tecla</title>
</head>
<body>
    <input type="text" id="miInput" placeholder="Escribe algo...">

    <script>
        document.getElementById('miInput').addEventListener('keydown', function(event) {
            console.log("Tecla presionada:", event.key);
        });
    </script>
</body>
</html>
