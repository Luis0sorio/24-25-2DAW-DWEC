# Objeto Screen
El objeto Screen proporciona información sobre la pantalla del dispositivo que está utilizando el usuario. Esto incluye detalles como el ancho y alto de la pantalla, la resolución y la orientación. Esta información puede ser útil para adaptar el contenido web a las características específicas del dispositivo.

## Propiedades del objeto Screen

| Propiedad                   | Descripción                                                                                                                             | Ejemplo                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| `screen.width`              | El ancho de la pantalla en píxeles.                                                                                                   | `console.log(screen.width);`             |
| `screen.height`             | La altura de la pantalla en píxeles.                                                                                                  | `console.log(screen.height);`            |
| `screen.availWidth`         | El ancho disponible de la pantalla en píxeles, excluyendo la barra de tareas y otras áreas ocupadas.                                   | `console.log(screen.availWidth);`       |
| `screen.availHeight`        | La altura disponible de la pantalla en píxeles, excluyendo la barra de tareas y otras áreas ocupadas.                                  | `console.log(screen.availHeight);`      |
| `screen.colorDepth`         | El número de bits utilizados para representar el color de cada píxel.                                                                 | `console.log(screen.colorDepth);`       |
| `screen.pixelDepth`         | La profundidad de color en píxeles.                                                                                                   | `console.log(screen.pixelDepth);`       |
| `screen.orientation`        | Proporciona información sobre la orientación actual de la pantalla (landscape o portrait).                                             | `console.log(screen.orientation.type);` |

## Ejemplos de uso

1. Propiedades del objeto Screen

```javascript
// Obtener el ancho de la pantalla
console.log(screen.width); // Ejemplo: 1920

// Obtener la altura de la pantalla
console.log(screen.height); // Ejemplo: 1080

// Obtener el ancho disponible de la pantalla
console.log(screen.availWidth); // Ejemplo: 1920 (puede variar si hay barra de tareas)

// Obtener la altura disponible de la pantalla
console.log(screen.availHeight); // Ejemplo: 1040 (puede variar si hay barra de tareas)

// Obtener la profundidad de color
console.log(screen.colorDepth); // Ejemplo: 24

// Obtener la profundidad de píxeles
console.log(screen.pixelDepth); // Ejemplo: 24

// Obtener la orientación de la pantalla
console.log(screen.orientation.type); // Ejemplo: "landscape-primary" o "portrait-primary"
```






