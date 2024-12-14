
# Explicación de un Mapa con Geolocalización Usando Leaflet.js

Este documento explica paso a paso cómo funciona el siguiente código para mostrar un mapa interactivo con la ubicación actual del usuario utilizando **Leaflet.js**.

---

## Código
```javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup("Estás aquí.")
      .openPopup();
  });
} else {
  console.log("Geolocalización no soportada.");
}
```

---

## Explicación

### 1. **Comprobar si el navegador soporta geolocalización**
```javascript
if ("geolocation" in navigator) {
```
- **¿Qué hace?**: Verifica si el navegador del usuario soporta la API de geolocalización.
- **¿Por qué es importante?**: No todos los navegadores o dispositivos soportan geolocalización. Si no está disponible, el programa no intentará usarla y evitará errores.

---

### 2. **Obtener la ubicación actual del usuario**
```javascript
navigator.geolocation.getCurrentPosition(function (position) {
```
- **¿Qué hace?**: Llama a la función `getCurrentPosition` para obtener la ubicación actual del usuario.
- **¿Cómo funciona?**: 
  - Esta función pide permiso al usuario para acceder a su ubicación.
  - Si el usuario acepta, ejecuta el código dentro de la función `function (position)`.

---

### 3. **Obtener la latitud y longitud**
```javascript
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
```
- **¿Qué hace?**: Extrae las coordenadas de la posición actual del usuario (latitud y longitud).
- **¿Por qué es útil?**: Estas coordenadas se usan para centrar el mapa y colocar un marcador en la posición exacta del usuario.

---

### 4. **Crear el mapa centrado en la ubicación del usuario**
```javascript
var map = L.map('map').setView([latitude, longitude], 13);
```
- **¿Qué hace?**:
  - Crea un mapa usando Leaflet.
  - Lo centra en las coordenadas del usuario (`latitude` y `longitude`).
  - Ajusta el nivel de zoom a `13` (un nivel intermedio, adecuado para ver detalles en una ciudad).
- **¿Por qué es útil?**: Hace que el mapa muestre directamente la ubicación actual del usuario.

---

### 5. **Agregar los "tiles" del mapa**
```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
```
- **¿Qué hace?**:
  - Añade los "tiles" (las imágenes que componen el mapa) desde OpenStreetMap, una base de mapas gratuita y de código abierto.
  - Muestra un texto de atribución para dar crédito a OpenStreetMap.
- **¿Por qué es útil?**: Sin esta capa, el mapa sería un espacio en blanco, ya que los "tiles" son los que muestran las calles, carreteras, etc.

---

### 6. **Colocar un marcador en la ubicación del usuario**
```javascript
L.marker([latitude, longitude]).addTo(map)
```
- **¿Qué hace?**:
  - Crea un marcador en el mapa en las coordenadas del usuario.
  - Lo añade al mapa con `.addTo(map)`.
- **¿Por qué es útil?**: Sirve para señalar visualmente dónde está el usuario en el mapa.

---

### 7. **Añadir un mensaje emergente al marcador**
```javascript
.bindPopup("Estás aquí.")
.openPopup();
```
- **¿Qué hace?**:
  - Vincula un mensaje ("Estás aquí.") al marcador con `.bindPopup()`.
  - Muestra el mensaje inmediatamente con `.openPopup()`.
- **¿Por qué es útil?**: Mejora la experiencia del usuario al informar claramente que el marcador representa su ubicación actual.

---

### 8. **Si la geolocalización no está soportada**
```javascript
} else {
  console.log("Geolocalización no soportada.");
}
```
- **¿Qué hace?**:
  - Si el navegador no soporta la API de geolocalización, muestra un mensaje en la consola.
- **¿Por qué es útil?**: Informa al desarrollador que la funcionalidad no está disponible, evitando errores inesperados.

---

