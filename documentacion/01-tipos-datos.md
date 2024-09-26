# Tipos datos

En JavaScript, un tipo de dato define la naturaleza del valor que una variable puede contener. 

Los tipos de datos son fundamentales porque determinan cómo se puede manipular la información. 

## Tipos de Datos Primitivos

Los tipos de datos primitivos son los valores más simples que no se pueden descomponer en otros tipos. 

| Tipo de Dato | Descripción                                                 | Ejemplo                    |
|--------------|-------------------------------------------------------------|-----------------------------|
| `String`     | Una secuencia de caracteres.                               | `"Hola, mundo!"`          |
| `Number`     | Representa números, tanto enteros como decimales.          | `42`, `3.14`              |
| `Boolean`    | Un valor lógico que puede ser `true` o `false`.            | `true`, `false`           |
| `Null`       | Representa la ausencia intencionada de un valor.            | `null`                     |
| `Undefined`  | Indica que una variable ha sido declarada pero no tiene valor. | `let x; console.log(x);`  |
| `Object`     | Una colección de pares clave-valor.                          | `let persona = { nombre: "Ana", edad: 30 };` |
| `Array`      | Un tipo especial de objeto que representa una lista ordenada. | `let numeros = [1, 2, 3];`          |

### Ejemplos de Tipos de Datos

#### String

```javascript
let saludo = "¡Hola, mundo!"; // Tipo de dato String
console.log(saludo);
```

#### Number

```javascript
let edad = 25; // Tipo de dato Number
console.log(edad);
```

#### Boolean

```javascript
let esEstudiante = true; // Tipo de dato Boolean
console.log(esEstudiante);
```

#### Null

```javascript
let valorNulo = null; // Tipo de dato Null
console.log(valorNulo);
```

#### Undefined

```javascript
let valorIndefinido; // Tipo de dato Undefined
console.log(valorIndefinido); // Output: undefined
```

#### Objeto

```javascript
let persona = { nombre: "Ana", edad: 30 }; // Tipo de dato Object
console.log(persona);
```

#### Array

```javascript
let numeros = [1, 2, 3, 4, 5]; // Tipo de dato Array
console.log(numeros);
```

### Secuencias de Escape en JavaScript

Las secuencias de escape son combinaciones de caracteres que se utilizan dentro de una cadena (string) para representar caracteres especiales o para insertar caracteres que de otra manera no se podrían escribir directamente. 

Comienzan con una barra invertida (\).

#### Secuencias de Escape Comunes

| Secuencia de Escape | Descripción                          | Ejemplo                         |
|---------------------|--------------------------------------|----------------------------------|
| `\'`                | Comilla simple                       | `'It\'s a nice day.'`          |
| `\"`                | Comilla doble                        | `"He said, \"Hello!\""`        |
| `\\`                | Barra invertida                      | `console.log("C:\\folder");`   |
| `\n`                | Nueva línea                          | `"Hola\nMundo"`                |
| `\t`                | Tabulación                           | `"Hola\tMundo"`                 |
| `\r`                | Retorno de carro                     | `console.log("Hola\rMundo");`  |
| `\b`                | Retroceso                            | `"Hola\b Mundo"`                |
| `\f`                | Salto de página                      | `console.log("Hola\fMundo");`  |
| `\v`                | Tabulación vertical                  | `console.log("Hola\vMundo");`  |
| `\0`                | Carácter nulo                        | `let nullChar = "\0";`         |

#### Ejemplo de Uso de Secuencias de Escape

```javascript
let texto = "Ella dijo: \"Hola, ¿cómo estás?\"";
console.log(texto); // Output: Ella dijo: "Hola, ¿cómo estás?"

let multilinea = "Línea 1\nLínea 2\nLínea 3";
console.log(multilinea);
// Output:
// Línea 1
// Línea 2
// Línea 3
```