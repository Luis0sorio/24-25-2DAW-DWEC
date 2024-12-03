// Selección de elementos del DOM
const notificacionesList = document.getElementById("notificaciones-list");
const progressBar = document.getElementById("progress-bar");
const mapContainer = document.getElementById("map");
const popup = document.getElementById("popup"); // Popup manual
const popupContent = popup.querySelector(".popup-content");

// Inicialización del mapa con Leaflet
const map = L.map(mapContainer).setView([40.416775, -3.703790], 13); // Madrid
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para agregar notificaciones con marcas de tiempo
function agregarNotificacion(mensaje) {
    const li = document.createElement("li");
    const now = new Date();
    li.textContent = `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}] ${mensaje}`;
    notificacionesList.appendChild(li);
}

// Función para agregar eventos y mostrar información detallada en el popup
function agregarEventoClickAlMarcador(marcador, info) {
    marcador.on("click", () => {
        popupContent.innerHTML = info;
        popup.style.display = "flex";
    });
}

// Función para cerrar el popup manual
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Función para realizar solicitudes AJAX con XMLHttpRequest
function realizarSolicitud(url, callback, errorCallback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "json";

    // Seguimiento del estado de readyState
    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            // case 0:
            //     agregarNotificacion(`Estado ${xhr.readyState}: Solicitud no iniciada.`);
            //     break;
            // case 1:
            //     agregarNotificacion(`Estado ${xhr.readyState}: Conexión establecida.`);
            //     break;
            case 2:
                agregarNotificacion(`Estado ${xhr.readyState}: Solicitud recibida por el servidor.`);
                break;
            case 3:
                agregarNotificacion(`Estado ${xhr.readyState}: Solicitud procesada por el servidor. Enviando datos.`);
                break;
            case 4:
                agregarNotificacion(`Estado ${xhr.readyState}: Solicitud completada.`);
                break;
            default:
                break;
        }
    };

    xhr.onloadstart = function () {
        progressBar.style.width = "0%";
        agregarNotificacion("Iniciando solicitud al servidor.");
    };

    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            const porcentaje = (event.loaded / event.total) * 100;
            progressBar.style.width = porcentaje + "%";
            agregarNotificacion(`Progreso: ${Math.round(porcentaje)}%`);
        }
    };

    xhr.onload = function () {
        progressBar.style.width = "100%";
        if (xhr.status === 200) {
            callback(xhr.response);
        } else {
            errorCallback(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    };

    xhr.onerror = function () {
        errorCallback("Error de red. No se pudo completar la solicitud.");
    };

    xhr.ontimeout = function () {
        errorCallback("La solicitud ha excedido el tiempo límite.");
    };

    xhr.timeout = 10000; // Tiempo límite de 10 segundos
    xhr.send();
}

// Función para agregar marcadores en el mapa
function agregarMarcador(lat, lon, titulo, iconUrl, info) {
    const icono = L.icon({
        iconUrl: iconUrl,
        iconSize: [30, 30],
    });
    const marcador = L.marker([lat, lon], { icon: icono }).addTo(map);
    marcador.bindPopup(titulo); // Popup básico de Leaflet
    agregarEventoClickAlMarcador(marcador, info); // Evento para popup personalizado
}

// Solicitud de datos de API de Wikidata
function cargarDatosDeLugares() {
    const url = "https://query.wikidata.org/sparql?query=" + encodeURIComponent(`
        SELECT ?item ?itemLabel ?coord WHERE {
          ?item wdt:P1435 wd:Q9259.
          ?item wdt:P625 ?coord.
          SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }
    `) + "&format=json";

    realizarSolicitud(url, function (data) {
        const lugares = data.results.bindings;
        lugares.forEach((lugar) => {
            const coords = lugar.coord.value.replace("Point(", "").replace(")", "").split(" ");
            const lat = parseFloat(coords[1]);
            const lon = parseFloat(coords[0]);
            const titulo = lugar.itemLabel.value;
            const info = `
                <strong>${titulo}</strong><br>
                Coordenadas: [${lat}, ${lon}]<br>
                ID del lugar: <a href="${lugar.item.value}" target="_blank">${lugar.item.value}</a>
            `;
            agregarMarcador(lat, lon, titulo, "https://cdn-icons-png.flaticon.com/512/252/252025.png", info);
        });
        agregarNotificacion("Datos de lugares cargados correctamente.");
    }, function (error) {
        agregarNotificacion(error);
    });
}

// Geolocalización del usuario con manejo mejorado de errores
function obtenerUbicacionUsuario() {
    if ("geolocation" in navigator) {
        console.log("La API de geolocalización está disponible.");
        agregarNotificacion("La API de geolocalización está disponible.");
    } else {
        console.error("La API de geolocalización no es compatible con este navegador.");
        agregarNotificacion("La API de geolocalización no es compatible con este navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const info = `
            <strong>Tu ubicación</strong><br>
            Coordenadas: [${lat}, ${lon}]
        `;
        agregarMarcador(lat, lon, "Tu ubicación", "https://cdn-icons-png.flaticon.com/512/69/69524.png", info);
        agregarNotificacion("Ubicación obtenida correctamente.");
    }, function (error) {
        console.error("Error al obtener la ubicación:", error.message);
        if (error.code === 1) {
            agregarNotificacion("Permiso denegado por el usuario.");
        } else if (error.code === 2) {
            agregarNotificacion("No se pudo determinar la ubicación.");
        } else if (error.code === 3) {
            agregarNotificacion("Tiempo de espera agotado.");
        }
    });
}

// Carga inicial
document.addEventListener("DOMContentLoaded", function () {
    cargarDatosDeLugares();
    obtenerUbicacionUsuario();
});
