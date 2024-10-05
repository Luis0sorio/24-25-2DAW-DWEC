# Objeto Location
El objeto Location representa la ubicación actual de un documento en el navegador. Proporciona métodos y propiedades para obtener información sobre la URL actual y para cambiarla, lo que permite redirigir la navegación o manipular partes de la URL.

## Propiedades del objeto Location

| Propiedad                   | Descripción                                                                                                                                                            | Ejemplo                                                   |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `location.href`             | La URL completa del documento actual.                                                                                                                                 | `console.log(location.href);`                             |
| `location.protocol`         | El protocolo de la URL (por ejemplo, `http:` o `https:`).                                                                                                           | `console.log(location.protocol);`                         |
| `location.host`             | El host de la URL (incluye el dominio y el puerto si está presente).                                                                                                 | `console.log(location.host);`                             |
| `location.hostname`         | El nombre del host de la URL (sin el puerto).                                                                                                                        | `console.log(location.hostname);`                         |
| `location.port`             | El puerto de la URL.                                                                                                                                                 | `console.log(location.port);`                             |
| `location.pathname`         | La parte de la URL que sigue al host, que generalmente representa la ruta del recurso.                                                                                | `console.log(location.pathname);`                         |
| `location.search`           | La cadena de consulta de la URL, que comienza con `?` e incluye parámetros.                                                                                          | `console.log(location.search);`                           |
| `location.hash`             | La parte de la URL que sigue al símbolo `#`, que se utiliza generalmente para navegar a una sección específica de la página.                                          | `console.log(location.hash);`                             |
| `location.origin`           | La combinación del protocolo, host y puerto de la URL actual.                                                                                                        | `console.log(location.origin);`                           |


| Método                      | Descripción                                                                                                                                                            | Ejemplo                                                   |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `location.assign()`         | Carga un nuevo documento en la ventana actual. Puede ser una URL relativa o absoluta.                                                                                 | `location.assign("https://www.ejemplo.com");`           |
| `location.replace()`        | Reemplaza el documento actual en la historia del navegador con el nuevo documento.                                                                                     | `location.replace("https://www.ejemplo.com");`          |
| `location.reload()`         | Recarga el documento actual. Puede tomar un parámetro booleano que indica si debe recargar desde la memoria caché (`false`) o desde el servidor (`true`).              | `location.reload();`<br>`location.reload(true);`        |



## Ejemplos de uso
1. Propiedades del objeto Location

```javascript
// Obtener la URL completa
console.log(location.href); // Ejemplo: "https://www.ejemplo.com/pagina?param=valor#seccion"

// Obtener el protocolo
console.log(location.protocol); // "https:"

// Obtener el host
console.log(location.host); // "www.ejemplo.com:80"

// Obtener el nombre del host
console.log(location.hostname); // "www.ejemplo.com"

// Obtener el puerto
console.log(location.port); // "80"

// Obtener la ruta
console.log(location.pathname); // "/pagina"

// Obtener la cadena de consulta
console.log(location.search); // "?param=valor"

// Obtener el hash
console.log(location.hash); // "#seccion"

// Obtener el origen
console.log(location.origin); // "https://www.ejemplo.com"
```

2. Métodos del objeto Location
a. location.assign()

```javascript
// Redirigir a una nueva URL
location.assign("https://www.ejemplo.com");
```

Descripción: Este método carga un nuevo documento en la ventana actual y añade la URL a la historia del navegador, lo que permite regresar a la página anterior.

b. location.replace()

```javascript
// Reemplazar el documento actual con una nueva URL
location.replace("https://www.ejemplo.com");
```

Descripción: Este método reemplaza el documento actual en la historia del navegador con el nuevo documento. No permite regresar a la página anterior.

c. location.reload()

```javascript
// Recargar el documento actual
location.reload();
```

Descripción: Este método recarga la página actual. Se puede usar el parámetro true para forzar la recarga desde el servidor, ignorando la caché.