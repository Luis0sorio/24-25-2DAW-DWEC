# Operadores logicos

Las expresiones lógicas (o booleanas) son combinaciones de valores que permiten realizar comparaciones y tomar decisiones basadas en condiciones. 

Se utilizan principalmente en los condicionales para determinar qué código ejecutar según si una condición es verdadera o falsa.

## ¿Por qué usar Expresiones Lógicas?

- **Toma de Decisiones**: ayudan a evaluar condiciones complejas en el flujo del programa.

- **Control de Flujo**: permiten dirigir la ejecución del código de manera eficiente.

- **Combinación de Condiciones**: permiten combinar múltiples condiciones para obtener resultados más específicos.

## Operadores Lógicos

JavaScript proporciona tres operadores lógicos principales:

AND (&&)
OR (||)
NOT (!)

### Operador AND (&&)

El operador AND devuelve true solo si ambas condiciones son verdaderas.

Ejemplo

```javascript
const edad = 20;
const tieneLicencia = true;

// Evaluamos si la persona es mayor de edad Y tiene licencia
if (edad >= 18 && tieneLicencia) {
  console.log("Puede conducir."); // Output: Puede conducir.
}
```

### Operador OR (||)

El operador OR devuelve true si al menos una de las condiciones es verdadera.

Ejemplo
```javascript
const edad = 16;
const tienePermiso = true;

// Evaluamos si la persona es menor de edad O tiene permiso
if (edad < 18 || tienePermiso) {
  console.log("Puede conducir con permiso."); // Output: Puede conducir con permiso.
}
```

### Operador NOT (!)

El operador NOT invierte el valor de la condición. Si la condición es verdadera, se convierte en falsa, y viceversa.

Ejemplo

```javascript
const esLluvia = false;

// Verificamos si NO está lloviendo
if (!esLluvia) {
  console.log("No es necesario llevar paraguas."); // Output: No es necesario llevar paraguas.
}
```

## Combinación de Expresiones Lógicas
Se pueden combinar múltiples expresiones lógicas para crear condiciones más complejas.

Ejemplo
```javascript
const edad = 25;
const tieneLicencia = true;
const esEstudiante = false;

// Evaluamos múltiples condiciones
if ((edad >= 18 && tieneLicencia) || esEstudiante) {
  console.log("Puede conducir."); // Output: Puede conducir.
}
```

## Verdadero y Falso en JavaScript
E
n JavaScript, ciertos valores se consideran "falsos" en una expresión lógica. Estos son:

- false
- 0
- "" (cadena vacía)
- null
- undefined
- NaN
- Todos los demás valores se consideran "verdaderos".

### Tabla de Ejemplos de Expresiones Lógicas

| Expresión Lógica               | Resultado          | Descripción                                 |
|--------------------------------|-------------------|---------------------------------------------|
| `true && true`                 | `true`            | Ambas condiciones son verdaderas.           |
| `true && false`                | `false`           | Una condición es falsa.                      |
| `false || true`                | `true`            | Al menos una condición es verdadera.        |
| `false || false`               | `false`           | Ambas condiciones son falsas.                |
| `!true`                        | `false`           | Negación de verdadera es falsa.             |
| `!false`                       | `true`            | Negación de falsa es verdadera.             |
