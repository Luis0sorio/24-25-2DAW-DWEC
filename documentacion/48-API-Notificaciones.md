
# **API de Notificaciones en JavaScript**

## **¿Qué es el API de Notificaciones?**

El API de Notificaciones permite que las páginas web envíen mensajes o alertas al usuario, incluso si este no está viendo la página en ese momento. 

Estos mensajes suelen aparecer como ventanas emergentes en la interfaz del sistema operativo.

### **Usos típicos del API de Notificaciones**

1. **Recordatorios**: Para recordar al usuario eventos importantes, como reuniones o tareas.
2. **Alertas en tiempo real**: Avisar al usuario sobre nuevos mensajes en una app de chat o correos electrónicos.
3. **Actualizaciones de estado**: Notificar el progreso de descargas, actualizaciones o tareas completadas.
4. **Promociones y marketing**: Enviar alertas sobre descuentos, ofertas o productos nuevos.
5. **Seguridad**: Informar sobre accesos no autorizados o eventos críticos en una aplicación.

---

## **Métodos y propiedades principales**

### **Propiedades**

1. **`Notification.permission`**
   - Devuelve el estado del permiso de notificaciones.
   - Valores posibles:
     - `"default"`: El permiso no ha sido otorgado ni denegado.
     - `"granted"`: El usuario ha permitido las notificaciones.
     - `"denied"`: El usuario ha denegado las notificaciones.

### **Métodos**

1. **`Notification.requestPermission(callback)`**
   - Solicita permiso al usuario para mostrar notificaciones.
   - Recibe un callback opcional que se ejecuta con el valor del permiso.

   ```javascript
   Notification.requestPermission(function(permission) {
       console.log("Estado del permiso:", permission);
   });
   ```

2. **`new Notification(title, options)`**
   - Crea una nueva notificación.
   - **Parámetros**:
     - `title` (obligatorio): El título de la notificación.
     - `options` (opcional): Objeto con opciones adicionales.
   - **Propiedades del objeto `options`**:
     - `body`: Texto debajo del título.
     - `icon`: URL de una imagen que se muestra junto a la notificación.
     - `image`: Imagen más grande que se muestra en la notificación (dependiendo del sistema).
     - `tag`: Etiqueta única que agrupa notificaciones similares (evita duplicados).
     - `data`: Datos adicionales que se pueden usar en eventos.
     - `dir`: Dirección del texto, `"auto"`, `"ltr"` o `"rtl"`.
     - `lang`: Idioma de la notificación.
     - `requireInteraction`: Si se establece en `true`, la notificación permanecerá en pantalla hasta que el usuario la cierre.

   ```javascript
   var opciones = {
       body: "Este es el cuerpo de la notificación.",
       icon: "https://via.placeholder.com/100",
       tag: "mi-notificacion",
       requireInteraction: true
   };
   var notificacion = new Notification("Título de Notificación", opciones);
   ```

---

## **Eventos de Notificaciones**

Las notificaciones también admiten eventos para reaccionar a la interacción del usuario:

1. **`onclick`**  
   - Se ejecuta cuando el usuario hace clic en la notificación.

   ```javascript
   notificacion.onclick = function() {
       console.log("Notificación clicada");
   };
   ```

2. **`onclose`**  
   - Se ejecuta cuando la notificación se cierra.

   ```javascript
   notificacion.onclose = function() {
       console.log("Notificación cerrada");
   };
   ```

3. **`onerror`**  
   - Se ejecuta si ocurre un error al mostrar la notificación.

   ```javascript
   notificacion.onerror = function() {
       console.log("Error al mostrar la notificación");
   };
   ```

4. **`onshow`**  
   - Se ejecuta cuando la notificación aparece.

   ```javascript
   notificacion.onshow = function() {
       console.log("Notificación mostrada");
   };
   ```

---

## **Limitaciones del API de Notificaciones**

1. **Requiere permiso del usuario**:
   - Las notificaciones no se mostrarán si el usuario no concede permiso.

2. **Compatibilidad con navegadores**:
   - Funciona en los navegadores modernos, pero algunos sistemas operativos pueden tener restricciones.

3. **Restricciones del contenido**:
   - **Título**: Debe ser corto y claro.
   - **Cuerpo (`body`)**: Limitado a unas pocas líneas.
   - **Icono (`icon`)**: Debe ser una URL válida y accesible.
   - **Etiqueta (`tag`)**: No se garantiza el soporte en todos los navegadores.

4. **Contexto seguro**:
   - Solo funciona en páginas web servidas a través de HTTPS.

5. **Duración limitada**:
   - Dependiendo del sistema operativo, las notificaciones pueden desaparecer automáticamente tras unos segundos.

---

## **Ejemplo Completo**

```javascript
// Verificar y solicitar permiso
if (Notification.permission === "granted") {
    mostrarNotificacion();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permiso) {
        if (permiso === "granted") {
            mostrarNotificacion();
        }
    });
}

// Función para mostrar la notificación
function mostrarNotificacion() {
    var opciones = {
        body: "Esta es una notificación personalizada.",
        icon: "https://via.placeholder.com/100",
        tag: "notificacion-demo",
        requireInteraction: true
    };

    var notificacion = new Notification("¡Notificación Activa!", opciones);

    // Eventos
    notificacion.onclick = function () {
        window.open("https://www.google.com");
    };

    notificacion.onclose = function () {
        console.log("Notificación cerrada.");
    };

    notificacion.onshow = function () {
        console.log("Notificación mostrada.");
    };

    notificacion.onerror = function () {
        console.log("Error al mostrar la notificación.");
    };
}
```

---
