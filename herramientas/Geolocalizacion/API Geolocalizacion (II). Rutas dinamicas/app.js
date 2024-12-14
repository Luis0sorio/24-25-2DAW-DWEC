// Lista de ubicaciones con nombres y coordenadas
const locations = [
  { name: "Torre Eiffel", latitude: 48.8584, longitude: 2.2945 },
  { name: "Estatua de la Libertad", latitude: 40.6892, longitude: -74.0445 },
  { name: "Big Ben", latitude: 51.5007, longitude: -0.1246 },
  { name: "Pirámides de Giza", latitude: 29.9792, longitude: 31.1342 },
  { name: "Ópera de Sídney", latitude: -33.8568, longitude: 151.2153 },
  { name: "Machu Picchu", latitude: -13.1631, longitude: -72.545 },
];

// Crear el mapa centrado en una vista general de todas las ubicaciones
const map = L.map("map").setView([20, 0], 2);

// Añadir capa de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Configurar Leaflet Routing Machine
const routingControl = L.Routing.control({
  waypoints: [],
  routeWhileDragging: true,
  show: false, // Ocultar el panel de rutas por defecto
}).addTo(map);

// Añadir marcadores para las ubicaciones en el array
locations.forEach((location) => {
  const marker = L.marker([location.latitude, location.longitude])
    .addTo(map)
    .bindPopup(`<b>${location.name}</b><br>Haz clic para generar una ruta.`);

  // Evento al hacer clic en un marcador
  marker.on("click", function () {
    // Preguntar al usuario si desea usar su ubicación actual
    if (confirm("¿Quieres usar tu ubicación actual como punto de inicio?")) {
      // Obtener la ubicación actual del usuario
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Establecer la ruta desde la ubicación actual hasta el marcador seleccionado
            routingControl.setWaypoints([
              L.latLng(userLat, userLng), // Punto inicial: ubicación actual del usuario
              L.latLng(location.latitude, location.longitude), // Punto final: ubicación seleccionada
            ]);
          },
          function (error) {
            alert("No se pudo obtener tu ubicación. Verifica los permisos.");
          }
        );
      } else {
        alert("La geolocalización no es soportada por tu navegador.");
      }
    }
  });
});
