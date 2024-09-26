# Map

## ¿Qué es un Map en JavaScript?

Un Map es una estructura de datos en JavaScript que permite almacenar pares de clave-valor. 

A diferencia de los objetos (Object), las claves de un Map pueden ser de cualquier tipo, ya sean objetos, funciones, números, cadenas, etc. 

Esto lo hace muy flexible comparado con los objetos tradicionales, que solo permiten cadenas o símbolos como claves.

## ¿Cómo crear un Map?

Se pueden crear un Map utilizando la palabra clave new Map(). 
Ejemplo:

```javascript
// Crear un Map vacío
let miMapa = new Map();
console.log(miMapa); // Output: Map(0) {}
```

También se pueden inicializar un Map con pares clave-valor pasándolos en un array de arrays al constructor:

```javascript
// Crear un Map con valores iniciales
let miMapa2 = new Map([
  ['nombre', 'Juan'],
  ['edad', 30],
  ['profesion', 'Desarrollador']
]);

console.log(miMapa2); 
// Output: Map(3) {"nombre" => "Juan", "edad" => 30, "profesion" => "Desarrollador"}
```

## Características clave de Map

- **Pares clave-valor**: cSada elemento de un Map está formado por una clave y un valor asociado.

- **Las claves pueden ser de cualquier tipo**: a diferencia de los objetos, un Map permite claves que no sean cadenas, como objetos, números, e incluso otras funciones.

- **Mantiene el orden de inserción**: cuando recorres un Map, los elementos se devuelven en el mismo orden en que fueron añadidos.

## Métodos más utilizados en la clase Map

### set(key, value)

Este método añade un nuevo par clave-valor al Map. 

Si la clave ya existe, su valor es actualizado.

```javascript
let miMapa = new Map();
miMapa.set('nombre', 'Ana');
miMapa.set('edad', 25);
miMapa.set('nombre', 'Luisa'); // Sobrescribe el valor de 'nombre'

console.log(miMapa);
// Output: Map(2) {"nombre" => "Luisa", "edad" => 25}
```

### get(key)

Este método devuelve el valor asociado a la clave especificada. 

Si la clave no existe, devuelve undefined.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log(miMapa.get('nombre')); // Output: "Juan"
console.log(miMapa.get('profesion')); // Output: undefined
```

### has(key)

Este método devuelve true si el Map contiene la clave especificada, y false si no.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log(miMapa.has('edad')); // Output: true
console.log(miMapa.has('direccion')); // Output: false
```

### delete(key)

Este método elimina el par clave-valor correspondiente a la clave especificada. Devuelve true si se eliminó con éxito, o false si la clave no existía.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
miMapa.delete('edad');
console.log(miMapa); // Output: Map(1) {"nombre" => "Juan"}
```

### clear()

Este método elimina todos los pares clave-valor del Map.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
miMapa.clear();
console.log(miMapa); // Output: Map(0) {}
```

### size

Esta propiedad devuelve el número de elementos (pares clave-valor) almacenados en el Map.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log(miMapa.size); // Output: 2
```

## Recorrer un Map
Al igual que con los arrays y Set, puedes recorrer un Map utilizando varios métodos como for..of o forEach.

### Usando for..of
Se pueden recorrer las claves, los valores o los pares clave-valor de un Map.

#### Para claves:

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);

for (let clave of miMapa.keys()) {
  console.log(clave);
}

// Output:
// nombre
// edad
```

#### Para valores:

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);

for (let valor of miMapa.values()) {
  console.log(valor);
}

// Output:
// Juan
// 30
```

#### Para pares clave-valor:

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);

for (let [clave, valor] of miMapa.entries()) {
  console.log(clave, valor);
}

// Output:
// nombre Juan
// edad 30
```

#### Usando forEach
Se puede recorrer un Map con forEach, que toma una función de devolución de llamada (callback).

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);

miMapa.forEach((valor, clave) => {
  console.log(clave, valor);
});

// Output:
// nombre Juan
// edad 30
```

## Diferencias entre Map y Object

Aunque ambos almacenan pares clave-valor, hay varias diferencias importantes entre Map y Object.

| Característica       | `Map`                          | `Object`                      |
|----------------------|--------------------------------|--------------------------------|
| Tipos de claves      | Cualquier tipo (objetos, funciones, etc.) | Solo cadenas o símbolos        |
| Orden de inserción   | Mantiene el orden de inserción | No garantiza el orden          |
| Métodos específicos   | `set`, `get`, `has`, `delete` | No tiene métodos específicos   |
| Prototipo            | No hereda propiedades del prototipo | Hereda propiedades del prototipo |

## Métodos adicionales

### keys(): Devuelve un iterador de las claves del Map.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log([...miMapa.keys()]); // Output: ['nombre', 'edad']
```

### values(): Devuelve un iterador de los valores del Map.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log([...miMapa.values()]); // Output: ['Juan', 30]
```

### entries(): Devuelve un iterador de los pares clave-valor del Map.

```javascript
let miMapa = new Map([['nombre', 'Juan'], ['edad', 30]]);
console.log([...miMapa.entries()]); // Output: [['nombre', 'Juan'], ['edad', 30]]
```