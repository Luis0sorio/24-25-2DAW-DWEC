# Resumen

| Evento             | Descripción                                                 | Ejemplo                                                           | Elemento             |
|--------------------|-------------------------------------------------------------|-------------------------------------------------------------------|-----------------------|
| **click**          | Ocurre al hacer clic en un elemento.                        | `<button id="btn">Button</button>`<br> `btn.addEventListener("click", ...)` | Cualquier elemento   |
| **dblclick**       | Se activa con doble clic.                                   | `<button id="btn">Button</button>`<br> `btn.addEventListener("dblclick", ...)` | Cualquier elemento   |
| **mousedown**      | Al presionar el botón del ratón.                            | `<div id="box">Box</div>`<br> `box.addEventListener("mousedown", ...)`      | Cualquier elemento   |
| **mouseup**        | Al soltar el botón del ratón.                               | `<div id="box">Box</div>`<br> `box.addEventListener("mouseup", ...)`         | Cualquier elemento   |
| **mouseenter**     | Al entrar el puntero al área de un elemento.                | `<img id="image" src="image.jpg">`<br> `image.addEventListener("mouseenter", ...)` | Cualquier elemento   |
| **mouseleave**     | Al salir el puntero del área de un elemento.                | `<img id="image" src="image.jpg">`<br> `image.addEventListener("mouseleave", ...)` | Cualquier elemento   |
| **mousemove**      | Al mover el ratón sobre un elemento.                        | `<canvas id="canvas"></canvas>`<br> `canvas.addEventListener("mousemove", ...)` | Cualquier elemento   |
| **mouseover**      | Al pasar el puntero sobre un elemento/hijo.                 | `<img id="image" src="image.jpg">`<br> `image.addEventListener("mouseover", ...)` | Cualquier elemento   |
| **mouseout**       | Al salir el puntero de un elemento/hijo.                    | `<img id="image" src="image.jpg">`<br> `image.addEventListener("mouseout", ...)` | Cualquier elemento   |
| **contextmenu**    | Al hacer clic derecho (menú contextual).                    | `<div id="box">Box</div>`<br> `box.addEventListener("contextmenu", ...)`   | Cualquier elemento   |
| **wheel**          | Al desplazar la rueda del ratón.                            | `<div id="scrollable">Content</div>`<br> `scrollable.addEventListener("wheel", ...)` | Cualquier elemento   |
| **keydown**        | Al presionar una tecla.                                     | `<input id="inputField">`<br> `inputField.addEventListener("keydown", ...)`  | `document`           |
| **keypress**       | Tecla presionada y mantenida (descontinuado).               | `<input id="inputField">`<br> `inputField.addEventListener("keypress", ...)` | `document`           |
| **keyup**          | Al soltar una tecla.                                        | `<input id="inputField">`<br> `inputField.addEventListener("keyup", ...)`    | `document`           |
| **touchstart**     | Al tocar la pantalla.                                       | `<div id="touchArea">Touch</div>`<br> `touchArea.addEventListener("touchstart", ...)` | Cualquier elemento   |
| **touchmove**      | Al mover el dedo en la pantalla.                            | `<div id="touchArea">Touch</div>`<br> `touchArea.addEventListener("touchmove", ...)` | Cualquier elemento   |
| **touchend**       | Al retirar el dedo de la pantalla.                          | `<div id="touchArea">Touch</div>`<br> `touchArea.addEventListener("touchend", ...)` | Cualquier elemento   |
| **touchcancel**    | Al cancelar la acción táctil.                               | `<div id="touchArea">Touch</div>`<br> `touchArea.addEventListener("touchcancel", ...)` | Cualquier elemento   |
| **submit**         | Al enviar un formulario.                                    | `<form id="myForm">Form</form>`<br> `myForm.addEventListener("submit", ...)` | `<form>`             |
| **reset**          | Al restablecer un formulario.                               | `<form id="myForm">Form</form>`<br> `myForm.addEventListener("reset", ...)`  | `<form>`             |
| **focus**          | Al recibir foco un campo.                                   | `<input id="inputField">`<br> `inputField.addEventListener("focus", ...)`    | Cualquier elemento   |
| **blur**           | Al perder foco un campo.                                    | `<input id="inputField">`<br> `inputField.addEventListener("blur", ...)`     | Cualquier elemento   |
| **change**         | Al cambiar el valor de un elemento.                         | `<select id="dropdown">Select</select>`<br> `dropdown.addEventListener("change", ...)` | Campos de entrada    |
| **input**          | Al modificar el valor de un campo de texto.                 | `<input id="inputField">`<br> `inputField.addEventListener("input", ...)`    | Campos de entrada    |
| **DOMContentLoaded** | Cuando el DOM está completamente cargado.               | `<body>`<br> `document.addEventListener("DOMContentLoaded", ...)`           | `document`           |
| **load**           | Cuando todos los recursos se han cargado.                   | `<body>`<br> `window.addEventListener("load", ...)`                         | `window`             |
| **beforeunload**   | Al abandonar la página.                                     | `<body>`<br> `window.addEventListener("beforeunload", ...)`                 | `window`             |
| **unload**         | Al descargar la página.                                     | `<body>`<br> `window.addEventListener("unload", ...)`                       | `window`             |
| **resize**         | Al cambiar el tamaño de la ventana.                         | `<body>`<br> `window.addEventListener("resize", ...)`                       | `window`             |
| **scroll**         | Al desplazarse en la página o elemento con scroll.          | `<div id="scrollable">Content</div>`<br> `scrollable.addEventListener("scroll", ...)` | `window`             |
| **play**           | Al iniciar la reproducción de un medio.                     | `<video id="video">Video</video>`<br> `video.addEventListener("play", ...)` | Elementos multimedia |
| **pause**          | Al pausar la reproducción de un medio.                      | `<video id="video">Video</video>`<br> `video.addEventListener("pause", ...)`| Elementos multimedia |
| **ended**          | Al finalizar la reproducción de un medio.                   | `<video id="video">Video</video>`<br> `video.addEventListener("ended", ...)`| Elementos multimedia |
| **timeupdate**     | Actualización del tiempo en la reproducción.                | `<video id="video">Video</video>`<br> `video.addEventListener("timeupdate", ...)` | Elementos multimedia |
| **volumechange**   | Al cambiar el volumen.                                      | `<video id="video">Video</video>`<br> `video.addEventListener("volumechange", ...)` | Elementos multimedia |
| **error**          | Al ocurrir un error en la carga de un elemento.             | `<img id="image" src="invalid.jpg">`<br> `image.addEventListener("error", ...)` | Cualquier elemento   |
| **copy**           | Al copiar contenido.                                        | `<body>`<br> `document.addEventListener("copy", ...)`                       | `document`           |
| **cut**            | Al cortar contenido.                                        | `<body>`<br> `document.addEventListener("cut", ...)`                        | `document`           |
| **paste**          | Al pegar contenido.                                         | `<body>`<br> `document.addEventListener("paste", ...)`                      | `document`           |
| **animationstart** | Al iniciar una animación CSS.                               | `<div id="animated">Div</div>`<br> `animated.addEventListener("animationstart", ...)` | Cualquier elemento   |
| **animationend**   | Al finalizar una animación CSS.                             | `<div id="animated">Div</div>`<br> `animated.addEventListener("animationend", ...)` | Cualquier elemento   |
| **transitionend**  | Al terminar una transición CSS.                             | `<div id="transit">Div</div>`<br> `transit.addEventListener("transitionend", ...)` | Cualquier elemento   |
| **online**         | Al restablecer la conexión a internet.                      | `<body>`<br> `window.addEventListener("online", ...)`                       | `window`             |
| **offline**        | Al perder la conexión a internet.                           | `<body>`<br> `window.addEventListener("offline", ...)`                      | `window`             |
