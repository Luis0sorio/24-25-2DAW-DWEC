// Selección de elementos del DOM
const notificacionesList = document.getElementById("notificaciones-list");
const progressBar = document.getElementById("progress-bar");
const mapContainer = document.getElementById("map");
const popup = document.getElementById("popup"); // Popup personalizado
const popupContent = popup.querySelector(".popup-content");
const LONGITUD_MADRID = -3.703790;
const LATITUD_MADRID = 40.416775;
const ZOOM_PREDETERMINADO = 13;
let map = null;

/**
 * Función que recibe un mensaje para mostrar en el panel de notificaciones
 * @param {string} mensaje 
 */
function agregarNotificacion(mensaje) {
    const li = document.createElement("li");
    const now = new Date();
    li.textContent = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}] ${mensaje}`;
    notificacionesList.appendChild(li);
}

/**
 * Función que recibe un mensaje para mostrar en el popup.
 * @param {string} infoHTML 
 */
function mostrarPopup(infoHTML) {
    popupContent.innerHTML = infoHTML; // Insertar contenido en el popup
    popup.style.display = "flex"; // Mostrar popup
}


/**
 * Se agrega el evento click para cerrar el popup.
 * NOTA: no está completo.
 */
popup.addEventListener("click", (event) => {
    popup.style.display = "none"; // Cerrar popup
});

// Función para realizar solicitudes AJAX controladas
function realizarSolicitudSincronica(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); // Solicitud asincrónica

    xhr.onloadstart = function () {
        progressBar.style.width = "0%";
        agregarNotificacion("PETICION: Iniciando solicitud al servidor: " + progressBar.style.width);
    };

    xhr.onloadend = function () {
        progressBar.style.width = "100%";
        agregarNotificacion("PETICION: Solicitud al servidor finalizada: " + progressBar.style.width);
    };

    // Seguimiento del progreso
    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            const porcentaje = (event.loaded / event.total) * 100;
            progressBar.style.width = `${porcentaje}%`;
            agregarNotificacion(`DATOS: Progreso: ${Math.round(porcentaje)}%`);
        } else {
            agregarNotificacion(`DATOS: No es posible calcular el progreso: ${event.loaded} bytes completados`);
        }
    };

    // Manejo de eventos de estado
    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            case 2:
                agregarNotificacion(`PETICION: Estado 2 - Solicitud recibida por el servidor.`);
                break;
            case 3:
                agregarNotificacion(`PETICION: Estado 3 - Procesando respuesta del servidor.`);
                break;
            case 4:
                agregarNotificacion(`PETICION: Estado 4 - Solicitud completada.`);
                if (xhr.status === 200) {
                    agregarNotificacion("PETICION: Datos recibidos correctamente.");
                    procesarRespuesta(JSON.parse(xhr.responseText));
                } else if (xhr.status === 500) {
                    agregarNotificacion("CODIGO 500: Problemas internos en el servidor.");
                    // mostrarErrorPopup("El servidor tiene problemas internos (Error 500). Por favor, inténtalo más tarde.");
                } else if (xhr.status === 404) {
                    agregarNotificacion("CODIGO 404: El recurso solicitado no fue encontrado.");
                    // mostrarErrorPopup("El recurso solicitado no existe (Error 404). Verifica la URL.");
                } else {
                    agregarNotificacion(`CODIGO ${xhr.status}: ${xhr.statusText}`);
                    // mostrarErrorPopup(`Se produjo un error desconocido: ${xhr.statusText}`);
                }
                break;
        }
    };

    // Manejo de errores de red
    xhr.onerror = function () {
        agregarNotificacion("ERROR: Error de red al realizar la solicitud. Verifica tu conexión a Internet.");
        // mostrarErrorPopup("No se pudo conectar al servidor. Verifica tu conexión a Internet.");
    };

    xhr.ontimeout = function () {
        agregarNotificacion("ERROR: La solicitud ha excedido el tiempo límite.");
        // mostrarErrorPopup("La solicitud al servidor tardó demasiado. Inténtalo nuevamente más tarde.");
    };

    xhr.timeout = 10000; // Tiempo límite de 10 segundos
    xhr.send();
}

// Evento de carga inicial de la aplicación
document.addEventListener("DOMContentLoaded", function () {
    
});

