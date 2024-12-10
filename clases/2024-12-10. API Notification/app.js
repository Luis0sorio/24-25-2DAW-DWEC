/**
 * Notification API
 * 
 * permission: devuelve el estado del permiso de notificaciones
 * 
 * - default: permiso NO ha sido otorgado ni denegado
 * - denied: el usuario ha denegado las notificaciones
 * - granted: el usuario ha permitido las notificaciones
 */
console.log(Notification.permission);

/**
 * requestPermission(callback)
 * 
 * Solicita el permiso al usuario.
 * La funcion del callback es opcional
 */

Notification.requestPermission(function(permission){
    console.log("El estado actual del permiso es", permission);
});

/**
 * new Notification(titulo, opciones)
 * 
 * Generar una notificacion nueva con un titulo obligatorio y las opciones correspondientes
 */

let notificacion = new Notification("Esto es una notificacion", {
    body : "Este es el cuerpo del mensaje",
    icon : `https://cdn-icons-png.flaticon.com/512/252/252025.png`,
    image : `https://cdn-icons-png.flaticon.com/512/69/69524.png`,
    tag : "Prueba",
    requireInteraction : true,
    data: {
        url: "https://google.es",
        status: "open"
    }
});

/**
 * ¿Que ponemos en opciones? Las propiedades son las siguientes:
 * 
 * - body: el cuerpo del mensaje
 * - icon: URL del un icono cualquiera
 * - image :  imagen mas grande que se muestra en la notificacion (dependiento del sistema)
 * - data: datos adicionales
 * - tag: etiqueta unica que agrupa notificaciones similares (evitar duplicados)
 * - requireInteraction: (BOOLEANO) si se establece a true, la notificacion permanece en pantalla hasta que el usuario la cierre
 * 
*/

/**
 * Eventos de las notificaciones:
 * - onclick
 * - onclose
 * - onerror
 * - onshow
 */
notificacion.onclick = function (){
    window.open("https://google.es");
}

notificacion.onerror = function (){

}

notificacion.onclose = function (){

}

notificacion.onshow = function (){
    // document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
}

/**
 * LIMITACIONES DE NOTIFICATION
 * 
 * - Requiere permiso de usuario
 * - Compatibilidad con los navegadores
 * - Restricciones de contenido:
 *      - titulo: debe ser corto y claro
 *      - body: limitado a pocas lineas
 *      - icono: debe ser una URL valida y accesible
 *      - tag : no se garantiza en todos los navegadores
 * - Contexto seguro: UNICAMENTE funciona en paginas web HTTPS
 * - Duracion limitada: pueden desaparecer automáticamente
 */