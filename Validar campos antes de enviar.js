<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Validar Formulario</title>
</head>
<body>
    <form id="miFormulario">
        <input type="text" id="campo1" placeholder="Campo 1" required>
        <input type="text" id="campo2" placeholder="Campo 2" required>
        <button type="submit">Enviar</button>
    </form>

    <script>
        document.getElementById('miFormulario').onsubmit = function(event) {
            if (!document.getElementById('campo1').value || !document.getElementById('campo2').value) {
                alert("Por favor, llena todos los campos.");
                event.preventDefault(); // Previene el envío del formulario
            }
        };
    </script>
</body>
</html>
