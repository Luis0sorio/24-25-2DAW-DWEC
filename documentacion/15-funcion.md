# Funcion 

Una función es un conjunto de instrucciones que se pueden seguir para realizar una tarea específica. 

En JavaScript, las funciones permiten agrupar código para reutilizarlo sin tener que escribirlo varias veces.

## ¿Para qué se usan las funciones?

Las funciones son útiles porque:

- **Reutilización**: se speden usar la misma función en diferentes lugares sin tener que volver a escribir el código.

- **Organización**: ayudan a mantener el código ordenado y fácil de entender.

- **Abstracción**: permiten ocultar los detalles complejos, así que solo es necesario saber qué hace la función, no cómo lo hace.

## ¿Cómo crear una Función?

Hay varias formas de crear funciones en JavaScript:

###  Función Declarada

Este es el método más común y fácil de entender. 

Se define con la palabra clave **function**, seguida de un nombre y un bloque de código entre llaves **{}**.

```javascript
// Declaramos una función llamada 'saludar'
function saludar() {
  console.log("¡Hola, mundo!");
}

// Llamamos a la función para que ejecute su código
saludar(); // Output: ¡Hola, mundo!
```

### Función con Parámetros

Se utiliza cuando es necesario que la función use la infomación que se le pasa. 

En este caso se hace mediante parámetros. 

```javascript
// Declaramos una función que saluda a una persona
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Llamamos a la función y le pasamos un nombre
saludar("Juan"); // Output: ¡Hola, Juan!
```

### ¿Qué es un Parámetro?

Un parámetro es una variable que se usa dentro de la función para recibir información. 

En el ejemplo anterior, **nombre** es un parámetro.

### ¿Qué es un Argumento?

Un argumento es el valor real que le se proporciona a una función cuando se le invoca. 

En saludar("Juan"), el **argumento** es "Juan".

### ¿Qué es el Valor de Retorno?
A veces, será necesario que una función devuelva un resultado. 

Para eso, se usa la palabra clave **return**. 

Esto es útil cuando se necesita usar o almacenar el resultado de la función en otra parte del programa.

```javascript
// Función que suma dos números y devuelve el resultado
function sumar(a, b) {
  return a + b; // Devuelve la suma
}

// Llamamos a la función y guardamos el resultado
let resultado = sumar(5, 3);
console.log(resultado); // Output: 8
```

## ¿Cómo se llaman a las Funciones?

Para ejecutar una función, simplemente se llama por su nombre seguido de paréntesis. 

Si la función necesita parámetros, se colocan dentro de los paréntesis.

```javascript
// Llamamos a la función y le pasamos dos números
console.log(sumar(10, 5)); // Output: 15
```

## Funciones Anónimas

También se pueden crear funciones que no tienen nombre. 

Se llaman funciones anónimas y son útiles cuando se necesitan solo una vez.

```javascript
// Usando una función anónima
setTimeout(function() {
  console.log("¡Esto aparece después de 2 segundos!");
}, 2000); // Espera 2000 milisegundos antes de ejecutar
```

## ¿Qué es Recursividad?

A veces, una función puede llamarse a sí misma. Esto se llama recursividad. 

Es útil para problemas que se pueden dividir en partes más pequeñas.

Aquí hay un ejemplo de una función que calcula el factorial de un número:

```javascript
/**
 * Calcula el factorial de un número.
 *
 * @param {number} n - Un número entero no negativo.
 * @returns {number} El factorial de n.
 */
function factorial(n) {
  if (n === 0) {
    return 1; // Caso base
  }
  return n * factorial(n - 1); // Llamada recursiva
}

console.log(factorial(5)); // Output: 120
```

## Documentación de Funciones con JSDoc

Para hacer que el código sea más fácil de entender, se pueden usar comentarios especiales llamados JSDoc. 

Permite describir qué hace la función, qué parámetros recibe y qué devuelve.

```javascript
/**
 * Suma dos números y devuelve el resultado.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de a y b.
 */
function sumar(a, b) {
  return a + b;
}
```