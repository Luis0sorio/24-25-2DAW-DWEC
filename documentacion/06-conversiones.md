# Conversiones  

Las conversiones de tipo son el proceso de cambiar el tipo de un valor a otro tipo. 

JavaScript es un lenguaje de programación dinámico, lo que significa que no es necesario declarar el tipo de una variable de antemano. 

Esto permite que los valores se conviertan automáticamente entre diferentes tipos según sea necesario.

## ¿Por qué usar Conversiones de Tipo?

- **Flexibilidad**: Permite trabajar con diferentes tipos de datos sin necesidad de especificar el tipo de variable.

- **Comparaciones Correctas**: Ayuda a evitar errores en comparaciones y operaciones al convertir automáticamente los valores.

- **Manipulación de Datos**: Facilita la manipulación de datos al permitir convertir entre cadenas, números y otros tipos.

## Tipos de Conversión

JavaScript maneja principalmente dos tipos de conversiones:

- Conversión Implícita
- Conversión Explícita

### Conversión Implícita

La conversión implícita ocurre automáticamente cuando JavaScript convierte un tipo de dato a otro durante la ejecución del código.

Ejemplo

```javascript
const numero = 5;
const cadena = "10";

const resultado = numero + cadena; 
console.log(resultado); // Output: "510"
```

En este caso, JavaScript convierte automáticamente el número 5 en una cadena para realizar la concatenación, resultando en la cadena "510".

### Conversión Explícita

La conversión es explícita cuando el programador convierte un tipo de dato a otro intencionadamente usando funciones de conversión.

##### Conversión a Número
Puedes convertir una cadena a un número usando Number(), parseInt(), o parseFloat().

Ejemplo

```javascript
const cadenaNumero = "20";
const numero = Number(cadenaNumero); 
console.log(numero); // Output: 20
console.log(typeof numero); // Output: "number"
```

##### Conversión a Cadena
Para convertir un número a una cadena, puedes usar el método toString() o la concatenación con una cadena vacía ("").

Ejemplo

```javascript
const numero = 25;
const cadena = numero.toString();
console.log(cadena); // Output: "25"
console.log(typeof cadena); // Output: "string"
```

## Comparación de Conversión Implícita y Explícita

| Tipo de Conversión   | Descripción                                    | Ejemplo                                         |
|----------------------|------------------------------------------------|------------------------------------------------|
| Conversión Implícita | Sucede automáticamente en operaciones          | `5 + "10"` -> `"510"`                          |
| Conversión Explícita | Realizada intencionadamente por el programador | `Number("10")` -> `10`                         |
