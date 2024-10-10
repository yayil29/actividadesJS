<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Eliminar Elementos del DOM</title>
</head>
<body>
    <ul id="miLista">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
    </ul>
    <button id="eliminarBoton">Eliminar último elemento</button>

    <script>
        document.getElementById('eliminarBoton').onclick = function() {
            const lista = document.getElementById('miLista');
            if (lista.lastChild) {
                lista.removeChild(lista.lastChild);
            }
        };
    </script>
</body>
</html>
