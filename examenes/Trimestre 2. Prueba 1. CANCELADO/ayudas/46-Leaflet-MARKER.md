# Propiedades y Métodos del Marker en Leaflet

## Marker (`L.marker`)

La clase `L.marker` se utiliza para crear marcadores en un mapa de Leaflet. 

Un marcador es una representación visual (típicamente un pin) colocado en coordenadas específicas.

### **Sintaxis**

```javascript
L.marker(latlng, options)
```

- **latlng**: Un array `[latitud, longitud]` que especifica la ubicación del marcador.
- **options**: Un objeto opcional para configurar el comportamiento y la apariencia del marcador.

### **Detalles**

| **Propiedad**  | **Descripción**                                              |
| -------------- | ------------------------------------------------------------ |
| `draggable`    | Permite arrastrar el marcador en el mapa.                    |
| `opacity`      | Establece la opacidad del marcador (0 a 1).                  |
| `icon`         | Especifica un icono personalizado para el marcador.          |
| `zIndexOffset` | Controla el orden de apilamiento de los marcadores.          |
| `autoPan`      | Si es `true`, desplaza el mapa cuando el marcador está cerca del borde. |

### **Ejemplo**

```javascript
L.marker([40.4, -3.7], { draggable: true, opacity: 0.8 }).addTo(map);
```

---

## `addTo()`

### **Descripción**

Agrega el marcador (u otras capas de Leaflet) a un mapa específico.

### **Sintaxis**

```javascript
marker.addTo(map);
```

- **map**: La instancia del mapa Leaflet donde se añadirá el marcador.

### **Ejemplo**

```javascript
L.marker([40.4, -3.7]).addTo(map);
```

---

## `bindPopup()`

### **Descripción**

Asocia un popup al marcador que mostrará un mensaje o contenido personalizado al hacer clic.

### **Sintaxis**

```javascript
marker.bindPopup(content, options);
```

- **content**: El contenido para mostrar dentro del popup. Puede ser una cadena, HTML o una función.
- **options**: Un objeto para personalizar el comportamiento del popup.

### **Ejemplo**

```javascript
L.marker([40.4, -3.7]).bindPopup("¡Hola, este es un popup!").addTo(map);
```

---

## `openPopup()`

### **Descripción**

Abre el popup asociado con el marcador. Útil para mostrar información automáticamente al crear el marcador.

### **Sintaxis**

```javascript
marker.openPopup();
```

### **Ejemplo**

```javascript
L.marker([40.4, -3.7]).bindPopup("Popup abierto automáticamente").addTo(map).openPopup();
```

---

## **Propiedades y Características Adicionales del Marcador**

### **Iconos Personalizados**

Usa iconos personalizados para reemplazar el marcador predeterminado.

```javascript
const customIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

L.marker([40.4, -3.7], { icon: customIcon }).addTo(map);
```

---

### **Manejo de Eventos**

Añade interactividad asociando eventos al marcador.

```javascript
L.marker([40.4, -3.7]).on('click', function () {
    alert("¡Marcador clicado!");
}).addTo(map);
```

---

### **Círculo Alrededor del Marcador**

Resalta un área alrededor del marcador.

```javascript
L.circle([40.4, -3.7], { radius: 100 }).addTo(map);
```

---

### **Tooltips**

Añade tooltips que muestren información adicional al pasar el ratón.

```javascript
L.marker([40.4, -3.7]).bindTooltip("Esto es un tooltip").addTo(map);
```

---

### **Agrupación**

Combina múltiples marcadores en clústeres.

```javascript
const markers = L.markerClusterGroup();
markers.addLayer(L.marker([40.4, -3.7]));
markers.addLayer(L.marker([40.5, -3.6]));
map.addLayer(markers);
```

---

### **Marcadores Arrastrables**

Permite que los marcadores sean arrastrados.

```javascript
L.marker([40.4, -3.7], { draggable: true }).addTo(map);
```

---

### **Opacidad**

Cambia la transparencia del marcador.

```javascript
L.marker([40.4, -3.7], { opacity: 0.5 }).addTo(map);
```

---

### **Desplazamiento Z-Index**

Controla el orden de apilamiento de los marcadores.

```javascript
L.marker([40.4, -3.7], { zIndexOffset: 1000 }).addTo(map);
```

---