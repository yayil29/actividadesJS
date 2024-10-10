<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Crear Elementos en el DOM</title>
</head>
<body>
    <ul id="miLista">
        <li>Elemento 1</li>
    </ul>
    <button id="agregarBoton">Agregar elemento</button>

    <script>
        document.getElementById('agregarBoton').onclick = function() {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.innerText = "Nuevo Elemento";
            document.getElementById('miLista').appendChild(nuevoElemento);
        };
    </script>
</body>
</html>
