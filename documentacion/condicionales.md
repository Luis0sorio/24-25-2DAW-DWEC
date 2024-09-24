# Condicionales

Los condicionales son estructuras que permiten tomar decisiones en el código. 

Ayudan a ejecutar un bloque de código si se cumple una determinada condición. 

## ¿Por qué usar Condicionales?

- **Toma de Decisiones**: Permiten que el programa se comporte de manera diferente según las condiciones.

- **Control de Flujo**: Ayudan a dirigir la ejecución del código según ciertas reglas.

- **Interactividad**: Hacen que la aplicación responda de manera adecuada a diferentes entradas o situaciones.

## Tipos de Condicionales en JavaScript
JavaScript ofrece varias formas de implementar condicionales. Los más comunes son:

- if
- if...else
- else if
- switch

### Condicional if
La estructura básica de un condicional if evalúa una condición y ejecuta un bloque de código si la condición es verdadera.

Sintaxis

```javascript
if (condición) {
  // Código a ejecutar si la condición es verdadera
}
```

Ejemplo

```javascript
const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad."); // Output: Eres mayor de edad.
}
```

### Condicional if...else
La estructura if...else te permite manejar dos casos: uno si la condición es verdadera y otro si es falsa.

Sintaxis

```javascript
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

Ejemplo

```javascript
const edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad."); // Output: Eres menor de edad.
}
```

### Condicional else if
Si existen múltiples condiciones que evaluar, se puede usar else if para agregar más opciones.

Sintaxis

```javascript
if (condición1) {
  // Código si condición1 es verdadera
} else if (condición2) {
  // Código si condición2 es verdadera
} else {
  // Código si ninguna condición es verdadera
}
```

Ejemplo

```javascript
const nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Bien"); // Output: Bien
} else {
  console.log("Necesitas mejorar");
}
```

4. Condicional switch
El condicional switch es útil cuando hay muchas condiciones que comparar. 

Permite evaluar una expresión y ejecutar un bloque de código basado en su valor.

Sintaxis

```javascript
switch (expresión) {
  case valor1:
    // Código si expresión es igual a valor1
    break;
  case valor2:
    // Código si expresión es igual a valor2
    break;
  default:
    // Código si ninguna condición coincide
}
```

Ejemplo

```javascript
const dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles"); // Output: Miércoles
    break;
  default:
    console.log("Otro día");
}
```

## Comparación de Condicionales
| Tipo de Condicional | Cuando usarlo                                     | Ejemplo de Uso                      |
|---------------------|--------------------------------------------------|-------------------------------------|
| `if`                | Para evaluar una sola condición                  | Verificar si un número es positivo  |
| `if...else`         | Para manejar dos casos (verdadero/falso)        | Determinar si una persona es mayor o menor de edad |
| `else if`          | Para manejar múltiples condiciones                | Evaluar el rango de calificaciones   |
| `switch`            | Para evaluar múltiples valores de una expresión   | Identificar el día de la semana      |
