# Challenge-Amigo-Secreto-de-AsiRos
1er proyeto del programa de formación de One  Oracle  G8

Punto de entrada para la documentación del proyecto educativo del challenge de amigo secreto del programa de formación One Oracle.

## Descripción del Proyecto

Esta aplicación web facilita la organización de sorteos de Amigo Secreto. Los usuarios pueden ingresar una lista de participantes (amigos), y la aplicación utiliza un algoritmo robusto para asignar aleatoriamente un amigo secreto a cada persona, garantizando que ningún participante se asigne a sí mismo.

## Tabla de Contenidos

* [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
* [Funcionalidades](#funcionalidades)
* [Posibles problemas y soluciones](#posibles-problemas-y-soluciones)
* [Contribución](#contribución)
* [Créditos](#créditos)

## Cómo ejecutar el proyecto

1.  **Clonación (si aplica):** Si este proyecto está en un repositorio de GitHub, clónalo a tu máquina local utilizando:
    ```bash
    git clone <URL_del_repositorio>
    ```
2.  **Apertura:** Abre el archivo `index.html` en tu navegador web preferido.

## Funcionalidades

* **Añadir participantes:** Los usuarios pueden ingresar nombres y agregarlos a una lista de participantes.
* **Validación de nombres:** Se verifica que no se ingresen nombres vacíos o duplicados.
* **Sorteo robusto:** El algoritmo de asignación asegura que ningún participante se regale a sí mismo.
* **Visualización de resultados:** Las parejas del amigo secreto se muestran de forma clara en la página.

## Posibles problemas y soluciones

* **Error de "Se esperaba una expresión":** Al declarar la lista de amigos, asegúrate de inicializarla como un array vacío: `const listaDeAmigos =;`. Un error común es olvidarse de los corchetes.
* **No se ven los cambios en GitHub:** Recuerda que después de hacer commits localmente en VS Code, debes usar el comando `git push origin main` (o tu rama principal) para que tus cambios se reflejen en GitHub.
* **El botón "Añadir" no funciona:** Verifica en la consola del navegador (F12) si hay algún error de JavaScript. Asegúrate de que la función `agregarAmigo()` esté correctamente definida y que el evento del botón esté enlazado a ella.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama con tu contribución: `git checkout -b mi-nueva-funcionalidad`
3.  Realiza tus cambios y haz commit: `git commit -am 'Añade nueva funcionalidad'`
4.  Sube los cambios a tu fork: `git push origin mi-nueva-funcionalidad`
5.  Crea un pull request.

## Créditos

Este proyecto fue desarrollado como parte de un desafío de lógica de programación del programa ONE de Oracle 