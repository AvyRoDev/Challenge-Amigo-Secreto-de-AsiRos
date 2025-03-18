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
/**
 * Función para actualizar la lista de nombres de amigos mostrada en el HTML.
 */
function actualizarListaAmigos() {
    // Limpiar el contenido actual de la lista en el HTML.
    listaAmigosElement.innerHTML = "";
    // Iterar sobre el array de amigos y crear un elemento de lista (<li>) por cada uno.
    listaDeAmigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo; // Establecer el texto del elemento de lista como el nombre del amigo.
        listaAmigosElement.appendChild(listItem); // Añadir el elemento de lista al <ul> en el HTML.
    });
}
/**
 * Función que implementa el algoritmo de Fisher-Yates modificado para asignar los amigos secretos.
 * Asegura que nadie se asigne a sí mismo.
 * @param {string} participantes - Un array con los nombres de los participantes.
 * @returns {object} - Un objeto donde las claves son los participantes y los valores son sus amigos secretos asignados.
 */
function asignarAmigoSecretoRobusta(participantes) {
    const n = participantes.length;
    if (n < 2) {
        return {}; // No se puede realizar el sorteo con menos de 2 participantes.
    }

    const indices = [...Array(n).keys()]; // Crear un array con los índices de los participantes.
    const amigosSecretosIndices = [...indices]; // Crear una copia de los índices para la asignación.

    // Algoritmo de Fisher-Yates modificado para evitar la auto-asignación.
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i); // Generar un índice aleatorio menor que i.

        // Asegurarse de que el índice aleatorio no sea el mismo que el índice actual.
        if (i === amigosSecretosIndices[j]) {
            // Intercambiar con otro índice aleatorio anterior para evitar la auto-asignación.
            const k = Math.floor(Math.random() * j);
            [amigosSecretosIndices[i], amigosSecretosIndices[k]] = [amigosSecretosIndices[k], amigosSecretosIndices[i]];
        } else {
            // Intercambiar los elementos en los índices i y j.
            [amigosSecretosIndices[i], amigosSecretosIndices[j]] = [amigosSecretosIndices[j], amigosSecretosIndices[i]];
        }
    }

    // Crear el objeto de asignaciones donde la clave es el participante y el valor es su amigo secreto.
    const asignaciones = {};
    for (let i = 0; i < n; i++) {
        asignaciones[participantes[i]] = participantes[amigosSecretosIndices[i]];
    }

    // Verificación final (redundante con la lógica implementada, pero útil para depuración).
    for (const participante in asignaciones) {
        if (asignaciones[participante] === participante) {
            console.error("Error: Auto-asignación detectada en la solución robusta.");
            return null;
        }
    }

    return asignaciones;
}