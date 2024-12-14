// Lista de ubicaciones con nombres y coordenadas
const locations = [
  { name: "Torre Eiffel", latitude: 48.8584, longitude: 2.2945 },
  { name: "Estatua de la Libertad", latitude: 40.6892, longitude: -74.0445 },
  { name: "Big Ben", latitude: 51.5007, longitude: -0.1246 },
  { name: "Pirámides de Giza", latitude: 29.9792, longitude: 31.1342 },
  { name: "Ópera de Sídney", latitude: -33.8568, longitude: 151.2153 },
  { name: "Machu Picchu", latitude: -13.1631, longitude: -72.545 },
];

const apiKey = "TU_API_KEY"; // Reemplaza con tu clave API de OpenRouteService

// Crear el mapa centrado en una vista general
const map = L.map("map").setView([20, 0], 2);

// Añadir capa de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Añadir marcadores
locations.forEach((location) => {
  const marker = L.marker([location.latitude, location.longitude])
    .addTo(map)
    .bindPopup(`<b>${location.name}</b><br>Haz clic para generar una ruta.`);

  // Evento al hacer clic en un marcador
  marker.on("click", function () {
    if (confirm("¿Quieres usar tu ubicación actual como punto de inicio?")) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Construir la URL de la API
            const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userLng},${userLat}&end=${location.longitude},${location.latitude}`;

            // Mostrar URL de depuración
            console.log("URL de la API:", url);

            // Solicitar la ruta
            fetch(url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`Error en la solicitud: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => {
                const route = data.features[0];
                const coordinates = route.geometry.coordinates;
                const distance = (
                  route.properties.segments[0].distance / 1000
                ).toFixed(2);
                const duration = (
                  route.properties.segments[0].duration / 60
                ).toFixed(2);

                // Mostrar la información de la ruta
                const routeInfo = document.getElementById("routeInfo");
                routeInfo.innerHTML = `
                        <li><b>Desde:</b> Tu ubicación actual</li>
                        <li><b>Hasta:</b> ${location.name}</li>
                        <li><b>Distancia:</b> ${distance} km</li>
                        <li><b>Duración:</b> ${duration} minutos</li>
                      `;

                // Dibujar la ruta en el mapa
                const latLngs = coordinates.map((coord) => [
                  coord[1],
                  coord[0],
                ]);
                const polyline = L.polyline(latLngs, { color: "blue" }).addTo(
                  map
                );
                map.fitBounds(polyline.getBounds());
              })
              .catch((error) => {
                console.error("Error al obtener la ruta:", error.message);
                alert(`No se pudo generar la ruta. Error: ${error.message}`);
              });
          },
          function (error) {
            alert(
              "No se pudo obtener tu ubicación. Asegúrate de permitir el acceso a la geolocalización."
            );
            console.error("Error al obtener la ubicación del usuario:", error);
          }
        );
      } else {
        alert("Tu navegador no soporta la geolocalización.");
      }
    }
  });
});
