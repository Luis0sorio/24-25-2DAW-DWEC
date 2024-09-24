# Set
Un Set en JavaScript es una colección de valores que no permite duplicados. 

Esto significa que, a diferencia de los arrays, un Set solo almacena valores únicos. 

Además, los valores almacenados no tienen un orden en particular, lo que lo diferencia de otros tipos de estructuras de datos como los arrays.

## ¿Cómo crear un Set?
Puedes crear un Set utilizando la palabra clave new Set(). 

Ejemplo básico:
```javascript
    // Crear un nuevo Set vacío
    let miSet = new Set();
    console.log(miSet); // Output: Set(0) {}
```

Este código crea un conjunto vacío, es decir, no contiene ningún valor.

También se puede inicializar un Set con valores pasándolos en un array (u otro iterable) dentro del constructor Set.

```javascript
    // Crear un Set con valores iniciales
    let miSet2 = new Set([1, 2, 3, 4]);

    console.log(miSet2); // Output: Set(4) {1, 2, 3, 4}
```

Se ha creado un Set con los valores 1, 2, 3, 4.

## Características clave de Set
1. **No permite duplicados**: Si intentas agregar un valor que ya existe en el Set, simplemente será ignorado.

2. **Es iterable**: Puedes recorrer un Set usando estructuras como for..of.

3. **Puede contener cualquier tipo de valor**: Desde números hasta objetos, siempre y cuando los valores sean únicos.

## Métodos más utilizados en la clase Set
1. add(value)
Este método añade un nuevo valor al Set. Si el valor ya existe, no se añadirá de nuevo.

```javascript
let miSet = new Set();
miSet.add(1);
miSet.add(2);
miSet.add(2); // No se añadirá de nuevo
miSet.add(3);

console.log(miSet); // Output: Set(3) {1, 2, 3}
```

2. has(value)
Este método devuelve true o false dependiendo de si el Set contiene o no el valor especificado.

```javascript
let miSet = new Set([1, 2, 3]);

console.log(miSet.has(2)); // Output: true
console.log(miSet.has(5)); // Output: false
```

3. delete(value)
Este método elimina un valor del Set. Si el valor no existe, no pasa nada.

```javascript
let miSet = new Set([1, 2, 3]);

miSet.delete(2);
console.log(miSet); // Output: Set(2) {1, 3}

miSet.delete(5); // No hace nada, ya que el valor no existe
console.log(miSet); // Output: Set(2) {1, 3}
```

4. clear()
Este método elimina todos los elementos del Set.

```javascript
let miSet = new Set([1, 2, 3]);

miSet.clear();
console.log(miSet); // Output: Set(0) {}
```

5. size
Esta propiedad devuelve la cantidad de elementos que contiene el Set.

```javascript
let miSet = new Set([1, 2, 3]);

console.log(miSet.size); // Output: 3
```

## Recorrer un Set
Puedes recorrer un Set utilizando varias formas, como el bucle for..of o el método forEach.

1. Usando for..of

```javascript
let miSet = new Set([1, 2, 3, 4]);

for (let valor of miSet) {
  console.log(valor);
}

// Output:
// 1
// 2
// 3
// 4
```

2. Usando forEach

```javascript
let miSet = new Set([1, 2, 3]);

miSet.forEach((valor) => {
  console.log(valor);
});

// Output:
// 1
// 2
// 3
```

## Comparacion de un Set con un Array
A menudo existen ciertas diferencias que confunden los Set con los Array. 
Ambos almacenan colecciones de datos pero existen diferencias importantes:

| Característica       | `Set`                    | `Array`                 |
|----------------------|--------------------------|-------------------------|
| Duplicados           | No permite duplicados     | Permite duplicados      |
| Orden de los elementos | No garantiza un orden específico | Mantiene el orden de inserción |
| Métodos comunes      | `add`, `has`, `delete`    | `push`, `pop`, `map`, etc. |
| Longitud             | `size`                   | `length`                |

## Metodos adicionales

1. entries(): Devuelve un iterador de los pares [valor, valor], ya que en un Set no hay claves como en un Map. La primera y segunda posición son el mismo valor.

```javascript
let miSet = new Set([1, 2, 3]);

for (let [valor1, valor2] of miSet.entries()) {
  console.log(valor1, valor2);
}

// Output:
// 1 1
// 2 2
// 3 3
```

- keys() y values(): En un Set, keys() y 

2. values() son lo mismo, ya que un Set solo almacena valores.

```javascript
let miSet = new Set([1, 2, 3]);

for (let valor of miSet.values()) {
  console.log(valor);
}

// Output:
// 1
// 2
// 3
```