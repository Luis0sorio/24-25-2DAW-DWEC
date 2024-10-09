# Array

Un array es una estructura de datos que permite almacenar una colección de elementos en una sola variable. 

Los arrays pueden contener elementos de cualquier tipo, incluidos números, cadenas, objetos e incluso otros arrays. 

Los elementos de un array están indexados, lo que significa que cada elemento tiene un número que representa su posición en el array, comenzando desde 0.

## ¿Cómo crear un Array?

Se puede crear un array de varias maneras:

### Usando corchetes ([]):

```javascript
// Crear un array vacío
let miArray = [];

console.log(miArray); // Output: []
```

### Usando el constructor Array:

```javascript
// Crear un array con el constructor
let miArray2 = new Array(1, 2, 3, 4);

console.log(miArray2); // Output: [1, 2, 3, 4]
```

### Usando el método Array.of():

```javascript
let miArray3 = Array.of(5, 6, 7, 8);

console.log(miArray3); // Output: [5, 6, 7, 8]
```

## Características clave de un Array
### **Orden de elementos**: 

Los elementos de un array están ordenados, y se puede acceder a ellos a través de su índice.

### **Elementos de cualquier tipo**: 

Un array puede contener elementos de diferentes tipos, no necesariamente del mismo tipo.

### **Longitud dinámica**: 

La longitud de un array puede cambiar a medida que se añaden o eliminan elementos.

## Métodos más utilizados en los Arrays

### push(element)

Este método añade uno o más elementos al final del array y devuelve la nueva longitud del array.

```javascript
let miArray = [1, 2, 3];
miArray.push(4);
console.log(miArray); // Output: [1, 2, 3, 4]
```

### pop()

Este método elimina el último elemento del array y lo devuelve. 

Si el array está vacío, devuelve undefined.

```javascript
let miArray = [1, 2, 3];
let ultimoElemento = miArray.pop();
console.log(ultimoElemento); // Output: 3
console.log(miArray); // Output: [1, 2]
```

### shift()

Este método elimina el primer elemento del array y lo devuelve. 

Si el array está vacío, devuelve undefined.

```javascript
let miArray = [1, 2, 3];
let primerElemento = miArray.shift();
console.log(primerElemento); // Output: 1
console.log(miArray); // Output: [2, 3]
```

### unshift(element)

Este método añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.

```javascript
let miArray = [2, 3];
miArray.unshift(1);
console.log(miArray); // Output: [1, 2, 3]
```

### splice(start, deleteCount, item1, item2, ...)

Este método cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

```javascript
let miArray = [1, 2, 3, 4];
miArray.splice(1, 2, 5, 6); // Elimina 2 elementos a partir del índice 1 y agrega 5 y 6
console.log(miArray); // Output: [1, 5, 6, 4]
```

### slice(start, end)

Este método devuelve una copia superficial de una porción del array en un nuevo array, sin modificar el array original.

```javascript
let miArray = [1, 2, 3, 4];
let nuevoArray = miArray.slice(1, 3);
console.log(nuevoArray); // Output: [2, 3]
```

## Recorrer un Array

Se puede recorrer un array utilizando varias estructuras de control, como for, for..of y forEach.

### Usando un bucle for

```javascript
let miArray = [1, 2, 3];

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

// Output:
// 1
// 2
// 3
```

### Usando for..of

```javascript
let miArray = [1, 2, 3];

for (let valor of miArray) {
  console.log(valor);
}

// Output:
// 1
// 2
// 3
```

### Usando forEach

```javascript
let miArray = [1, 2, 3];

miArray.forEach((valor) => {
  console.log(valor);
});

// Output:
// 1
// 2
// 3
```

## Comparación de Arrays con Set y Map

Aquí hay una tabla de comparación que muestra las diferencias clave entre arrays, Set y Map.

| Característica       | `Array`                       | `Set`                        | `Map`                          |
|----------------------|-------------------------------|------------------------------|--------------------------------|
| Duplicados           | Permite duplicados            | No permite duplicados        | Claves únicas (pero valores pueden ser duplicados) |
| Tipo de elementos     | Cualquier tipo                | Cualquier tipo               | Cualquier tipo                 |
| Acceso               | Por índice (0, 1, 2, ...)     | No hay índice, solo valores   | Por clave                      |
| Métodos principales   | `push`, `pop`, `map`, `filter`| `add`, `has`, `delete`      | `set`, `get`, `has`, `delete` |
| Orden de elementos    | Mantiene el orden de inserción| Mantiene el orden de inserción| Mantiene el orden de inserción  |