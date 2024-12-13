
# Propiedades y Métodos de TileLayer en Leaflet

## TileLayer (`L.tileLayer`)

La clase `L.tileLayer` se utiliza para añadir capas de mapas basadas en mosaicos a un mapa Leaflet. Obtiene y renderiza mosaicos de mapas desde una plantilla de URL especificada.

### **Sintaxis**
```javascript
L.tileLayer(urlTemplate, options)
```
- **urlTemplate**: Una plantilla de cadena que especifica el patrón de URL para obtener los mosaicos del mapa. Los marcadores (`{x}`, `{y}`, `{z}`, etc.) se reemplazarán con valores apropiados.
- **options**: Un objeto opcional para configurar el comportamiento de la capa.

### **Detalles**
| **Opción**           | **Descripción**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `maxZoom`            | Nivel máximo de zoom para esta capa de mosaicos.                               |
| `minZoom`            | Nivel mínimo de zoom para esta capa de mosaicos.                               |
| `attribution`        | Texto para mostrar la atribución de la fuente del mosaico.                     |
| `tileSize`           | Tamaño de los mosaicos en píxeles (por defecto: `256`).                        |
| `bounds`             | Restringe la capa a un área geográfica específica (`LatLngBounds`).            |
| `opacity`            | Establece la opacidad de los mosaicos (0 a 1).                                 |
| `zIndex`             | Controla el orden de apilamiento de los mosaicos.                              |
| `errorTileUrl`       | URL del mosaico a mostrar cuando el mosaico solicitado falla al cargarse.       |
| `updateWhenIdle`     | Actualiza los mosaicos solo cuando el mapa deja de moverse (por defecto: `true`).|
| `detectRetina`       | Carga mosaicos de alta resolución para pantallas Retina (por defecto: `false`). |
| `subdomains`         | Array de subdominios desde donde cargar mosaicos (por ejemplo, `['a', 'b', 'c']`).|

### **Ejemplo**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
});
tileLayer.addTo(map);
```

---

## `addTo()`

### **Descripción**
Agrega la capa de mosaicos al mapa especificado.

### **Sintaxis**
```javascript
tileLayer.addTo(map);
```
- **map**: La instancia del mapa Leaflet donde se añadirá la capa de mosaicos.

### **Ejemplo**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
tileLayer.addTo(map);
```

---

## `setOpacity()`

### **Descripción**
Establece la opacidad de la capa de mosaicos.

### **Sintaxis**
```javascript
tileLayer.setOpacity(opacity);
```
- **opacity**: Un número entre `0` (completamente transparente) y `1` (completamente opaco).

### **Ejemplo**
```javascript
tileLayer.setOpacity(0.5); // Hace que los mosaicos sean 50% transparentes.
```

---

## `setZIndex()`

### **Descripción**
Establece el orden de apilamiento (z-index) de la capa de mosaicos.

### **Sintaxis**
```javascript
tileLayer.setZIndex(zIndex);
```
- **zIndex**: El nuevo orden de apilamiento para los mosaicos.

### **Ejemplo**
```javascript
tileLayer.setZIndex(1000); // Asegura que la capa de mosaicos esté encima de otras capas.
```

---

## `setUrl()`

### **Descripción**
Actualiza dinámicamente la plantilla de URL para la capa de mosaicos.

### **Sintaxis**
```javascript
tileLayer.setUrl(urlTemplate, noRedraw);
```
- **urlTemplate**: La nueva plantilla de URL para los mosaicos.
- **noRedraw**: Si es `true`, evita que los mosaicos se redibujen inmediatamente.

### **Ejemplo**
```javascript
tileLayer.setUrl('https://another-server/{z}/{x}/{y}.png');
```

---

## **Características Adicionales de la Capa de Mosaicos**

### **Manejo de Errores en los Mosaicos**
Muestra un mosaico de respaldo cuando la carga falla.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    errorTileUrl: 'https://example.com/error-tile.png'
}).addTo(map);
```

---

### **Restringir los Límites de la Capa**
Restringe la capa de mosaicos a límites geográficos específicos.

```javascript
const bounds = L.latLngBounds([[40.0, -3.8], [41.0, -3.6]]);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    bounds: bounds
}).addTo(map);
```

---

### **Detectar Pantallas Retina**
Carga automáticamente mosaicos de alta resolución para pantallas Retina.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true
}).addTo(map);
```

---

### **Subdominios Personalizados**
Distribuye las solicitudes de mosaicos entre múltiples subdominios.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: ['a', 'b', 'c']
}).addTo(map);
```

---

### **Ajuste del Tamaño de los Mosaicos**
Establece un tamaño de mosaico personalizado.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    tileSize: 512
}).addTo(map);
```

---

### **Eventos de la Capa de Mosaicos**
Asocia eventos a la capa de mosaicos.

| **Evento**       | **Descripción**                                   |
|------------------|--------------------------------------------------|
| `loading`       | Se activa cuando se están cargando nuevos mosaicos.|
| `tileloadstart` | Se activa cuando comienza a cargarse un mosaico.  |
| `tileload`      | Se activa cuando un mosaico se carga con éxito.   |
| `tileerror`     | Se activa cuando un mosaico falla al cargarse.    |

```javascript
tileLayer.on('tileerror', function (e) {
    console.log("Error al cargar el mosaico:", e);
});
```
