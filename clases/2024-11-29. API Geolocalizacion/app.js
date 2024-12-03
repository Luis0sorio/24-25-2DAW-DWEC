if ("geolocation" in navigator) {
    console.log("La API de geolocalización está disponible.");
} else {
    console.error("La API de geolocalización no es compatible con este navegador.");
}
// let coordenadas = [null, null];
// Llamada para recoger la ubicacion actual
navigator.geolocation.getCurrentPosition(
    //Si es correcto
    function (position) {
        // coordenadas[0] = position.coords.latitude;
        // coordenadas[1] = position.coords.longitude;
        console.log("Latitud:", position.coords.latitude);
        console.log("Longitud:", position.coords.longitude);
        /**
         * A partir de aqui usamos Leaflet como servicio de mapas Open Source
         */
        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('Esto es el Juan de la Cierva')
        .openPopup();

        L.marker([40.402453942916715, -3.7064730865052073]).addTo(map)
        .bindPopup('Esto es el verdadero Juan de la Cierva')
        .openPopup();
        
    },
    // Si da error
    function (error) {
        console.error("Error al obtener la ubicación:", error.message);
        if (error.code === 1) {
            console.log("Permiso denegado.");
        } else if (error.code === 2) {
            console.log("No se pudo determinar la ubicación.");
        } else if (error.code === 3) {
            console.log("Tiempo de espera agotado.");
        }
    },
    // Otras opciones
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
);

