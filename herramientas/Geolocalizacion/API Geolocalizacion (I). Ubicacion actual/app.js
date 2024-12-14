const locations = [
  { name: "Torre Eiffel", latitude: 48.8584, longitude: 2.2945 },
  { name: "Estatua de la Libertad", latitude: 40.6892, longitude: -74.0445 },
  { name: "Big Ben", latitude: 51.5007, longitude: -0.1246 },
  { name: "Pirámides de Giza", latitude: 29.9792, longitude: 31.1342 },
  { name: "Ópera de Sídney", latitude: -33.8568, longitude: 151.2153 },
  { name: "Machu Picchu", latitude: -13.1631, longitude: -72.545 },
  { name: "Gran Muralla China", latitude: 40.4319, longitude: 116.5704 },
  { name: "Taj Mahal", latitude: 27.1751, longitude: 78.0421 },
  { name: "Coliseo de Roma", latitude: 41.8902, longitude: 12.4922 },
  { name: "Monte Fuji", latitude: 35.3606, longitude: 138.7274 },
];

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Crear el mapa centrado en la ubicación del usuario
      const map = L.map("map").setView([latitude, longitude], 13);

      // Añadir capa de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Añadir marcador para la ubicación del usuario
      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("Estás aquí.")
        .openPopup();

      // Añadir marcadores para las ubicaciones adicionales
      locations.forEach((location) => {
        L.marker([location.latitude, location.longitude])
          .addTo(map)
          .bindPopup(`<b>${location.name}</b>`);
      });
    },
    function (error) {
      // Si hay un error al obtener la ubicación
      const mapDiv = document.getElementById("map");
      mapDiv.innerHTML =
        "<p style='color: red; font-size: 18px; text-align: center;'>Error de conexión: No se pudo obtener la ubicación.</p>";
      console.error("Error al obtener la geolocalización:", error.message);
    }
  );
} else {
  // Si el navegador no soporta geolocalización
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML =
    "<p style='color: red; font-size: 18px; text-align: center;'>Error de conexión: La geolocalización no es soportada por este navegador.</p>";
  console.error("Geolocalización no soportada.");
}
