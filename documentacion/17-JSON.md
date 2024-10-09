# Introduccion
En el código, JSON.parse() se utiliza para convertir una cadena de texto en un objeto de JavaScript. Esto es necesario porque los datos almacenados en localStorage siempre se guardan como **cadenas de texto** (string). 

Aunque se guarden objetos, arrays u otros tipos de datos, al ser almacenados en localStorage son automáticamente convertidos a formato de texto. 

Para poder manipular esos datos como objetos o arrays una vez que los recuperamos, debemos volver a **convertir esas cadenas de texto en estructuras de datos que JavaScript pueda entender**.

## JSON

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y escribir tanto para humanos como para las máquinas. 

Aunque nació a partir de la sintaxis de objetos de JavaScript, es independiente del lenguaje, lo que significa que puede ser utilizado en prácticamente cualquier lenguaje de programación.

### Características de JSON:
- **Es un formato de texto**: Los datos en JSON se representan como texto, lo que lo hace muy fácil de transportar a través de redes, almacenar en archivos, etc.

- **Fácil de entender**: Su estructura está basada en pares clave-valor y listas ordenadas, lo que facilita su comprensión.

- **Independiente del lenguaje**: Aunque proviene de JavaScript, se puede usar en lenguajes como Python, Java, C#, PHP, etc.

## Estructura de JSON
JSON se compone principalmente de dos estructuras:

- **Objetos**: Son conjuntos de pares clave-valor. Las claves son strings (cadenas de texto) y los valores pueden ser otro objeto, un array, un número, un string, un booleano o null.

Ejemplo de un objeto JSON:

```javascript
{
    "nombre": "Carlos",
    "edad": 35,
    "activo": true,
    "hobbies": ["leer", "programar", "deportes"]
}
```

En este ejemplo:

- "nombre" es la clave y "Carlos" es el valor.
- "edad" es la clave y 35 es el valor (un número).
- "activo" es la clave y true es el valor (un booleano).
- "hobbies" es la clave y su valor es un array de strings.

### Tipos de datos en JSON
En JSON solo se pueden representar algunos tipos de datos básicos:

- **Números**: Pueden ser enteros o decimales. No se usan comillas alrededor de los números.

```javascript
{ 
    "edad": 28 
}
```

- **Strings**: Son cadenas de texto que siempre van entre comillas dobles (").

```javascript
{ 
    "nombre": "Carlos" 
}
 ```

- **Booleanos**: Representan valores lógicos true o false, sin comillas.

```javascript
{ 
    "activo": true 
}
```

- **Nulos**: Representan la ausencia de valor con null.

```javascript
{ 
    "direccion": null 
}
 ```

- **Objetos**: Estructuras de pares clave-valor, como se explicó anteriormente.

```javascript
{ 
    "usuario": { 
        "nombre": "Ana", 
        "edad": 25 
    } 
}
```

- **Arrays**: Listas ordenadas de valores.

```javascript
{ 
    "frutas": ["manzana", "banana", "naranja"]
}
```

### Ventajas de usar JSON
- **Ligero y eficiente**: Comparado con otros formatos de intercambio de datos como XML, JSON tiene una sintaxis más compacta.

- **Fácil de parsear**: La mayoría de los lenguajes de programación ofrecen funciones integradas para convertir JSON en objetos nativos y viceversa (como JSON.parse() y JSON.stringify() en JavaScript).

- **Interoperable**: JSON es un estándar en el desarrollo de APIs, por lo que es un formato muy común en la comunicación entre el cliente y el servidor (por ejemplo, en aplicaciones web o móviles).

### Ejemplo práctico: JSON en una API
Supongamos que estás desarrollando una aplicación web que necesita obtener la lista de usuarios desde un servidor. El servidor puede devolver los datos en formato JSON. La respuesta podría verse así:

```javascript
[
    {
        "id": 1,
        "nombre": "Carlos",
        "email": "carlos@example.com"
    },
    {
        "id": 2,
        "nombre": "Ana",
        "email": "ana@example.com"
    }
]
```

## JSON.parse():
Este método toma una cadena de texto que está en formato JSON y la convierte en un objeto de JavaScript. Es decir, "parsea" (analiza) una cadena JSON para convertirla a un objeto válido que puedas usar dentro de tu código.

Ejemplo:


```javascript
const jsonString = '{"nombre": "Juan", "edad": 30, "activo": true}';

// Convertir cadena JSON a objeto JavaScript
const obj = JSON.parse(jsonString);

console.log(obj);
// Salida: { nombre: 'Juan', edad: 30, activo: true }
```

- **Entrada**: Una cadena JSON válida.
- **Salida**: Un objeto JavaScript, array o valor primitivo (si el JSON es un número, booleano, etc.).

En este caso, la cadena jsonString es una representación en formato JSON de un objeto. Cuando usamos JSON.parse(), esa cadena se convierte en un objeto de JavaScript que podemos manipular.

## JSON.stringfy

Este método toma un objeto, array o cualquier valor de JavaScript y lo convierte en una cadena en formato JSON. Es decir, serializa los datos para que puedan ser enviados o almacenados como texto.

Ejemplo:

```javascript
const obj = { nombre: "Juan", edad: 30, activo: true };


// Convertir objeto JavaScript a cadena JSON
const jsonString = JSON.stringify(obj);

console.log(jsonString);
// Salida: '{"nombre":"Juan","edad":30,"activo":true}'
```

- **Entrada**: Un objeto JavaScript, array, número, string, booleano, etc.
- **Salida**: Una cadena en formato JSON que representa los datos.


En este caso, el objeto **obj** es convertido a una cadena en formato JSON, que podríamos almacenar, enviar por red, o utilizar para otros propósitos. JSON es un formato ampliamente utilizado para intercambiar datos, especialmente entre servidores y clientes en aplicaciones web.

# Ampliación con localStorage del objeto Window

## Almacenar en localStorage

Cuando se guarda un objeto o array en localStorage, hay que convertirlo en una cadena de texto utilizando JSON.stringify(). Este método convierte un objeto o array en formato JSON (un texto que representa la estructura del objeto).

Ejemplo:

```javascript
const objeto = { nombre: 'Pedro', edad: 30 };
localStorage.setItem('persona', JSON.stringify(objeto));
```

## Recuperar de localStorage

Al recuperar datos de localStorage, se obtienen siempre como cadenas de texto. Si el valor recuperado es un objeto o un array (guardado como JSON), necesitas volver a convertirlo en una estructura de datos de JavaScript usando JSON.parse().

Ejemplo:

```javascript
const persona = JSON.parse(localStorage.getItem('persona'));
console.log(persona.nombre); // Salida: Pedro
```

