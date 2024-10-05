# Objeto Document
El objeto Document representa la estructura del contenido de una página web. Es una interfaz de programación que permite interactuar con el contenido HTML o XML de la página, facilitando la manipulación de elementos, atributos y eventos. Este objeto es fundamental en el desarrollo web, ya que permite acceder y modificar el DOM (Document Object Model).

## Propiedades del objeto Document

| Propiedad                   | Descripción                                                                                                                  | Ejemplo                                                      |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `document.title`            | Obtiene o establece el título del documento (contenido de la etiqueta `<title>`).                                           | `console.log(document.title);`                             |
| `document.body`             | Devuelve el elemento `<body>` del documento.                                                                                | `console.log(document.body);`                              |
| `document.head`             | Devuelve el elemento `<head>` del documento.                                                                                | `console.log(document.head);`                              |
| `document.documentElement`   | Devuelve el elemento raíz del documento, generalmente el elemento `<html>`.                                                | `console.log(document.documentElement);`                   |
| `document.URL`              | Devuelve la URL del documento.                                                                                              | `console.log(document.URL);`                               |
| `document.domain`           | Devuelve el dominio del documento.                                                                                           | `console.log(document.domain);`                            |
| `document.referrer`         | Devuelve la URL de la página que enlazó al documento actual.                                                                | `console.log(document.referrer);`                          |
| `document.anchors`          | Devuelve una colección de todos los elementos `<a>` en el documento que tienen el atributo `name`.                         | `console.log(document.anchors);`                           |
| `document.images`           | Devuelve una colección de todos los elementos `<img>` en el documento.                                                      | `console.log(document.images);`                            |
| `document.forms`            | Devuelve una colección de todos los elementos `<form>` en el documento.                                                    | `console.log(document.forms);`                             |
| `document.links`            | Devuelve una colección de todos los elementos `<a>` en el documento que tienen el atributo `href`.                        | `console.log(document.links);`                             |
| `document.styleSheets`      | Devuelve una colección de todas las hojas de estilo aplicadas al documento.                                                 | `console.log(document.styleSheets);`                       |
| `document.scripts`          | Devuelve una colección de todos los elementos `<script>` en el documento.                                                  | `console.log(document.scripts);`                           |
| `document.cookie`           | Obtiene o establece las cookies del documento.                                                                               | `console.log(document.cookie);`                            |
| `document.readyState`       | Devuelve el estado de carga del documento (`loading`, `interactive`, `complete`).                                          | `console.log(document.readyState);`                        |
| `document.characterSet`     | Devuelve el conjunto de caracteres del documento.                                                                           | `console.log(document.characterSet);`                      |
| `document.contentType`      | Devuelve el tipo de contenido del documento.                                                                                | `console.log(document.contentType);`                       |

| Método                          | Descripción                                                                                                                     | Ejemplo                                                      |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `document.getElementById(id)`    | Devuelve el elemento con el ID especificado.                                                                                 | `const element = document.getElementById('miId');`         |
| `document.getElementsByClassName(className)` | Devuelve una colección de elementos con la clase especificada.                                                                 | `const elements = document.getElementsByClassName('miClase');` |
| `document.getElementsByTagName(tagName)`  | Devuelve una colección de elementos con el nombre de etiqueta especificado.                                                      | `const elements = document.getElementsByTagName('div');`   |
| `document.querySelector(selectors)`         | Devuelve el primer elemento que coincide con el selector CSS especificado.                                                       | `const element = document.querySelector('.miClase');`       |
| `document.querySelectorAll(selectors)`      | Devuelve una colección de todos los elementos que coinciden con el selector CSS especificado.                                   | `const elements = document.querySelectorAll('p');`          |
| `document.createElement(tagName)`           | Crea un nuevo elemento del tipo especificado.                                                                                  | `const newElement = document.createElement('div');`         |
| `document.createTextNode(text)`             | Crea un nuevo nodo de texto con el texto especificado.                                                                        | `const textNode = document.createTextNode('Hola Mundo');`   |
| `document.appendChild(node)`                 | Agrega un nuevo nodo como último hijo de un elemento.                                                                          | `document.body.appendChild(newElement);`                    |
| `document.removeChild(node)`                 | Elimina un nodo hijo del documento.                                                                                             | `document.body.removeChild(newElement);`                    |
| `document.replaceChild(newNode, oldNode)`    | Reemplaza un nodo hijo por otro.                                                                                                 | `document.replaceChild(newElement, oldElement);`            |
| `document.write(text)`                        | Escribe texto en el documento.                                                                                                   | `document.write('<p>Hola Mundo</p>');`                      |
| `document.close()`                            | Cierra el documento.                                                                                                             | `document.close();`                                         |
| `document.open()`                             | Abre un nuevo documento y permite escribir en él.                                                                               | `document.open();`                                         |
| `document.getElementsByName(name)`           | Devuelve una colección de todos los elementos con el atributo `name` especificado.                                            | `const elements = document.getElementsByName('miNombre');` |

## Ejemplos de uso

1. Propiedades del objeto Document

```javascript
// Obtener el título del documento
console.log(document.title); // Ejemplo: "Mi Página Web"

// Obtener el cuerpo del documento
console.log(document.body); // Ejemplo: <body>...</body>

// Obtener el elemento raíz del documento
console.log(document.documentElement); // Ejemplo: <html>...</html>

// Obtener la URL del documento
console.log(document.URL); // Ejemplo: "https://www.ejemplo.com"

// Obtener el dominio del documento
console.log(document.domain); // Ejemplo: "www.ejemplo.com"

// Obtener la referencia de la página anterior
console.log(document.referrer); // Ejemplo: "https://www.pagina-anterior.com"

// Obtener todos los elementos de imagen
console.log(document.images); // Ejemplo: HTMLCollection(3) [img, img, img]

// Obtener todos los formularios
console.log(document.forms); // Ejemplo: HTMLCollection(2) [form, form]

// Obtener todos los enlaces
console.log(document.links); // Ejemplo: HTMLCollection(5) [a, a, a, a, a]
```

2. Métodos del objeto Document
a. document.getElementById(id)

```javascript
// Obtener un elemento por ID
const myElement = document.getElementById('miId');
console.log(myElement); // Ejemplo: <div id="miId">Contenido</div>
```

b. document.getElementsByClassName(className)

```javascript
// Obtener elementos por clase
const elements = document.getElementsByClassName('miClase');
console.log(elements); // Ejemplo: HTMLCollection(2) [div, div]
```

c. document.getElementsByTagName(tagName)

```javascript
// Obtener elementos por nombre de etiqueta
const divs = document.getElementsByTagName('div');
console.log(divs); // Ejemplo: HTMLCollection(3) [div, div, div]
```

d. document.querySelector(selectors)

```javascript
// Obtener el primer elemento que coincide con el selector CSS
const firstDiv = document.querySelector('div.miClase');
console.log(firstDiv); // Ejemplo: <div class="miClase">Contenido</div>
```

e. document.querySelectorAll(selectors)

```javascript
// Obtener todos los elementos que coinciden con el selector CSS
const allDivs = document.querySelectorAll('div');
console.log(allDivs); // Ejemplo: NodeList(3) [div, div, div]
```

f. document.createElement(tagName)

```javascript
// Crear un nuevo elemento
const newDiv = document.createElement('div');
newDiv.textContent = 'Este es un nuevo div';
document.body.appendChild(newDiv); // Agregar el nuevo div al body
```

g. document.createTextNode(text)

```javascript
// Crear un nodo de texto
const textNode = document.createTextNode('Hola Mundo');
const newParagraph = document.createElement('p');
newParagraph.appendChild(textNode); // Agregar el nodo de texto al párrafo
document.body.appendChild(newParagraph); // Agregar el párrafo al body
```

h. document.appendChild(node)

```javascript
// Agregar un nodo al documento
const anotherDiv = document.createElement('div');
anotherDiv.textContent = 'Este es otro div';
document.body.appendChild(anotherDiv); // Agregar el otro div al body
```

i. document.removeChild(node)

```javascript
// Eliminar un nodo del documento
const divToRemove = document.getElementById('miId');
document.body.removeChild(divToRemove); // Eliminar el div con ID "miId"
```

j. document.replaceChild(newNode, oldNode)

```javascript
// Reemplazar un nodo
const oldDiv = document.getElementById('oldDiv');
const newDiv = document.createElement('div');
newDiv.textContent = 'Este es el nuevo div';
document.body.replaceChild(newDiv, oldDiv); // Reemplazar el viejo div por el nuevo
```

k. document.write(text)

```javascript
// Escribir en el documento
document.write('<h1>Bienvenido a mi página</h1>');
```

l. document.close()

```javascript
// Cerrar el documento
document.close(); // Utilizado después de usar document.open()
```

m. document.open()

```javascript
// Abrir un nuevo documento
document.open(); // Preparar para escribir en un nuevo documento
document.write('<h1>Nuevo Documento</h1>'); // Escribir en el nuevo documento
```

n. document.getElementsByName(name)

```javascript
// Obtener elementos por nombre
const elements = document.getElementsByName('miNombre');
console.log(elements); // Ejemplo: NodeList(2) [input, input]
```
