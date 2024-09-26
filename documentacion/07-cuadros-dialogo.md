# Cuadros dialogo   

Los cuadros de diálogo son elementos que permiten interactuar con el usuario en el navegador. 

JavaScript proporciona varias funciones para crear estos cuadros de diálogo, que pueden ser útiles para mostrar mensajes, solicitar información o confirmar acciones.

## Tipos de Cuadros de Diálogo

### alert()

- **Descripción**: Muestra un mensaje al usuario y espera a que este presione "Aceptar".

- **Uso**: Generalmente se utiliza para mostrar información importante o advertencias.

Ejemplo:

```javascript
alert("¡Bienvenido a nuestro sitio web!");
```

### confirm()

- **Descripción**: Muestra un cuadro de diálogo con un mensaje y dos botones: "Aceptar" y "Cancelar".
- **Uso**: Se utiliza para confirmar una acción. Devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar".

Ejemplo:

```javascript
let respuesta = confirm("¿Estás seguro de que deseas salir?");
if (respuesta) {
    alert("Has salido.");
} else {
    alert("Has decidido quedarte.");
}
```

### prompt()

- **Descripción**: Muestra un cuadro de diálogo que solicita al usuario que ingrese información. Incluye un campo de texto y dos botones: "Aceptar" y "Cancelar".

- **Uso**: Se utiliza para obtener datos del usuario. Devuelve el valor ingresado o null si el usuario hace clic en "Cancelar".

Ejemplo:

```javascript
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "!");
```

## Comportamiento de los Cuadros de Diálogo

- **Bloqueantes**: Todos los cuadros de diálogo (alert(), confirm(), prompt()) son bloqueantes, lo que significa que detendrán la ejecución del código hasta que el usuario interactúe con ellos. Esto puede afectar la experiencia del usuario si se utilizan en exceso o en momentos inapropiados.

## Uso Práctico

Los cuadros de diálogo son útiles para:

- Proporcionar información importante al usuario.
- Confirmar acciones que podrían resultar en cambios o pérdidas de datos.
- Solicitar datos que son necesarios para continuar con una acción.

| Cuadro de Diálogo | Descripción                                                                                           | Uso                                      | Ejemplo                                             |
|--------------------|-------------------------------------------------------------------------------------------------------|------------------------------------------|-----------------------------------------------------|
| **`alert()`**      | Muestra un mensaje al usuario y espera a que presione "Aceptar".                                   | Mostrar información o advertencias      | `alert("¡Bienvenido!");`                           |
| **`confirm()`**    | Muestra un mensaje con "Aceptar" y "Cancelar". Devuelve `true` o `false` según la elección del usuario. | Confirmar acciones                     | `let respuesta = confirm("¿Seguro?");`             |
| **`prompt()`**     | Solicita al usuario que ingrese información. Devuelve el valor ingresado o `null` si se cancela.    | Obtener datos del usuario                | `let nombre = prompt("¿Cuál es tu nombre?");`     |
