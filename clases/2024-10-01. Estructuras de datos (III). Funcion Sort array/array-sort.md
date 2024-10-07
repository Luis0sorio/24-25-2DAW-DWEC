# ¿Qué es el método sort()?

El método sort() ordena los elementos de un array. Dependiendo del tipo de elementos (números o palabras), este método puede comportarse de maneras diferentes:

## Array de **Números**
Partimos de una lista de números desordenados:

```javascript
let numeros = [34, 7, 23, 32, 5, 62];
```

### Ordenar de Menor a Mayor (del más pequeño al más grande):
Si queremos ordenar estos números de menor a mayor, es decir, que el número más pequeño esté al principio y el más grande al final, necesitamos usar sort() pero con una pequeña función dentro de él. Esto se debe a que, si no lo hacemos, JavaScript a veces ordena los números como si fueran strings (y eso no nos serviría en este caso).

```javascript
numeros.sort((a, b) => a - b);
console.log(numeros);  // Resultado: [5, 7, 23, 32, 34, 62]
```

**Explicación detallada:**
1.	**numeros.sort()**: sort() es una función que ayuda a organizar los elementos del array. Sin embargo, cuando estamos trabajando con números, no los ordena correctamente por sí sola.

2.	**(a, b) => a - b**: Esta parte es un poco especial. Aquí le estamos diciendo a JavaScript cómo debe comparar dos números a la vez, a los que llamamos a y b. La fórmula a - b le dice al ordenador:

- Si a es más pequeño que b, coloca a primero.
- Si a es más grande que b, coloca b primero.
- Si son iguales, no cambia el orden.

Por lo tanto, después de hacer esto, la lista de números estará ordenada de menor a mayor: [5, 7, 23, 32, 34, 62].

### Ordenar de Mayor a Menor (del más grande al más pequeño):

También podemos ordenar los números al revés, es decir, desde el número más grande al más pequeño:

```javascript
numeros.sort((a, b) => b - a);
console.log(numeros);  // Resultado: [62, 34, 32, 23, 7, 5]
```

**Explicación**:
Aquí la fórmula b - a cambia el orden:
- Si b es más grande que a, coloca b primero.
- Si a es más grande que b, coloca a primero.

Por lo tanto, ahora la lista de números estará ordenada de mayor a menor: [62, 34, 32, 23, 7, 5].

## Array de strings
Ahora veamos un ejemplo con strings en vez de números. Imagina que tenemos un array con los nombres de algunas frutas:

```javascript
let frutas = ["naranja", "manzana", "banana", "pera", "kiwi"];
```

### Ordenar alfabéticamente (de la A a la Z):
Si queremos ordenar las frutas en orden alfabético, solo necesitamos usar el método sort() de esta manera:

```javascript
frutas.sort();
console.log(frutas);  // Resultado: ["banana", "kiwi", "manzana", "naranja", "pera"]
```

**Explicación Detallada**:
1.	**frutas.sort()**: A diferencia de los números, las palabras se ordenan alfabéticamente de manera predeterminada (sin necesidad de ninguna fórmula extra). JavaScript entiende cómo comparar letras y ordena las palabras de la A a la Z.

Después de usar sort(), el array quedará como: ["banana", "kiwi", "manzana", "naranja", "pera"].

## Ordenar en orden inverso (de la Z a la A):
Si quisiéramos el orden contrario, es decir, desde la última letra del abecedario hasta la primera, primero ordenamos normalmente con sort() y luego usamos el método reverse() para invertir el orden:

```javascript
frutas.sort().reverse();
console.log(frutas);  // Resultado: ["pera", "naranja", "manzana", "kiwi", "banana"]
```

**Explicación**:
1.	**sort()**: Primero, se ordenan las palabras de la A a la Z.
2.	**reverse()**: Luego, este método invierte el orden, poniendo la última palabra primero y la primera palabra al final.

Así obtenemos el array al revés: ["pera", "naranja", "manzana", "kiwi", "banana"].

## Ordenar por la longitud de las palabras (de la más corta a la más larga):
Si queremos ordenar las palabras no alfabéticamente, sino según cuántas letras tienen, podemos hacer lo siguiente:

```javascript
frutas.sort((a, b) => a.length - b.length);
console.log(frutas);  // Resultado: ["kiwi", "pera", "banana", "naranja", "manzana"]
```

**Explicación detallada**:
1.	**a.length y b.length**: Aquí estamos comparando el número de letras de cada palabra. a.length significa "la cantidad de letras de la palabra a", y b.length significa "la cantidad de letras de la palabra b".
2.	**a.length - b.length**: Esto compara las longitudes. Si a tiene menos letras que b, la fórmula devuelve un valor negativo, lo que indica que a debe ir antes en la lista.

Después de hacer esto, el array queda ordenado por la longitud de las palabras: ["kiwi", "pera", "banana", "naranja", "manzana"].


