# Asignaciones

Las asignaciones en JavaScript son el proceso de guardar un valor en una variable. 

Cuando ase asigna un valor a una variable, se crea una referencia a ese valor que puedes utilizar y manipular más adelante en el programa.

## ¿Por qué usar Asignaciones?

- **Almacenamiento de Datos**: permiten guardar información que se puede utilizar posteriormente.

- **Organización del Código**: ayudan a organizar y estructurar tu código de manera que sea más fácil de entender y mantener.

- **Manipulación de Valores**: facilitan la modificación y el uso de datos en operaciones.

## Sintaxis de la Asignación

La sintaxis básica para asignar un valor a una variable en JavaScript es la siguiente:

```javascript
variable = valor;
```

- **variable**: El nombre de la variable donde se guardará el valor.
- **valor**: El dato que deseas almacenar (puede ser un número, una cadena, un objeto, etc.).

Ejemplo de Asignación

```javascript
let nombre = "Juan"; // Asignación de una cadena
let edad = 25;       // Asignación de un número
```

## Tipos de Asignaciones

Existen diferentes formas de asignar valores en JavaScript:

- Asignación Simple
- Asignación Compuesta
- Asignación Destructurada

### Asignación Simple

La forma más básica de asignación, donde se asigna un valor directamente a una variable.

```javascript
let numero = 10; // Asignación simple
```

### Asignación Compuesta

Se utiliza para realizar operaciones matemáticas y luego asignar el resultado a la misma variable. Utiliza operadores como +=, -=, *=, /=, entre otros.

Ejemplo:

```javascript
let contador = 5;
contador += 2; // Equivale a: contador = contador + 2;
console.log(contador); // Output: 7
```

### Asignación Destructurada

Es una forma de extraer valores de arrays u objetos y asignarlos a variables de manera más sencilla.

Ejemplo con Arrays

```javascript
const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;

console.log(uno); // Output: 1
console.log(dos); // Output: 2
```

Ejemplo con Objetos

```javascript
const persona = { nombre: "Ana", edad: 30 };
const { nombre, edad } = persona;

console.log(nombre); // Output: "Ana"
console.log(edad);   // Output: 30
```

## Tipos de Declaración de Variables
En JavaScript, hay tres formas principales de declarar variables:

- **var**: Se utiliza para declarar variables que pueden cambiar su valor. **Tiene un alcance global o de función**.

- **let**: Se utiliza para declarar variables que pueden cambiar su valor. **Tiene un alcance de bloque**.

- **const**: Se utiliza para declarar constantes, que son variables que **no pueden cambiar su valor** una vez asignado.

Ejemplo de Declaración

```javascript
var nombreVar = "Pedro"; // Con var
let nombreLet = "Luis";   // Con let
const nombreConst = "Sara"; // Con const
```
