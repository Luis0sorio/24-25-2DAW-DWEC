# Bucles

Un bucle es una estructura de control que te permite ejecutar un bloque de código varias veces, hasta que se cumpla una condición específica. Los bucles son útiles cuando necesitas repetir acciones, como procesar elementos en una lista.

## ¿Por qué usar Bucles?
- **Repetición de Código**: ahorran el esfuerzo de escribir el mismo código una y otra vez.

- **Automatización**: Permiten realizar tareas repetitivas de forma automática.

- **Eficiencia**: Hacen que el código sea más corto y más fácil de mantener.

## Tipos de Bucles en JavaScript
JavaScript ofrece varios tipos de bucles. Los más comunes son:

- Bucle for
- Bucle while
- Bucle do...while
- Bucle for...of
- Bucle for...in

#### Bucle for
El bucle for es uno de los más comunes. Permite repetir un bloque de código un número específico de veces.

Sintaxis

```javascript
for (inicialización; condición; actualización) {
  // Código a ejecutar
}
```

Ejemplo

```javascript
// Usamos un bucle for para contar del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1, 2, 3, 4, 5
}
```

#### Bucle while
El bucle while ejecuta el bloque de código mientras se cumpla una condición.

Sintaxis

```javascript
while (condición) {
  // Código a ejecutar
}
```

Ejemplo

```javascript
// Usamos un bucle while para contar del 1 al 5
let i = 1;
while (i <= 5) {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++; // Aumentamos i en 1
}
```

#### Bucle do...while
El bucle do...while es similar al while, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio.

Sintaxis

```javascript
do {
  // Código a ejecutar
} while (condición);
```

Ejemplo

```javascript
// Usamos un bucle do...while para contar del 1 al 5
let i = 1;
do {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++;
} while (i <= 5);
```

#### Bucle for...of
El bucle for...of se utiliza para iterar sobre elementos de una colección, como un array o una cadena de texto.

Sintaxis

```javascript
for (const elemento of colección) {
  // Código a ejecutar
}
```

Ejemplo

```javascript
// Usamos for...of para recorrer un array
const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
  console.log(fruta); // Output: manzana, banana, naranja
}
```

#### Bucle for...in
El bucle for...in se utiliza para iterar sobre las propiedades de un objeto.

Sintaxis

```javascript
for (const clave in objeto) {
  // Código a ejecutar
}
```

Ejemplo

```javascript
// Usamos for...in para recorrer las propiedades de un objeto
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (const clave in persona) {
  console.log(clave + ": " + persona[clave]); 
  // Output: nombre: Juan, edad: 30, ciudad: Madrid
}
```

## Comparación de Bucles
| Tipo de Bucle   | Cuando usarlo                            | Ejemplo de Uso                              |
|------------------|-----------------------------------------|---------------------------------------------|
| `for`            | Cuando conoces cuántas veces ejecutar   | Contar del 1 al 10                          |
| `while`          | Cuando no sabes cuántas veces ejecutar  | Leer datos hasta que se reciba un "fin"    |
| `do...while`     | Garantizar que se ejecute al menos una vez | Preguntar al usuario hasta que responda "sí" |
| `for...of`       | Para recorrer arrays y colecciones      | Listar elementos de un array                |
| `for...in`       | Para recorrer propiedades de un objeto   | Mostrar propiedades de un objeto             |
