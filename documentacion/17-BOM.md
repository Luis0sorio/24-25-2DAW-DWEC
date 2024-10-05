# ¿Qué es el BOM?
BOM significa Browser Object Model o Modelo de Objetos del Navegador. Es un conjunto de herramientas y funciones que el navegador web (como Chrome, Firefox, etc.) nos da para interactuar con la ventana del navegador y la página web.

El BOM te permite realizar operaciones como:
- Cambiar la URL de la página.
- Controlar el tamaño de la ventana del navegador.
- Abrir o cerrar nuevas pestañas o ventanas.
- Interactuar con el historial de navegación del usuario.

A diferencia del DOM (que controla el contenido de la página web, como el HTML y los elementos visuales), el BOM controla las características del navegador y la ventana del usuario.

## ¿Cómo funciona el BOM?
El BOM está compuesto principalmente por el objeto window, que representa la ventana del navegador. Dentro de window, hay otros objetos "hijo" que proporcionan más funcionalidades y te permiten manipular aspectos específicos del navegador.

Todos los métodos y propiedades del BOM pueden ser accedidos a través de window, aunque muchas veces se omite escribir window. porque está implícito.

Por ejemplo, window.alert("Hola"); es lo mismo que alert("Hola");.

## Metodos y propiedades importantes del objeto window (BOM puro)

El objeto window es la raíz del BOM y tiene varios métodos y propiedades que puedes utilizar para controlar el navegador. 

### Tamaño y posicion 

#### window.innerWidth y window.innerHeight: 
Devuelven el ancho y el alto de la ventana visible (sin incluir las barras de herramientas del navegador).

```javascript
console.log("Ancho: " + window.innerWidth + "px");
console.log("Alto: " + window.innerHeight + "px");
```

#### window.outerWidth y window.outerHeight: 
Devuelven el ancho y alto total de la ventana del navegador, incluyendo las barras de herramientas y los bordes.

```javascript
console.log("Ancho total: " + window.outerWidth + "px");
console.log("Alto total: " + window.outerHeight + "px");
```

#### window.screenX y window.screenY:
Devuelven la posición de la ventana del navegador en la pantalla, en coordenadas X (horizontal) e Y (vertical).

```javascript
console.log("Posición en X: " + window.screenX);
console.log("Posición en Y: " + window.screenY);
```

#### window.resizeTo(ancho, alto): 
Este método cambia el tamaño de la ventana del navegador. Al igual que moveTo(), puede estar restringido por motivos de seguridad en algunas situaciones.

```javascript
window.resizeTo(800, 600);  // Cambia el tamaño de la ventana a 800x600 píxeles
```

#### window.resizeBy(ancho, alto):
Este método cambia el tamaño de la ventana en relación con su tamaño actual.

```javascript
window.resizeBy(100, 50);  // Aumenta el tamaño de la ventana en 100 píxeles de ancho y 50 de alto
```

#### window.moveTo(x, y): 
Este método mueve la ventana del navegador a una posición específica en la pantalla. Solo funciona en ventanas que han sido abiertas con window.open() y en algunos navegadores puede estar restringido por razones de seguridad.

```javascript
window.moveTo(100, 100);  // Mueve la ventana a la posición (100, 100) en la pantalla
```


#### window.moveBy(x, y): 
Mueve la ventana en relación con su posición actual.

```javascript
window.moveBy(100, 100);  
```

### Temporizadores
Estos métodos te permiten programar funciones que se ejecuten después de un tiempo o en intervalos regulares.

#### window.setTimeout(función, tiempo): 
Ejecuta una función o un código después de cierto tiempo (en milisegundos).

```javascript
window.setTimeout(function() {
    console.log("Han pasado 2 segundos");
}, 2000); // 2000 milisegundos = 2 segundos
```

#### window.clearTimeout(id): 
Este método se usa para detener la ejecución de una función que ha sido programada previamente con setTimeout(). Recibe como argumento el identificador del temporizador devuelto por setTimeout().

```javascript
let timeoutID = window.setTimeout(function() {
    console.log("Esto no debería verse, porque será cancelado");
}, 5000);

// Cancelamos el timeout antes de que se ejecute
window.clearTimeout(timeoutID);
```

#### window.setInterval(función, tiempo): 
Ejecuta una función o código repetidamente cada cierto intervalo de tiempo.

```javascript
window.setInterval(function() {
    console.log("Esto se repite cada 3 segundos");
}, 3000); // 3000 milisegundos = 3 segundos
```

#### window.clearInterval(id): 
Este método se utiliza para detener la ejecución continua de una función que ha sido programada con setInterval(). Funciona de manera similar a clearTimeout(), pero para setInterval().

```javascript
let intervalID = window.setInterval(function() {
    console.log("Esto se repite cada 2 segundos");
}, 2000);

// Detenemos el intervalo después de 5 segundos
window.setTimeout(function() {
    window.clearInterval(intervalID);
    console.log("Intervalo detenido");
}, 5000);
```

### Desplazamiento de la página
Propiedades que te permiten obtener información sobre el desplazamiento de la página en el navegador.

#### window.pageXOffset y window.pageYOffset: 
Estas propiedades devuelven el desplazamiento horizontal (pageXOffset) y vertical (pageYOffset) de la página actual, es decir, cuántos píxeles ha sido desplazada la página desde su posición original.

```javascript
console.log("Desplazamiento horizontal: " + window.pageXOffset);
console.log("Desplazamiento vertical: " + window.pageYOffset);
```

### Control de ventanas y pestañas
Métodos que permiten abrir, cerrar o controlar el foco de las ventanas.

#### window.open(url, nombre, especificaciones):
Abre una nueva ventana o pestaña del navegador.

```javascript
window.open("https://www.google.com", "_blank");
```

#### window.close(): 
Cierra la ventana actual, pero solo funciona si esa ventana fue abierta mediante window.open().

```javascript
window.close();
```

#### window.focus(): 
Este método le da foco a la ventana actual, trayéndola al frente si está en segundo plano.

```javascript
window.focus();
```

#### window.blur(): 
Este método quita el foco de la ventana actual, lo que puede hacer que la ventana pase a segundo plano.

```javascript
window.blur();
```

### Estado de la ventana
Propiedades que proporcionan información sobre el estado de la ventana, como si está cerrada o su nombre.

#### window.closed: 
Devuelve true si la ventana ha sido cerrada y false si sigue abierta.

```javascript
let nuevaVentana = window.open("https://www.google.com");
nuevaVentana.close();
console.log(nuevaVentana.closed);  // Devuelve true si la ventana fue cerrada
```

#### window.name: 
Es una propiedad que puede ser utilizada para almacenar y acceder a un valor asociado a la ventana o pestaña. Puede ser útil para intercambiar información entre ventanas.

```javascript
window.name = "MiVentana";
console.log(window.name);  // Muestra "MiVentana"
```

### Ventanas de dialogo

#### window.alert()
Muestra un cuadro de alerta con un mensaje.

```javascript
window.alert("¡Hola, esto es una alerta!");
```

#### window.confirm()
Muestra un cuadro de diálogo con dos opciones: Aceptar o Cancelar. Devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar".

```javascript
let resultado = window.confirm("¿Quieres continuar?");
if (resultado) {
    console.log("Has aceptado");
} else {
    console.log("Has cancelado");
}
```

#### window.prompt()
Muestra un cuadro de diálogo que le pide al usuario que ingrese un valor y devuelve el texto que el usuario introduce. Si el usuario hace clic en "Cancelar", devuelve null.

```javascript
let nombre = window.prompt("¿Cómo te llamas?");
console.log("Tu nombre es " + nombre);
```

### Gestion de almacenamiento
Ambos son partes del BOM y te permiten almacenar datos en el navegador de manera que puedas recuperarlos más tarde, incluso después de recargar la página o cerrar el navegador. Sin embargo, existen algunas diferencias importantes entre ambos.

- **localStorage**: Los datos almacenados aquí persisten incluso cuando cierras y vuelves a abrir el navegador. Es decir, los datos son permanentes hasta que los borres manualmente o el navegador los elimine.

- **sessionStorage**: Los datos almacenados aquí solo duran mientras la pestaña del navegador esté abierta. Una vez que cierras la pestaña o ventana, se eliminan. Es útil cuando quieres mantener datos temporales que no necesiten persistir después de la sesión.

#### setItem(key, value)
Este método guarda un par clave-valor en el almacenamiento.

- **key**: El nombre o identificador del dato que estás guardando.

- **value**: El valor que quieres almacenar. Debe ser una cadena de texto, por lo que si es un objeto o arreglo, tienes que convertirlo a texto usando JSON.stringify().

- Ejemplo con **localStorage**:
```javascript
// Guardar un dato en localStorage
localStorage.setItem("nombre", "Juan");

// Guardar un objeto convirtiéndolo a JSON
let usuario = { nombre: "María", edad: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));
```

- Ejemplo con **sessionStorage**:
```javascript
// Guardar un dato en sessionStorage
sessionStorage.setItem("tema", "oscuro");

// Guardar un arreglo convertido a JSON
let colores = ["rojo", "verde", "azul"];
sessionStorage.setItem("colores", JSON.stringify(colores));
```

#### getItem(key)
Este método recupera el valor almacenado bajo una clave específica. Si la clave no existe, devuelve null.

- **key**: El nombre o identificador del dato que quieres recuperar.

- Ejemplo con **localStorage**:

```javascript
// Recuperar un dato de localStorage
let nombre = localStorage.getItem("nombre");
console.log(nombre);  // Muestra "Juan"

// Recuperar un objeto y convertirlo de nuevo a su forma original
let usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario.nombre);  // Muestra "María"
```

- Ejemplo con **sessionStorage**:

```javascript
// Recuperar un dato de sessionStorage
let tema = sessionStorage.getItem("tema");
console.log(tema);  // Muestra "oscuro"

// Recuperar un arreglo y convertirlo de nuevo a su forma original
let colores = JSON.parse(sessionStorage.getItem("colores"));
console.log(colores[0]);  // Muestra "rojo"
```

#### removeItem(key)
Este método elimina un elemento almacenado bajo una clave específica.

- **key**: El nombre o identificador del dato que quieres eliminar.

- Ejemplo con **localStorage**:

```javascript
// Eliminar un dato de localStorage
localStorage.removeItem("nombre");
```

- Ejemplo con **sessionStorage**:

```javascript
// Eliminar un dato de sessionStorage
sessionStorage.removeItem("tema");
```

#### clear()
Este método elimina todos los datos almacenados en localStorage o sessionStorage.

- Ejemplo con **localStorage**:

```javascript
// Eliminar todos los datos de localStorage
localStorage.clear();
```

- Ejemplo con **sessionStorage**:
```javascript
// Eliminar todos los datos de sessionStorage
sessionStorage.clear();
```

#### Ejemplos Prácticos de Uso

1. Almacenar Preferencias del Usuario con localStorage
Supongamos que tienes un sitio web que permite a los usuarios elegir un tema claro u oscuro. Puedes usar localStorage para recordar esta preferencia incluso después de cerrar el navegador.

```javascript
// Guardar la preferencia del tema
function guardarTema(tema) {
    localStorage.setItem("tema", tema);
}

// Aplicar la preferencia guardada cuando el usuario vuelva
function aplicarTemaGuardado() {
    let tema = localStorage.getItem("tema");
    if (tema) {
        document.body.className = tema;  // Aplica el tema almacenado
    }
}

// Ejemplo de uso
guardarTema("oscuro");  // Guarda la preferencia "oscuro"
aplicarTemaGuardado();  // Aplica el tema guardado (por ejemplo, cuando se carga la página)
```

2. Guardar Datos Temporales con sessionStorage
Imagina que tienes un formulario largo y no quieres perder los datos si el usuario navega a otra página en la misma sesión. Puedes usar sessionStorage para guardar los datos temporalmente.

```javascript
// Guardar datos del formulario
function guardarDatosFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("email", email);
}

// Recuperar datos cuando el usuario vuelve al formulario
function rellenarFormulario() {
    let nombreGuardado = sessionStorage.getItem("nombre");
    let emailGuardado = sessionStorage.getItem("email");
    
    if (nombreGuardado) {
        document.getElementById("nombre").value = nombreGuardado;
    }
    if (emailGuardado) {
        document.getElementById("email").value = emailGuardado;
    }
}

// Ejemplo de uso: Guardar y rellenar los datos cuando sea necesario
document.getElementById("guardarBtn").addEventListener("click", guardarDatosFormulario);
window.onload = rellenarFormulario;
```

| Característica      | `localStorage`                      | `sessionStorage`                    |
|---------------------|-------------------------------------|-------------------------------------|
| **Persistencia**     | Permanente (incluso después de cerrar el navegador). | Temporal (se borra al cerrar la pestaña o ventana). |
| **Tamaño máximo**    | Aproximadamente 5-10 MB según el navegador. | Aproximadamente 5-10 MB según el navegador. |
| **Alcance**          | Disponible para todas las pestañas/ventanas de la misma página web. | Disponible solo en la pestaña/ventana donde fue creado. |
| **Propósito típico** | Almacenar preferencias o datos a largo plazo. | Almacenar datos temporales durante una sesión de navegación. |

## Diagrama clase Window
+---------------------------+
|         window            |
+---------------------------+
|       Propiedades         |
|  -----------------------   |
|  • innerWidth             |
|  • innerHeight            |
|  • outerWidth             |
|  • outerHeight            |
|  • screenX                |
|  • screenY                |
|  • pageXOffset            |
|  • pageYOffset            |
|  • localStorage           |
|  • sessionStorage         |
|  • location               |
|  • closed                 |
|  • name                   |
+---------------------------+
|         Métodos           |
|  -----------------------   |
|  • open()                 |
|  • close()                |
|  • focus()                |
|  • blur()                 |
|  • moveTo()               |
|  • moveBy()               |
|  • resizeTo()             |
|  • resizeBy()             |
|  • setTimeout()           |
|  • clearTimeout()         |
|  • setInterval()          |
|  • clearInterval()        |
|  • scrollTo()             |
|  • scrollBy()             |
+---------------------------+


## Objetos hijo del BOM
Además de window, el BOM contiene otros objetos que te proporcionan funcionalidades más específicas. Aquí te los menciono brevemente:

- **document**: Manipula el contenido HTML y estructura de la página web.
- **navigator**: Da información sobre el navegador (nombre, versión, si el navegador tiene habilitada la geolocalización, etc.).
- **screen**: Proporciona información sobre la pantalla del dispositivo (resolución, tamaño, etc.).
- **location**: Información y control de la URL de la página actual.
- **history**: Interacción con el historial del navegador (ir atrás, adelante).

window
│
├── document   # Controla el contenido de la página HTML
│
├── navigator  # Información sobre el navegador (nombre, versión, etc.)
│
├── screen     # Información sobre la pantalla (resolución, tamaño, etc.)
│
├── location   # Información sobre la URL actual y navegación
│
└── history    # Acceso al historial de navegación (ir atrás/adelante)



