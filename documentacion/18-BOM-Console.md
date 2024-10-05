# Objeto console
El objeto console proporciona acceso a la consola de depuración del navegador, permitiendo la visualización de mensajes, errores, advertencias y otros datos de utilidad durante el desarrollo de aplicaciones web. Es una herramienta muy útil para la depuración y el seguimiento del comportamiento de una aplicación.

## Métodos del objeto console
A continuación se detallan los métodos más utilizados del objeto console:

| Método                      | Descripción                                                                                                                                                       | Ejemplo                                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `console.log()`             | Imprime un mensaje en la consola.                                                                                                                                 | `console.log("Hola, mundo!");`                                                                               |
| `console.error()`           | Imprime un mensaje de error en la consola, resaltado generalmente en rojo.                                                                                       | `console.error("Este es un error.");`                                                                        |
| `console.warn()`            | Imprime un mensaje de advertencia en la consola, resaltado generalmente en amarillo.                                                                              | `console.warn("Esto es una advertencia.");`                                                                  |
| `console.info()`            | Imprime un mensaje informativo en la consola.                                                                                                                    | `console.info("Este es un mensaje informativo.");`                                                           |
| `console.debug()`           | Imprime un mensaje de depuración en la consola, que puede no mostrarse en algunos navegadores si el nivel de depuración no está activado.                          | `console.debug("Este es un mensaje de depuración.");`                                                       |
| `console.table()`           | Imprime un objeto o un array en forma de tabla.                                                                                                                  | `console.table([{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 30 }]);`                            |
| `console.group()`           | Inicia un grupo de mensajes en la consola. Los mensajes posteriores se indentan bajo el grupo.                                                                      | `console.group("Grupo de Mensajes"); console.log("Mensaje 1"); console.log("Mensaje 2"); console.groupEnd();` |
| `console.groupCollapsed()`   | Inicia un grupo colapsado de mensajes en la consola.                                                                                                              | `console.groupCollapsed("Grupo Colapsado"); console.log("Mensaje dentro del grupo"); console.groupEnd();`     |
| `console.time()`            | Inicia un temporizador con una etiqueta especificada.                                                                                                            | `console.time("Mi temporizador"); // ... código a medir console.timeEnd("Mi temporizador");`                 |
| `console.timeEnd()`         | Detiene un temporizador iniciado con `console.time()` y muestra el tiempo transcurrido.                                                                          | `console.timeEnd("Mi temporizador");`                                                                         |
| `console.assert()`          | Imprime un mensaje de error si la expresión dada es falsa.                                                                                                       | `console.assert(1 === 2, "Esto es falso.");`                                                                |
| `console.clear()`           | Limpia la consola.                                                                                                                                              | `console.clear();`                                                                                            |
| `console.trace()`           | Imprime una traza de la pila en el punto donde se llama.                                                                                                        | `function test() { console.trace(); } test();`                                                              |
| `console.count()`           | Imprime el número de veces que se ha llamado a la función con una etiqueta específica.                                                                          | `console.count("Llamada a test");`                                                                          |
| `console.timeStamp()`       | Registra una marca de tiempo en el registro de la consola. (No es soportado en todos los navegadores).                                                            | `console.timeStamp("Marca de tiempo");`                                                                     |


## Ejemplos de uso
1. console.log()

```javascript
console.log("Este es un mensaje de log.");
```

Salida en consola:

```yaml
Este es un mensaje de log.
```

2. console.error()

```javascript
console.error("Error: no se pudo cargar el recurso.");
```

Salida en consola:

```yaml
Error: no se pudo cargar el recurso.
```

3. console.warn()
```javascript
console.warn("Advertencia: esto podría no funcionar como se espera.");
```

Salida en consola:

```yaml
Advertencia: esto podría no funcionar como se espera.
```

4. console.info()

```javascript
console.info("Información: la operación se completó con éxito.");
```

Salida en consola:

```yaml
Información: la operación se completó con éxito.
```

5. console.table()

```javascript
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 }
];

console.table(personas);
```

Salida en consola:

```
┌─────────┬─────────┬─────┐
│ (index) | nombre  | edad |
├─────────┼─────────┼─────┤
│    0    |  Juan   |  25 |
│    1    |   Ana   |  30 |
└─────────┴─────────┴─────┘
```

6. console.group()

```javascript
console.group("Grupo de Mensajes");
console.log("Mensaje 1 dentro del grupo.");
console.log("Mensaje 2 dentro del grupo.");
console.groupEnd();
```

Salida en consola:

```
Grupo de Mensajes
    Mensaje 1 dentro del grupo.
    Mensaje 2 dentro del grupo.
```

7. console.time()

```javascript
console.time("Operación");

// Simulando una operación que toma tiempo
for (let i = 0; i < 1000000; i++) {}

console.timeEnd("Operación");
```

Salida en consola:

```yaml
Operación: 10ms (o similar, dependiendo del tiempo de ejecución).
```

8. console.assert()

```javascript
console.assert(2 + 2 === 5, "La suma es incorrecta.");
```

Salida en consola:

```yaml
Assertion failed: La suma es incorrecta.
```

9. console.trace()

```javascript
function primero() {
    segundo();
}

function segundo() {
    tercero();
}

function tercero() {
    console.trace();
}

primero();
```

Salida en consola:

```
Trace
    en tercero (script.js:9)
    en segundo (script.js:5)
    en primero (script.js:1)
```

10. console.count()

```javascript
function contar() {
    console.count("Contador");
}

contar();
contar();
```

Salida en consola:

```
Contador: 1
Contador: 2
```