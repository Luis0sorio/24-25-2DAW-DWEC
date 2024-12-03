# XMLHttpRequest: Métodos, Propiedades y Eventos

## **Métodos**

1. **`open(method, url[, async, user, password])`**
   - Inicializa una nueva solicitud.
   - **Parámetros**:
     - `method`: Método HTTP (`GET`, `POST`, etc.).
     - `url`: URL del recurso.
     - `async` (opcional): `true` para solicitud asíncrona (por defecto), `false` para síncrona.
     - `user` (opcional): Nombre de usuario (si se requiere autenticación).
     - `password` (opcional): Contraseña (si se requiere autenticación).

2. **`send([body])`**
   - Envía la solicitud al servidor.
   - **Parámetro**:
     - `body` (opcional): Datos a enviar en una solicitud como `POST`.

3. **`setRequestHeader(header, value)`**
   - Establece un encabezado HTTP.
   - **Parámetros**:
     - `header`: Nombre del encabezado.
     - `value`: Valor del encabezado.

4. **`getResponseHeader(header)`**
   - Obtiene el valor de un encabezado de la respuesta.
   - **Parámetro**:
     - `header`: Nombre del encabezado.

5. **`getAllResponseHeaders()`**
   - Devuelve todos los encabezados de respuesta como una cadena de texto.

6. **`abort()`**
   - Cancela la solicitud en curso.

---

## **Propiedades**

1. **`readyState`**
   - Indica el estado de la solicitud:
     - `0`: No inicializada.
     - `1`: Conexión establecida.
     - `2`: Solicitud recibida.
     - `3`: Procesando solicitud.
     - `4`: Completada.

2. **`status`**
   - Código de estado HTTP de la respuesta (por ejemplo, `200`, `404`).

3. **`statusText`**
   - Texto asociado con el código de estado (por ejemplo, `"OK"`, `"Not Found"`).

4. **`response`**
   - Devuelve el cuerpo de la respuesta en el formato definido por `responseType`.

5. **`responseText`**
   - Devuelve la respuesta como texto.

6. **`responseXML`**
   - Devuelve la respuesta como un documento XML (si el contenido es válido).

7. **`responseType`**
   - Especifica el tipo de respuesta esperado:
     - Valores posibles: `""` (por defecto), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, `"text"`.

8. **`timeout`**
   - Tiempo en milisegundos antes de que la solicitud caduque.

9. **`upload`**
   - Es un objeto `XMLHttpRequestUpload` que se usa para gestionar eventos relacionados con la subida de datos.

10. **`UNSENT`**
   - Valor numérico: `0`.

11. **`OPENED`**
   - Valor numérico: `1`.

12. **`HEADERS_RECEIVED`**
   - Valor numérico: `2`.

13. **`LOADING`**
   - Valor numérico: `3`.

14. **`DONE`**
   - Valor numérico: `4`.

15. **`responseURL`**
   - Devuelve la URL final después de los redireccionamientos automáticos, si los hubo.

---

## **Eventos**

### Eventos de la Solicitud

1. **`onreadystatechange`**
   - Se dispara cuando cambia `readyState`.

2. **`onload`**
   - Solicitud completada con éxito.

3. **`onerror`**
   - Ocurrió un error durante la solicitud (problema de red, tiempo agotado, etc.).

4. **`ontimeout`**
   - La solicitud ha excedido el tiempo límite especificado por `timeout`.

5. **`onabort`**
   - Solicitud cancelada mediante `abort()`.

6. **`onloadstart`**
   - La solicitud ha comenzado a cargarse.

7. **`onloadend`**
   - La solicitud ha finalizado (éxito o error).

8. **`onprogress`**
   - Se dispara periódicamente mientras se descarga la respuesta.

### Eventos de subida de datos/ficheros (usando `upload`)

1. **`upload.onprogress`**
   - Rastrea el progreso de carga de datos.

2. **`upload.onload`**
   - La carga se completó exitosamente.

3. **`upload.onerror`**
   - Ocurrió un error durante la carga.

4. **`upload.onabort`**
   - Carga cancelada por el usuario.

5. **`upload.onloadstart`**
   - La operación de carga ha comenzado.

6. **`upload.onloadend`**
   - La operación de carga ha finalizado.

---

