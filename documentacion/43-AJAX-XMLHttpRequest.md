# XMLHttpRequest
XMLHttpRequest (XHR) es un objeto integrado en los navegadores web que permite interactuar con servidores web de manera asíncrona. 

Es la base clásica para realizar llamadas AJAX antes de la introducción de otras herramientas.

## Características principales:
1. Permite solicitudes HTTP o HTTPS al servidor:
    - Usado para enviar o recibir datos.
    - Compatible con los métodos HTTP más comunes como GET, POST, PUT, y DELETE.

2. Soporte para asincronía:
    - Puede ejecutarse sin bloquear la interacción del usuario con la página.

3. Formato flexible de datos:
    - Trabaja con respuestas en varios formatos: texto plano, JSON, XML, o incluso binarios.

## Desglose de los métodos

1. Crear una instancia:
```javascript
const xhr = new XMLHttpRequest();
```
- Esto inicializa una nueva instancia del objeto XMLHttpRequest. 
- Sin esta instancia, no se puede hacer ninguna solicitud AJAX.

2. Configurar la solicitud con xhr.open()
```javascript
xhr.open(método, URL, asíncrono);
```
- Parámetros:
    1. **método (obligatorio)**: Especifica el tipo de acción que deseas realizar:
        - **GET**: Obtener datos del servidor (común para leer información).
        - **POST**: Enviar datos al servidor para procesarlos (creación de nuevos datos).
        - **PUT**: Enviar datos al servidor para actualizar información existente.
        - **DELETE**: Solicitar que se eliminen datos en el servidor.

    2. **URL (obligatorio)**: Es la dirección del servidor donde se realizará la solicitud. Puede ser:
        - Una URL absoluta: https://api.example.com/data
        Una URL relativa al dominio actual: /api/data

    3. **asíncrono (opcional)**: Indica si la solicitud será asíncrona o síncrona:
        - true: (Por defecto) El navegador no se bloquea mientras espera la respuesta.
        - false: El navegador se bloquea hasta que la solicitud finalice (usado en casos muy específicos, pero no recomendado porque congela la página).

        Ejemplo:
        ```javascript
        xhr.open('GET', 'https://api.example.com/data', true);
        ```
        ```
        Método: GET para leer datos.
        URL: https://api.example.com/data
        Asíncrono: true, para que la página no se bloquee.
        ```

3. Manejar la respuesta con **xhr.onload**
```javascript
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error('Error:', xhr.status);
    }
};
```
- Define qué acciones tomar cuando el servidor envía una respuesta. 
- Este evento se ejecuta cuando la solicitud finaliza exitosamente (sin errores de conexión).

- Propiedades clave de xhr:
    1. **xhr.status**: código HTTP devuelto por el servidor.
        - 200: Éxito.
        - 404: Recurso no encontrado.
        - 500: Error interno del servidor.

    2. **xhr.responseText**: contiene la respuesta enviada por el servidor en formato de texto (e.g., JSON, XML o texto plano).
    Ejemplo detallado:
    ```javascript
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Respuesta exitosa:', xhr.responseText);
        } else {
            console.log('Error del servidor:', xhr.status);
        }
    };
    ```

4. Manejar errores con xhr.onerror
```javascript
xhr.onerror = function() {
    console.error('Error en la conexión');
};
```
- Se ejecuta si ocurre un error relacionado con la conexión (por ejemplo, si no se puede llegar al servidor). 
- No maneja errores HTTP como un 404 o un 500.
- Importancia: ayuda a capturar errores fuera del control del servidor, como problemas de red o URL incorrectas.

Ejemplo:
```javascript
xhr.onerror = function() {
    console.error('No se pudo conectar con el servidor.');
};
```

5. Enviar la solicitud con **xhr.send()**
```javascript
xhr.send();
```
- Envía la solicitud configurada previamente con xhr.open(). 
- Dependiendo del método:
    1. **En GET**: No necesita parámetros adicionales.
    2. **En POST, PUT**: Puede incluir un cuerpo de datos como argumento.

Ejemplo con POST:
```javascript
const data = JSON.stringify({ nombre: 'Juan', edad: 25 });
xhr.open('POST', 'https://api.example.com/users', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(data);
```
```
data: Los datos enviados al servidor en formato JSON.
xhr.setRequestHeader: Configura los encabezados HTTP, indicando que el contenido es JSON.
```
Ejemplo completo: Solicitud GET
```javascript
const xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('GET', 'https://api.example.com/data', true);

// Manejar la respuesta
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Datos recibidos:', xhr.responseText);
    } else {
        console.error('Error en la solicitud:', xhr.status);
    }
};

// Manejar errores de conexión
xhr.onerror = function() {
    console.error('Error en la conexión.');
};

// Enviar la solicitud
xhr.send();
```

Ejemplo completo: Solicitud POST
```javascript
const xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('POST', 'https://api.example.com/users', true);
xhr.setRequestHeader('Content-Type', 'application/json');

// Manejar la respuesta
xhr.onload = function() {
    if (xhr.status === 201) { // Código 201: Creado
        console.log('Usuario creado:', xhr.responseText);
    } else {
        console.error('Error al crear usuario:', xhr.status);
    }
};

// Manejar errores de conexión
xhr.onerror = function() {
    console.error('Error en la conexión.');
};

// Enviar los datos
const newUser = JSON.stringify({ nombre: 'María', edad: 30 });
xhr.send(newUser);
```

