
# Mapa con Rutas Dinámicas en Leaflet

Este proyecto muestra cómo crear un mapa interactivo utilizando la biblioteca **Leaflet.js**. 
El mapa permite mostrar ubicaciones predefinidas y, al hacer clic en alguna de ellas, 
preguntar al usuario si desea utilizar su ubicación actual como punto de inicio para generar una ruta dinámica.

---

## Explicación Detallada

### 1. **Mapa Inicial**
- El mapa se crea centrado en las coordenadas `[20, 0]` con un nivel de zoom `2` para abarcar una vista general de todas las ubicaciones.
- Se usa la API de OpenStreetMap para cargar los tiles con detalles de calles y mapas.

### 2. **Ubicaciones Predefinidas**
- El array `locations` contiene coordenadas y nombres de lugares icónicos.
- Cada elemento del array genera un marcador en el mapa mediante `L.marker`.

### 3. **Marcadores y Popups**
- Al hacer clic en un marcador, se abre un cuadro de confirmación (`confirm`) preguntando si se desea usar la ubicación actual como punto de inicio.

### 4. **Confirmación del Usuario**
- Si el usuario acepta:
  - Se intenta obtener la ubicación actual del usuario usando `navigator.geolocation.getCurrentPosition`.
  - Si se obtiene con éxito, se genera una ruta desde su ubicación actual hasta la ubicación seleccionada.

- Si no acepta:
  - No se realiza ninguna acción.

### 5. **Generación de Rutas**
- Usamos el plugin **Leaflet Routing Machine** para establecer rutas dinámicas:
  - Punto de inicio: Coordenadas del usuario (si acepta usar su ubicación).
  - Punto final: Coordenadas del marcador seleccionado.
- El panel de rutas está deshabilitado (`show: false`), pero la ruta es visible en el mapa.

### 6. **Manejo de Errores**
- Si no se puede obtener la ubicación:
  - Se muestra un mensaje de error en un `alert`.
  - Se maneja el caso en el que el navegador no soporta geolocalización.

---


## Resultado Esperado

1. Al abrir el mapa:
   - Se muestran los marcadores de las ubicaciones predefinidas.
2. Al hacer clic en un marcador:
   - Aparece un cuadro de diálogo que pregunta si deseas usar tu ubicación actual.
   - Si aceptas:
     - Se genera una ruta desde tu ubicación actual hasta el marcador seleccionado.
   - Si no aceptas:
     - No se realiza ninguna acción.

---

## Recursos Adicionales

- [Documentación de Leaflet.js](https://leafletjs.com/)
- [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)
- [OpenStreetMap](https://www.openstreetmap.org/)

---

