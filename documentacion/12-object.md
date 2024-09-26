# Object

Un objeto es una estructura de datos que permite almacenar colecciones de datos y entidades más complejas. 

En JavaScript, un objeto es una colección de propiedades, donde cada propiedad tiene una clave (también llamada nombre) y un valor. 

Los valores pueden ser de cualquier tipo, incluyendo otros objetos, funciones y arrays.

## ¿Cómo crear un Object?

Puedes crear un objeto de varias maneras:

### Usando la sintaxis de objeto literal ({}):

```javascript
// Crear un objeto vacío
let miObjeto = {};

console.log(miObjeto); // Output: {}
```

### Usando el constructor Object:

```javascript
// Crear un objeto con el constructor
let miObjeto2 = new Object();
miObjeto2.nombre = 'Juan';
miObjeto2.edad = 30;

console.log(miObjeto2); // Output: { nombre: 'Juan', edad: 30 }
```

### Usando Object.create():

```javascript
// Crear un objeto basado en otro objeto
let prototipo = { saludar: function() { console.log('Hola'); } };
let miObjeto3 = Object.create(prototipo);

miObjeto3.nombre = 'Ana';
console.log(miObjeto3); // Output: { nombre: 'Ana' }
```

## Características clave de un Object

- **Propiedades**: Un objeto está compuesto por pares clave-valor, donde las claves son cadenas (o símbolos) y los valores pueden ser de cualquier tipo.

- **Acceso a propiedades**: Puedes acceder a las propiedades de un objeto utilizando la notación de punto (.) o la notación de corchetes ([]).

- **No ordenados**: A diferencia de los arrays, los objetos no mantienen un orden específico en las propiedades.

## Métodos más utilizados en los Objetos

### Object.keys(obj)

Este método devuelve un array con las claves (propiedades) de un objeto.

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
let claves = Object.keys(miObjeto);
console.log(claves); // Output: ['nombre', 'edad']
```

### Object.values(obj)

Este método devuelve un array con los valores de las propiedades de un objeto.

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
let valores = Object.values(miObjeto);
console.log(valores); // Output: ['Juan', 30]
```

### Object.entries(obj)

Este método devuelve un array de arrays, donde cada sub-array contiene un par clave-valor de un objeto.

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
let entradas = Object.entries(miObjeto);
console.log(entradas); // Output: [['nombre', 'Juan'], ['edad', 30]]
```

### Object.assign(target, ...sources)

Este método copia las propiedades de uno o más objetos fuente a un objeto objetivo. Devuelve el objeto objetivo.

```javascript
let destino = { a: 1 };
let fuente = { b: 2, c: 3 };
Object.assign(destino, fuente);
console.log(destino); // Output: { a: 1, b: 2, c: 3 }
```

### Object.freeze(obj)

Este método congela un objeto, impidiendo que se añadan, eliminen o modifiquen sus propiedades.

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
Object.freeze(miObjeto);
miObjeto.edad = 31; // No tiene efecto
console.log(miObjeto); // Output: { nombre: 'Juan', edad: 30 }
```

### Object.seal(obj)

Este método sella un objeto, impidiendo la eliminación de propiedades, pero permitiendo la modificación de sus valores.

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
Object.seal(miObjeto);
miObjeto.edad = 31; // Modificación permitida
delete miObjeto.nombre; // No se puede eliminar
console.log(miObjeto); // Output: { nombre: 'Juan', edad: 31 }
```

## Acceso a propiedades
Se puede acceder a las propiedades de un objeto usando dos notaciones:

### Notación de punto

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
console.log(miObjeto.nombre); // Output: Juan
```

### Notación de corchetes

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };
console.log(miObjeto['edad']); // Output: 30
```

## Recorrer un Object
Se puede recorrer un objeto utilizando un bucle for..in o utilizando los métodos Object.keys(), Object.values() o Object.entries().

### Usando for..in

```javascript
let miObjeto = { nombre: 'Juan', edad: 30 };

for (let clave in miObjeto) {
  console.log(clave + ': ' + miObjeto[clave]);
}

// Output:
// nombre: Juan
// edad: 30
```

## Comparación de Objetos con Array, Set y Map

Tabla de comparación que muestra las diferencias clave entre objetos, arrays, Set y Map.

| Característica       | `Object`                     | `Array`                       | `Set`                        | `Map`                          |
|----------------------|------------------------------|-------------------------------|------------------------------|--------------------------------|
| Duplicados           | Permite duplicados (claves)  | Permite duplicados            | No permite duplicados         | Claves únicas (pero valores pueden ser duplicados) |
| Tipo de elementos     | Claves son cadenas/símbolos   | Cualquier tipo                | Cualquier tipo               | Cualquier tipo                 |
| Acceso               | Por clave                     | Por índice (0, 1, 2, ...)     | No hay índice, solo valores   | Por clave                      |
| Métodos principales   | `keys`, `values`, `entries`  | `push`, `pop`, `map`, `filter`| `add`, `has`, `delete`      | `set`, `get`, `has`, `delete` |
| Orden de elementos    | No garantiza el orden         | Mantiene el orden de inserción| Mantiene el orden de inserción| Mantiene el orden de inserción  |
