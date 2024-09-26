# Palabras reservadas

Las palabras reservadas son términos que tienen un significado especial en el lenguaje JavaScript. 

Estas palabras no pueden ser utilizadas como nombres de variables, funciones, o cualquier otro identificador. 

Las palabras reservadas son parte de la sintaxis del lenguaje y se utilizan para definir estructuras y comportamientos.

## Lista de Palabras Reservadas Comunes
Lista de algunas de las palabras reservadas más comunes en JavaScript:

| Palabra Reservada | Descripción                                       |
|-------------------|---------------------------------------------------|
| `break`           | Termina un bucle o una instrucción switch.        |
| `case`            | Define una opción en una instrucción switch.      |
| `catch`           | Maneja excepciones en un bloque try.              |
| `class`           | Define una clase en JavaScript.                   |
| `const`           | Declara una constante que no puede ser reasignada.|
| `continue`        | Salta a la siguiente iteración en un bucle.      |
| `debugger`        | Detiene la ejecución del script para depuración.  |
| `default`         | Define el caso predeterminado en una instrucción switch. |
| `delete`          | Elimina una propiedad de un objeto.               |
| `do`              | Inicia un bucle do...while.                       |
| `else`            | Define la alternativa en una estructura condicional. |
| `export`          | Exporta módulos en JavaScript.                    |
| `extends`         | Indica que una clase hereda de otra clase.       |
| `finally`         | Ejecuta un bloque de código después de try/catch. |
| `for`             | Inicia un bucle for.                              |
| `function`        | Declara una función.                              |
| `if`              | Inicia una estructura condicional.                |
| `import`          | Importa módulos en JavaScript.                    |
| `in`              | Verifica si una propiedad existe en un objeto.    |
| `instanceof`      | Verifica si un objeto es una instancia de una clase. |
| `let`             | Declara una variable con un alcance de bloque.   |
| `new`             | Crea una instancia de un objeto.                  |
| `return`          | Devuelve un valor de una función.                 |
| `super`           | Llama al constructor de la clase padre.          |
| `switch`         | Inicia una estructura switch.                      |
| `this`            | Hace referencia al objeto actual.                  |
| `throw`           | Lanza una excepción.                              |
| `try`             | Inicia un bloque de código que puede lanzar excepciones. |
| `var`             | Declara una variable.                             |
| `while`           | Inicia un bucle while.                            |
| `with`            | Extiende el alcance de un objeto (no recomendado).|
| `async`           | Declara una función asincrónica.                  |
| `await`           | Espera el resultado de una promesa.               |


### Importancia de las Palabras Reservadas

Las palabras reservadas son importantes porque son parte de la estructura del lenguaje. Intentar utilizar una palabra reservada como identificador causará un error de sintaxis, ya que el intérprete de JavaScript no podrá entender tu intención.

### Reglas de Identificadores en JavaScript

Los identificadores son nombres que se utilizan para identificar variables, funciones, clases, y otros elementos en JavaScript. Para que un identificador sea válido, debe seguir ciertas reglas.

#### Reglas para Nombres de Identificadores

Pueden contener letras, dígitos, guiones bajos (_), y signos de dólar ($):

Ejemplos: miVariable, variable_1, $dolar.

#### No pueden comenzar con un dígito:

Ejemplo inválido: 1variable (pero variable1 es válido).

#### No pueden ser palabras reservadas:

Ejemplo inválido: if, for, function.

#### o pueden contener espacios:

Ejemplo inválido: mi variable (pero miVariable es válido).

#### Son sensibles a mayúsculas y minúsculas:

Ejemplo: miVariable y mivariable son identificadores diferentes.

#### Ejemplos de Identificadores Válidos e Inválidos

| Identificador     | Válido/Invalido | Descripción                       |
|-------------------|------------------|-----------------------------------|
| `miVariable`      | Válido           | Comienza con letra, sin espacios. |
| `var1`            | Válido           | Comienza con letra, seguido de un dígito. |
| `_variable`       | Válido           | Comienza con guión bajo.          |
| `$dolar`          | Válido           | Comienza con signo de dólar.      |
| `2ndVariable`     | Inválido         | Comienza con un dígito.           |
| `mi variable`     | Inválido         | Contiene un espacio.               |
| `function`        | Inválido         | Es una palabra reservada.         |


#### Consejos para Elegir Identificadores

- **Utiliza nombres descriptivos**: los identificadores deben ser claros y describir su propósito. Por ejemplo, **edad** es mejor que **e**.

- **Seguir las convenciones**: utilizar camelCase para las variables y funciones (por ejemplo, miVariable), y PascalCase para las clases (por ejemplo, MiClase).

- **Evita abreviaturas confusas**: es importante asegurarse de que otros puedan entender fácilmente el código.