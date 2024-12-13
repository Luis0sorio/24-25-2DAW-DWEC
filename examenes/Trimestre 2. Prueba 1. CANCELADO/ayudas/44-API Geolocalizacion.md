
# API de Geolocalización (`navigator.geolocation`)

La API de Geolocalización permite a las aplicaciones web acceder a la ubicación geográfica del dispositivo del usuario. 

En la API de Geolocalización, los permisos para acceder a la ubicación del usuario son **solicitados automáticamente** por el navegador cuando llamas a cualquiera de los métodos (**getCurrentPosition** o **watchPosition**). El navegador muestra un cuadro de diálogo al usuario para aceptar o denegar el acceso.

Sin embargo, no es posible controlar directamente cómo se solicita el permiso; eso depende del navegador y su implementación.

---

## **1. Solicitar permisos de geolocalización**

Antes de usar la API, el navegador solicita al usuario que otorgue permisos. 

Es importante explicar al usuario por qué se necesita su ubicación.

### **Ejemplo básico de verificación de soporte:**
```javascript
if ("geolocation" in navigator) {
    console.log("La API de geolocalización está disponible.");
} else {
    console.error("La API de geolocalización no es compatible con este navegador.");
}
```

---

## **2. Métodos principales del objeto `navigator.geolocation`**

### **`getCurrentPosition()`**
Obtiene la posición actual del usuario una sola vez.

**Sintaxis:**
```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```
- **successCallback**: Función que se ejecuta si se obtiene la ubicación con éxito.
- **errorCallback**: (Opcional) Función que se ejecuta si ocurre un error.
- **options**: (Opcional) Configuración adicional.

#### Ejemplo:
```javascript
navigator.geolocation.getCurrentPosition(
    function (position) {
        console.log("Latitud:", position.coords.latitude);
        console.log("Longitud:", position.coords.longitude);
    },
    function (error) {
        console.error("Error al obtener la ubicación:", error.message);
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
);
```

### **Opciones del método:**
| **Opción**              | **Descripción**                                      |
|--------------------------|------------------------------------------------------|
| `enableHighAccuracy`     | Si es `true`, solicita mayor precisión (consume más energía). |
| `timeout`                | Tiempo máximo (ms) para obtener una respuesta.       |
| `maximumAge`             | Tiempo máximo (ms) para aceptar una ubicación en caché. |

#### Aclaraciones de **`getCurrentPosition()`**

Al utilizar la API de Geolocalización, algunos métodos como `getCurrentPosition` necesitan tres cosas para funcionar correctamente:

1. **Qué hacer si todo sale bien.**
2. **Qué hacer si algo falla.**
3. **Opciones adicionales (opcional).**

##### **1. Qué hacer si todo sale bien: `successCallback`**

Es lo que quieres que pase si se obtiene la ubicación correctamente.

Ejemplo:
```javascript
function mostrarUbicacion(position) {
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    console.log("Tu ubicación es:");
    console.log("Latitud:", latitud);
    console.log("Longitud:", longitud);
}

navigator.geolocation.getCurrentPosition(mostrarUbicacion);
```

##### **2. Qué hacer si algo falla: `errorCallback`**

Es lo que quieres que pase si ocurre un problema, como que el usuario no dé permiso.

### Ejemplo:
```javascript
function manejarError(error) {
    console.log("Ocurrió un error al obtener la ubicación.");
    if (error.code === 1) {
        console.log("Permiso denegado.");
    } else if (error.code === 2) {
        console.log("No se pudo obtener la ubicación.");
    } else if (error.code === 3) {
        console.log("El tiempo de espera se agotó.");
    }
}

navigator.geolocation.getCurrentPosition(
    function (position) { console.log("Ubicación obtenida."); },
    manejarError
);
```

---

##### **3. Opciones adicionales (opcional): `options`**

Son configuraciones para personalizar cómo se obtiene la ubicación. Puedes usarlas si lo necesitas.


Ejemplo con opciones:
```javascript
navigator.geolocation.getCurrentPosition(
    function (position) { console.log("Ubicación obtenida."); },
    function (error) { console.log("Error al obtener ubicación."); },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
);
```

---

**Ejemplo completo**
```javascript
function mostrarUbicacion(position) {
    console.log("Latitud:", position.coords.latitude);
    console.log("Longitud:", position.coords.longitude);
}

function manejarError(error) {
    console.log("No se pudo obtener la ubicación.");
    if (error.code === 1) {
        console.log("Permiso denegado.");
    } else if (error.code === 2) {
        console.log("No se pudo determinar la ubicación.");
    } else if (error.code === 3) {
        console.log("Tiempo de espera agotado.");
    }
}

navigator.geolocation.getCurrentPosition(
    mostrarUbicacion,
    manejarError,
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
);
```
---

### **`watchPosition()`**
Rastrea la posición del usuario y ejecuta un callback cada vez que cambia.

**Sintaxis:**
```javascript
const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);
```

#### Ejemplo:
```javascript
let rastreoId = navigator.geolocation.watchPosition(
    function (position) {
        console.log("Nueva latitud:", position.coords.latitude);
        console.log("Nueva longitud:", position.coords.longitude);
    },
    function (error) {
        console.error("Error al rastrear posición:", error.message);
    }
);
```

### **`clearWatch()`**
Detiene el rastreo iniciado con `watchPosition()`.

**Sintaxis:**
```javascript
navigator.geolocation.clearWatch(watchId);
```

#### Ejemplo:
```javascript
navigator.geolocation.clearWatch(rastreoId);
console.log("Rastreo detenido.");
```

---

## **3. Objeto `Position`**

El objeto `Position` contiene información sobre la ubicación del dispositivo.

### **Propiedades principales:**
| **Propiedad**           | **Descripción**                                       |
|--------------------------|-------------------------------------------------------|
| `coords.latitude`       | Latitud en grados decimales.                          |
| `coords.longitude`      | Longitud en grados decimales.                         |
| `coords.accuracy`       | Precisión de las coordenadas en metros.               |
| `coords.altitude`       | Altitud en metros sobre el nivel del mar (puede ser `null`). |
| `coords.altitudeAccuracy` | Precisión de la altitud (puede ser `null`).          |
| `coords.heading`        | Dirección de desplazamiento en grados (puede ser `null`). |
| `coords.speed`          | Velocidad en metros por segundo (puede ser `null`).   |
| `timestamp`             | Marca temporal de cuándo se obtuvo la posición.       |

#### Ejemplo de uso del objeto `Position`:
```javascript
navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitud:", position.coords.latitude);
    console.log("Longitud:", position.coords.longitude);
    console.log("Precisión:", position.coords.accuracy, "metros");
});
```

---

## **4. Objeto `PositionError`**

Este objeto describe los errores al intentar obtener la ubicación.

### **Propiedades principales:**
| **Propiedad**       | **Descripción**                                       |
|----------------------|-------------------------------------------------------|
| `code`              | Código del error:                                     |
|                     | `1`: `PERMISSION_DENIED` (Permiso denegado).          |
|                     | `2`: `POSITION_UNAVAILABLE` (Ubicación no disponible).|
|                     | `3`: `TIMEOUT` (Tiempo de espera agotado).            |
| `message`           | Mensaje de error descriptivo.                         |

#### Ejemplo de manejo de errores:
```javascript
navigator.geolocation.getCurrentPosition(null, function (error) {
    switch (error.code) {
        case 1:
            console.error("Permiso denegado por el usuario.");
            break;
        case 2:
            console.error("La ubicación no está disponible.");
            break;
        case 3:
            console.error("El tiempo de espera se agotó.");
            break;
        default:
            console.error("Error desconocido.");
    }
});
```

---

## **5. Mostrar la posición en un mapa**

Se puede combinar la API con bibliotecas como Leaflet para mostrar la ubicación en un mapa interactivo.

### **Ejemplo con Leaflet:**
```html
<div id="map" style="height: 400px;"></div>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
    navigator.geolocation.getCurrentPosition(function (position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;

        let map = L.map('map').setView([latitud, longitud], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([latitud, longitud]).addTo(map)
            .bindPopup("Estás aquí.")
            .openPopup();
    });
</script>
```

---

## **6. Mejores prácticas**

1. **Solicitar permisos claramente:** Explica por qué necesitas la ubicación.
2. **Manejar errores siempre:** Siempre incluye una función para gestionar fallos.
3. **Reducir consumo de energía:** Usa `enableHighAccuracy` solo cuando sea necesario.
4. **Privacidad del usuario:** Nunca compartas datos de ubicación sin consentimiento.

