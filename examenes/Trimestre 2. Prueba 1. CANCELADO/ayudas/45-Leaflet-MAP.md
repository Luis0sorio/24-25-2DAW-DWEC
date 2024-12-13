
# Propiedades y Métodos del Map en Leaflet

## Map (`L.map`)

La clase `L.map` es la clase principal en Leaflet, utilizada para crear y gestionar la instancia de un mapa interactivo. 

Sirve como el contenedor principal para capas, controles e interacciones.

### **Sintaxis**
```javascript
L.map(id, options)
```
- **id**: El ID del elemento HTML donde se renderizará el mapa.
- **options**: Un objeto opcional para configurar el comportamiento y los aspectos visuales del mapa.

### **Detalles**
| **Opción**           | **Descripción**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `center`             | El centro inicial del mapa como `[latitud, longitud]`.                          |
| `zoom`               | Nivel de zoom inicial del mapa.                                                 |
| `minZoom`            | Nivel mínimo de zoom permitido.                                                 |
| `maxZoom`            | Nivel máximo de zoom permitido.                                                 |
| `layers`             | Array de capas que se añadirán inicialmente.                                    |
| `zoomControl`        | Activa o desactiva los controles de zoom por defecto (`true` por defecto).       |
| `dragging`           | Activa o desactiva el arrastre del mapa.                                         |
| `scrollWheelZoom`    | Permite hacer zoom en el mapa con la rueda del ratón (`true` o `false`).         |
| `doubleClickZoom`    | Activa el zoom con doble clic.                                                   |
| `touchZoom`          | Activa el zoom con gestos táctiles.                                             |
| `keyboard`           | Activa la navegación con el teclado para el mapa.                               |
| `zoomAnimation`      | Activa animaciones suaves al hacer zoom.                                        |

### **Ejemplo**
```javascript
const map = L.map('map', {
    center: [40.4, -3.7],
    zoom: 13,
    zoomControl: true,
    dragging: true
});
```

---

## `setView()`

### **Descripción**
Centra el mapa en una ubicación especificada con un nivel de zoom dado.

### **Sintaxis**
```javascript
map.setView(latlng, zoom, options);
```
- **latlng**: Un array `[latitud, longitud]` que especifica el nuevo centro.
- **zoom**: El nivel de zoom deseado.
- **options**: Objeto opcional con opciones de animación.

### **Ejemplo**
```javascript
map.setView([40.4, -3.7], 10, { animate: true, duration: 0.5 });
```

---

## `addLayer()`

### **Descripción**
Añade una capa (como una capa de mosaicos o un marcador) al mapa.

### **Sintaxis**
```javascript
map.addLayer(layer);
```
- **layer**: Una capa válida de Leaflet para añadir.

### **Ejemplo**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(tileLayer);
```

---

## `removeLayer()`

### **Descripción**
Elimina una capa del mapa.

### **Sintaxis**
```javascript
map.removeLayer(layer);
```

### **Ejemplo**
```javascript
map.removeLayer(tileLayer);
```

---

## `panTo()`

### **Descripción**
Desplaza el mapa a un nuevo centro.

### **Sintaxis**
```javascript
map.panTo(latlng, options);
```

### **Ejemplo**
```javascript
map.panTo([40.5, -3.6], { animate: true, duration: 0.5 });
```

---

## `fitBounds()`

### **Descripción**
Ajusta el mapa para que se encaje dentro de los límites de un área específica.

### **Sintaxis**
```javascript
map.fitBounds(bounds, options);
```
- **bounds**: Un objeto `LatLngBounds` o un array de dos coordenadas.

### **Ejemplo**
```javascript
map.fitBounds([[40.4, -3.8], [40.5, -3.6]]);
```

---

## `invalidateSize()`

### **Descripción**
Ajusta el tamaño del mapa después de cambios en su contenedor.

### **Sintaxis**
```javascript
map.invalidateSize(options);
```

### **Ejemplo**
```javascript
map.invalidateSize();
```

---

## `getZoom()`

### **Descripción**
Devuelve el nivel de zoom actual del mapa.

### **Sintaxis**
```javascript
map.getZoom();
```

### **Ejemplo**
```javascript
console.log("Nivel de Zoom Actual:", map.getZoom());
```

---

## **Métodos y Funciones Adicionales del Mapa**

### **Acercar/Alejar**
Acerca o aleja manualmente el mapa.

```javascript
map.zoomIn();
map.zoomOut();
```

---

### **Manejo de Eventos**
Asocia eventos al mapa para agregar interactividad.

```javascript
map.on('click', function (e) {
    alert(`Hiciste clic en el mapa en ${e.latlng}`);
});
```

---

### **Capas de Mosaicos**
Añade una capa de mosaicos para representar el mapa.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);
```

---

### **Controles del Mapa**
Añade controles personalizados al mapa.

```javascript
L.control.scale().addTo(map); // Añade una barra de escala
```

---

### **Desactivar Interacciones**
Desactiva interacciones específicas del mapa.

```javascript
map.dragging.disable();
map.scrollWheelZoom.disable();
```

---

### **Eventos del Mapa**
Responde a diferentes eventos relacionados con el mapa.

| **Evento**       | **Descripción**                                   |
|------------------|--------------------------------------------------|
| `click`         | Se activa cuando el usuario hace clic en el mapa. |
| `zoomstart`     | Se activa al comenzar a cambiar el zoom.          |
| `zoomend`       | Se activa cuando el nivel de zoom ha cambiado.    |
| `move`          | Se activa cuando el mapa ha sido arrastrado.      |

```javascript
map.on('zoomend', function () {
    console.log("El nivel de zoom ha cambiado a", map.getZoom());
});
```
