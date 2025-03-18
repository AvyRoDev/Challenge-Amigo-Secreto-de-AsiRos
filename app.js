// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

// Array para almacenar los nombres de los participantes del amigo secreto (vacio).
const listaDeAmigos =``;

// Obtener referencias a elementos del DOM para interactuar con el HTML.
const inputAmigo = document.getElementById('amigo'); // Campo de texto para ingresar nombres.
const listaAmigosElement = document.getElementById('listaAmigos'); // Lista (<ul>) donde se mostrarán los nombres agregados.
const resultadoElement = document.getElementById('resultado'); // Lista (<ul>) donde se mostrarán los resultados del sorteo.

/**
 * Función para agregar un nuevo amigo a la lista de participantes.
 * Se llama cuando se hace clic en el botón "Añadir".
 */
function agregarAmigo() {
    // Obtener el nombre del amigo del campo de texto y eliminar espacios en blanco al inicio y al final.
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo de nombre está vacío.
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return; // Detener la ejecución de la función si el nombre está vacío.
    }

    // Validar si el nombre ya existe en la lista (ignorando mayúsculas y minúsculas).
    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert(`El nombre "${nombreAmigo}" ya ha sido ingresado.`);
        inputAmigo.value = ""; // Limpiar el campo de texto.
        return; // Detener la ejecución de la función si el nombre ya existe.
    }

    // Agregar el nombre a la lista de amigos.
    listaDeAmigos.push(nombreAmigo);
    // Actualizar la visualización de la lista de amigos en el HTML.
    actualizarListaAmigos();
    // Limpiar el campo de texto para la siguiente entrada.
    inputAmigo.value = "";
}
