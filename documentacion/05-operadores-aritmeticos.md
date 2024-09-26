# Operadores aritmeticos

Los operadores aritméticos son símbolos que se utilizan para realizar operaciones matemáticas sobre números. 

Estos operadores permiten realizar cálculos básicos y son fundamentales en la programación para manipular datos numéricos.

## ¿Por qué usar Operadores Aritméticos?

- **Realización de Cálculos**: Permiten realizar operaciones matemáticas de forma rápida y sencilla.

- **Manipulación de Datos**: Son esenciales para procesar y analizar datos numéricos en tus programas.

- **Construcción de Algoritmos**: Facilitan la creación de algoritmos que requieren cálculos matemáticos.

## Principales Operadores Aritméticos

Lista de los operadores aritméticos más comunes en JavaScript:

| Operador | Descripción                       | Ejemplo           |
|----------|-----------------------------------|--------------------|
| `+`      | Suma                             | `5 + 3`  (resultado: `8`)  |
| `-`      | Resta                            | `5 - 3`  (resultado: `2`)  |
| `*`      | Multiplicación                   | `5 * 3`  (resultado: `15`) |
| `/`      | División                         | `6 / 2`  (resultado: `3`)  |
| `%`      | Módulo (resto de la división)   | `5 % 2`  (resultado: `1`)  |
| `**`     | Exponenciación                   | `2 ** 3`  (resultado: `8`) |


### Ejemplos de Uso
#### Suma (+)

La suma se utiliza para sumar dos o más números.

```javascript
let suma = 5 + 3; // suma es 8
console.log(suma); // Output: 8
```

#### Resta (-)

La resta se utiliza para restar un número de otro.

```javascript
let resta = 5 - 3; // resta es 2
console.log(resta); // Output: 2
```

#### Multiplicación (*)

La multiplicación se utiliza para multiplicar dos números.

```javascript
let multiplicacion = 5 * 3; // multiplicacion es 15
console.log(multiplicacion); // Output: 15
```

#### División (/)

La división se utiliza para dividir un número por otro.

```javascript
let division = 6 / 2; // division es 3
console.log(division); // Output: 3
```

#### Módulo (%)

El operador módulo devuelve el resto de la división entre dos números.

```javascript
let modulo = 5 % 2; // modulo es 1
console.log(modulo); // Output: 1
```

#### Exponenciación (**)

La exponenciación se utiliza para elevar un número a la potencia de otro.

```javascript
let exponente = 2 ** 3; // exponente es 8 (2 elevado a la 3)
console.log(exponente); // Output: 8
```

### Orden de las Operaciones

Cuando se usan múltiples operadores en una expresión, JavaScript sigue un orden de operaciones específico. El orden de prioridad es el siguiente:

1. Paréntesis ()
2. Exponenciación **
3. Multiplicación * y División / y Módulo %
4. Suma + y Resta -

#### Ejemplo de Orden de Operaciones
```javascript
let resultado = 2 + 3 * 4; // resultado es 14, porque 3 * 4 se calcula primero
console.log(resultado); // Output: 14
```
