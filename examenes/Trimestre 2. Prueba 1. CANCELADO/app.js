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

// Evento de carga inicial de la aplicación
document.addEventListener("DOMContentLoaded", function () {
    
});

