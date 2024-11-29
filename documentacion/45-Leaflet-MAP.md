
# Leaflet Map Properties and Methods

## Map (`L.map`)

The `L.map` class is the core class in Leaflet, used to create and manage the interactive map instance. It serves as the main container for layers, controls, and interactions.

### **Syntax**
```javascript
L.map(id, options)
```
- **id**: The ID of the HTML element where the map will be rendered.
- **options**: An optional object to configure map behaviors and visuals.

### **Details**
| **Option**           | **Description**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `center`             | The initial center of the map as `[latitude, longitude]`.                       |
| `zoom`               | Initial zoom level of the map.                                                  |
| `minZoom`            | Minimum zoom level allowed.                                                     |
| `maxZoom`            | Maximum zoom level allowed.                                                     |
| `layers`             | Array of layers to be added initially.                                          |
| `zoomControl`        | Enables or disables the default zoom controls (`true` by default).              |
| `dragging`           | Enables or disables dragging the map.                                           |
| `scrollWheelZoom`    | Allows zooming the map with the mouse wheel (`true` or `false`).                |
| `doubleClickZoom`    | Enables zooming with double-click.                                              |
| `touchZoom`          | Enables zooming with touch gestures.                                            |
| `keyboard`           | Enables keyboard navigation for the map.                                        |
| `zoomAnimation`      | Enables smooth zoom animations.                                                 |

### **Example**
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

### **Description**
Centers the map on a specified location with a given zoom level.

### **Syntax**
```javascript
map.setView(latlng, zoom, options);
```
- **latlng**: An array `[latitude, longitude]` specifying the new center.
- **zoom**: The desired zoom level.
- **options**: Optional object with animation options.

### **Example**
```javascript
map.setView([40.4, -3.7], 10, { animate: true, duration: 0.5 });
```

---

## `addLayer()`

### **Description**
Adds a layer (like a tile layer or marker) to the map.

### **Syntax**
```javascript
map.addLayer(layer);
```
- **layer**: A valid Leaflet layer to add.

### **Example**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(tileLayer);
```

---

## `removeLayer()`

### **Description**
Removes a layer from the map.

### **Syntax**
```javascript
map.removeLayer(layer);
```

### **Example**
```javascript
map.removeLayer(tileLayer);
```

---

## `panTo()`

### **Description**
Pans the map to a new center.

### **Syntax**
```javascript
map.panTo(latlng, options);
```

### **Example**
```javascript
map.panTo([40.5, -3.6], { animate: true, duration: 0.5 });
```

---

## `fitBounds()`

### **Description**
Fits the map to the bounds of a given area.

### **Syntax**
```javascript
map.fitBounds(bounds, options);
```
- **bounds**: A `LatLngBounds` object or an array of two coordinates.

### **Example**
```javascript
map.fitBounds([[40.4, -3.8], [40.5, -3.6]]);
```

---

## `invalidateSize()`

### **Description**
Adjusts the map's size after changes to its container.

### **Syntax**
```javascript
map.invalidateSize(options);
```

### **Example**
```javascript
map.invalidateSize();
```

---

## `getZoom()`

### **Description**
Returns the current zoom level of the map.

### **Syntax**
```javascript
map.getZoom();
```

### **Example**
```javascript
console.log("Current Zoom Level:", map.getZoom());
```

---

## **Additional Map Methods and Features**

### **Zoom In/Out**
Manually zoom in or out on the map.

```javascript
map.zoomIn();
map.zoomOut();
```

---

### **Event Handling**
Attach events to the map for interactivity.

```javascript
map.on('click', function (e) {
    alert(`You clicked the map at ${e.latlng}`);
});
```

---

### **Tile Layers**
Add a tile layer for map rendering.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);
```

---

### **Map Controls**
Add custom controls to the map.

```javascript
L.control.scale().addTo(map); // Adds a scale bar
```

---

### **Disable Interactions**
Disable specific map interactions.

```javascript
map.dragging.disable();
map.scrollWheelZoom.disable();
```

---

### **Map Events**
Respond to different map-related events.

| **Event**       | **Description**                                   |
|------------------|--------------------------------------------------|
| `click`         | Fired when the user clicks on the map.            |
| `zoomstart`     | Fired when the zoom starts changing.              |
| `zoomend`       | Fired when the zoom level has changed.            |
| `move`          | Fired when the map has been dragged.              |

```javascript
map.on('zoomend', function () {
    console.log("Zoom level changed to", map.getZoom());
});
```

