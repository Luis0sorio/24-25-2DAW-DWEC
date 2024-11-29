
# Leaflet TileLayer Properties and Methods

## TileLayer (`L.tileLayer`)

The `L.tileLayer` class is used to add tile-based map layers to a Leaflet map. It fetches and renders map tiles from a specified URL template.

### **Syntax**
```javascript
L.tileLayer(urlTemplate, options)
```
- **urlTemplate**: A string template that specifies the URL pattern for fetching map tiles. Placeholders (`{x}`, `{y}`, `{z}`, etc.) will be replaced with appropriate values.
- **options**: An optional object to configure the tile layer's behavior.

### **Details**
| **Option**           | **Description**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `maxZoom`            | Maximum zoom level for this tile layer.                                         |
| `minZoom`            | Minimum zoom level for this tile layer.                                         |
| `attribution`        | Text to display attribution for the tile source.                                |
| `tileSize`           | Size of the tiles in pixels (default: `256`).                                   |
| `bounds`             | Restricts the layer to a specific geographical area (`LatLngBounds`).           |
| `opacity`            | Sets the opacity of the tiles (0 to 1).                                         |
| `zIndex`             | Controls the stacking order of the tiles.                                       |
| `errorTileUrl`       | URL of the tile to show when the requested tile fails to load.                  |
| `updateWhenIdle`     | Updates tiles only when the map stops moving (default: `true`).                 |
| `detectRetina`       | Loads high-resolution tiles for Retina displays (default: `false`).             |
| `subdomains`         | Array of subdomains to load tiles from (e.g., `['a', 'b', 'c']`).               |

### **Example**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
});
tileLayer.addTo(map);
```

---

## `addTo()`

### **Description**
Adds the tile layer to the specified map.

### **Syntax**
```javascript
tileLayer.addTo(map);
```
- **map**: The Leaflet map instance where the tile layer will be added.

### **Example**
```javascript
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
tileLayer.addTo(map);
```

---

## `setOpacity()`

### **Description**
Sets the opacity of the tile layer.

### **Syntax**
```javascript
tileLayer.setOpacity(opacity);
```
- **opacity**: A number between `0` (fully transparent) and `1` (fully opaque).

### **Example**
```javascript
tileLayer.setOpacity(0.5); // Makes the tiles 50% transparent.
```

---

## `setZIndex()`

### **Description**
Sets the stacking order (z-index) of the tile layer.

### **Syntax**
```javascript
tileLayer.setZIndex(zIndex);
```
- **zIndex**: The new stacking order for the tiles.

### **Example**
```javascript
tileLayer.setZIndex(1000); // Ensures the tile layer is above other layers.
```

---

## `setUrl()`

### **Description**
Updates the URL template for the tile layer dynamically.

### **Syntax**
```javascript
tileLayer.setUrl(urlTemplate, noRedraw);
```
- **urlTemplate**: The new URL template for the tiles.
- **noRedraw**: If `true`, prevents tiles from being redrawn immediately.

### **Example**
```javascript
tileLayer.setUrl('https://another-server/{z}/{x}/{y}.png');
```

---

## **Additional TileLayer Features**

### **Error Handling for Tiles**
Display a fallback tile when loading fails.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    errorTileUrl: 'https://example.com/error-tile.png'
}).addTo(map);
```

---

### **Restrict TileLayer Bounds**
Restrict the tile layer to specific geographical bounds.

```javascript
const bounds = L.latLngBounds([[40.0, -3.8], [41.0, -3.6]]);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    bounds: bounds
}).addTo(map);
```

---

### **Detect Retina Displays**
Automatically load high-resolution tiles for Retina screens.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true
}).addTo(map);
```

---

### **Custom Subdomains**
Distribute tile requests across multiple subdomains.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: ['a', 'b', 'c']
}).addTo(map);
```

---

### **Tile Size Adjustment**
Set a custom tile size.

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    tileSize: 512
}).addTo(map);
```

---

### **TileLayer Events**
Attach events to the tile layer.

| **Event**       | **Description**                                   |
|------------------|--------------------------------------------------|
| `loading`       | Fired when new tiles are being loaded.            |
| `tileloadstart` | Fired when a tile starts loading.                 |
| `tileload`      | Fired when a tile is successfully loaded.         |
| `tileerror`     | Fired when a tile fails to load.                  |

```javascript
tileLayer.on('tileerror', function (e) {
    console.log("Error loading tile:", e);
});
```

