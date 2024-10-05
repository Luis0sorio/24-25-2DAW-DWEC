# Objeto Navigator
El objeto Navigator proporciona información sobre el navegador que el usuario está utilizando. Esto incluye detalles sobre la versión del navegador, el sistema operativo, y otras características que pueden ayudar a los desarrolladores a crear experiencias web más personalizadas.

## Propiedades del objeto Navigator

| Propiedad                    | Descripción                                                                                                                                                          | Ejemplo                                                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `navigator.appName`          | El nombre del navegador.                                                                                                                                           | `console.log(navigator.appName);`                          |
| `navigator.appVersion`       | La versión del navegador en forma de cadena.                                                                                                                      | `console.log(navigator.appVersion);`                       |
| `navigator.userAgent`        | La cadena de usuario del navegador, que contiene información sobre el navegador, el sistema operativo y otros detalles.                                             | `console.log(navigator.userAgent);`                        |
| `navigator.platform`         | La plataforma del sistema operativo sobre la cual se está ejecutando el navegador (por ejemplo, `Win32`, `Linux`, `MacIntel`).                                      | `console.log(navigator.platform);`                          |
| `navigator.language`         | El idioma preferido del usuario, establecido en la configuración del navegador.                                                                                     | `console.log(navigator.language);`                          |
| `navigator.languages`        | Una lista de los idiomas preferidos por el usuario, en un array.                                                                                                   | `console.log(navigator.languages);`                         |
| `navigator.onLine`           | Indica si el navegador está en línea o fuera de línea (booleano).                                                                                                  | `console.log(navigator.onLine);`                            |
| `navigator.geolocation`      | Proporciona acceso a la API de geolocalización, que permite a los sitios web obtener la ubicación del usuario.                                                      | `console.log(navigator.geolocation);`                       |
| `navigator.mediaDevices`     | Proporciona acceso a los dispositivos multimedia, como cámaras y micrófonos.                                                                                       | `console.log(navigator.mediaDevices);`                      |

| Método                        | Descripción                                                                                                                                                          | Ejemplo                                                      |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `navigator.geolocation.getCurrentPosition()` | Obtiene la posición geográfica del usuario.                                                                                                                         | `navigator.geolocation.getCurrentPosition(success, error);`|
| `navigator.geolocation.watchPosition()`      | Establece un detector que llama a una función cada vez que la posición del usuario cambia.                                                                 | `navigator.geolocation.watchPosition(success, error);`     |
| `navigator.mediaDevices.getUserMedia()`      | Solicita acceso a los dispositivos multimedia (cámara, micrófono) del usuario.                                                                                  | `navigator.mediaDevices.getUserMedia({ video: true }).then(success).catch(error);` |

## Ejemplos de uso
1. Propiedades del objeto Navigator

```javascript
// Obtener el nombre del navegador
console.log(navigator.appName); // Ejemplo: "Netscape"

// Obtener la versión del navegador
console.log(navigator.appVersion); // Ejemplo: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"

// Obtener la cadena de usuario
console.log(navigator.userAgent); // Ejemplo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"

// Obtener la plataforma del sistema operativo
console.log(navigator.platform); // Ejemplo: "Win32"

// Obtener el idioma preferido del usuario
console.log(navigator.language); // Ejemplo: "es-ES"

// Obtener la lista de idiomas preferidos
console.log(navigator.languages); // Ejemplo: ["es-ES", "es", "en-US", "en"]

// Comprobar si el navegador está en línea
console.log(navigator.onLine); // Ejemplo: true o false

// Obtener acceso a la API de geolocalización
console.log(navigator.geolocation); // Ejemplo: Geolocation {...}

// Obtener acceso a los dispositivos multimedia
console.log(navigator.mediaDevices); // Ejemplo: MediaDevices {...}
```

2. Métodos del objeto Navigator
a. navigator.geolocation.getCurrentPosition()

```javascript
// Obtener la posición actual del usuario
function success(position) {
    console.log(`Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`);
}

function error() {
    console.error("No se pudo obtener la ubicación.");
}

navigator.geolocation.getCurrentPosition(success, error);
```

Descripción: Este método solicita la ubicación actual del usuario. Si se obtiene la ubicación, se llama a la función success, y si ocurre un error, se llama a la función error.

b. navigator.geolocation.watchPosition()

```javascript
// Monitorear cambios en la posición del usuario
function success(position) {
    console.log(`Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`);
}

function error() {
    console.error("No se pudo obtener la ubicación.");
}

navigator.geolocation.watchPosition(success, error);
```

Descripción: Este método establece un detector que llama a la función success cada vez que cambia la ubicación del usuario.

c. navigator.mediaDevices.getUserMedia()

```javascript
// Solicitar acceso a la cámara
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(error) {
        console.error("Error al acceder a la cámara:", error);
    });
```

Descripción: Este método solicita acceso a la cámara y/o micrófono del usuario. Si se concede el acceso, se puede usar el stream multimedia resultante.