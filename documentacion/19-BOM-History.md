# Objeto history
El objeto history permite el acceso a la historia de navegación del navegador. Permite interactuar con la pila de URLs visitadas por el usuario y proporciona métodos para navegar entre estas páginas.

## Métodos del objeto history
| Método                      | Descripción                                                                                                                                                             | Ejemplo                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `history.back()`            | Navega a la página anterior en la historia del navegador.                                                                                                            | `history.back();`                                                        |
| `history.forward()`         | Navega a la página siguiente en la historia del navegador.                                                                                                           | `history.forward();`                                                     |
| `history.go()`              | Navega a una posición específica en la historia. Puede ser un número positivo (páginas hacia adelante) o negativo (páginas hacia atrás).                             | `history.go(-1); // Va a la página anterior`<br>`history.go(1); // Va a la página siguiente` |
| `history.pushState()`       | Agrega una nueva entrada al historial del navegador. Permite modificar la URL sin recargar la página.                                                                   | `history.pushState({ key: "value" }, "Título", "nueva-url");`          |
| `history.replaceState()`    | Modifica la entrada actual en el historial del navegador. Similar a `pushState()`, pero reemplaza la entrada actual en lugar de agregar una nueva.                     | `history.replaceState({ key: "value" }, "Nuevo Título", "nueva-url");` |

## Ejemplos de uso
1. history.back()

```javascript
// Regresa a la página anterior en el historial
history.back();
```

Descripción: Este método te lleva a la página que el usuario visitó antes de la actual.

2. history.forward()

```javascript
// Avanza a la página siguiente en el historial
history.forward();
```

Descripción: Este método te lleva a la página que el usuario visitó después de la actual, si existe.

3. history.go()

```javascript
// Regresa a la página anterior
history.go(-1);

// Avanza a la página siguiente
history.go(1);
```

Descripción: Este método te permite especificar cuántas páginas quieres navegar hacia atrás o hacia adelante en el historial.

4. history.pushState()

```javascript
// Agrega una nueva entrada al historial
history.pushState({ page: 1 }, "Página 1", "pagina1.html");
```

Descripción: Este método agrega una nueva entrada en el historial del navegador. El primer argumento es un objeto de estado que puedes usar para almacenar información relacionada con esa entrada de historial. El segundo argumento es el título de la página (generalmente ignorado por los navegadores), y el tercer argumento es la URL que se muestra en la barra de direcciones.

5. history.replaceState()

```javascript
// Reemplaza la entrada actual en el historial
history.replaceState({ page: 2 }, "Página 2", "pagina2.html");
```

Descripción: Este método modifica la entrada actual en el historial del navegador. Al igual que pushState(), toma un objeto de estado, un título y una URL.