# DOM. Metodos seleccion

1. getElementById
Selecciona un elemento por su atributo id.

Descripción: Devuelve el elemento que tiene el id especificado. Es el método más rápido para acceder a un solo elemento.

Ejemplo:

```javascript
const element = document.getElementById('miElemento');
console.log(element);
```

2. getElementsByClassName
Selecciona todos los elementos que tienen una clase específica.

Descripción: Devuelve una colección de todos los elementos que tienen la clase especificada. La colección es "en vivo", lo que significa que se actualiza automáticamente cuando el DOM cambia.

Ejemplo:

```javascript
const elementos = document.getElementsByClassName('miClase');
console.log(elementos);
```

3. getElementsByTagName
Selecciona todos los elementos de un tipo específico.

Descripción: Devuelve una colección de todos los elementos con el nombre de etiqueta especificado. También es "en vivo".

Ejemplo:

```javascript
const parrafos = document.getElementsByTagName('p');
console.log(parrafos);
```

4. querySelector
Selecciona el primer elemento que coincide con un selector CSS.

Descripción: Devuelve el primer elemento que coincide con el selector CSS especificado. Es útil para seleccionar elementos más complejos utilizando selectores avanzados.

Ejemplo:

```javascript
const elemento = document.querySelector('.miClase p');
console.log(elemento);
```

5. querySelectorAll
Selecciona todos los elementos que coinciden con un selector CSS.

Descripción: Devuelve una lista estática de todos los elementos que coinciden con el selector CSS. A diferencia de getElementsByClassName y getElementsByTagName, esta lista no es "en vivo".

Ejemplo:

```javascript
const elementos = document.querySelectorAll('.miClase p');
console.log(elementos);
```

6. childNodes
Selecciona todos los nodos hijos de un elemento.

Descripción: Devuelve una colección de nodos hijos, incluyendo elementos, texto y comentarios.

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const hijos = padre.childNodes;
console.log(hijos);
```

7. children
Selecciona solo los elementos hijos de un elemento.

Descripción: Devuelve una colección de elementos hijos (elementos HTML) del elemento especificado, excluyendo nodos de texto y comentarios.

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const hijos = padre.children;
console.log(hijos);
```

8. firstChild
Selecciona el primer nodo hijo de un elemento.

Descripción: Devuelve el primer nodo hijo del elemento, que puede ser un elemento HTML, un nodo de texto o un nodo de comentario.

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const primerHijo = padre.firstChild;
console.log(primerHijo);
```

9. firstElementChild
Selecciona el primer elemento hijo de un elemento.

Descripción: Devuelve el primer hijo que es un elemento (excluyendo nodos de texto y comentarios).

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const primerElementoHijo = padre.firstElementChild;
console.log(primerElementoHijo);
```

10. lastChild
Selecciona el último nodo hijo de un elemento.

Descripción: Devuelve el último nodo hijo del elemento.

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const ultimoHijo = padre.lastChild;
console.log(ultimoHijo);
```

11. lastElementChild
Selecciona el último elemento hijo de un elemento.

Descripción: Devuelve el último hijo que es un elemento.

Ejemplo:

```javascript
const padre = document.getElementById('miElementoPadre');
const ultimoElementoHijo = padre.lastElementChild;
console.log(ultimoElementoHijo);
```

12. parentNode
Selecciona el nodo padre de un elemento.

Descripción: Devuelve el nodo padre del elemento especificado.

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const padre = elemento.parentNode;
console.log(padre);
```

13. parentElement
Selecciona el elemento padre de un elemento.

Descripción: Devuelve el elemento padre del nodo especificado (solo elementos, excluyendo nodos de texto y comentarios).

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const padre = elemento.parentElement;
console.log(padre);
```

14. nextSibling
Selecciona el siguiente nodo hermano de un elemento.

Descripción: Devuelve el siguiente nodo hermano del elemento, que puede ser un nodo de texto o un comentario.

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const siguienteHermano = elemento.nextSibling;
console.log(siguienteHermano);
```

15. nextElementSibling
Selecciona el siguiente elemento hermano de un elemento.

Descripción: Devuelve el siguiente hermano que es un elemento (excluyendo nodos de texto y comentarios).

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const siguienteElementoHermano = elemento.nextElementSibling;
console.log(siguienteElementoHermano);
```

16. previousSibling
Selecciona el nodo hermano anterior de un elemento.

Descripción: Devuelve el nodo hermano anterior del elemento, que puede ser un nodo de texto o un comentario.

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const hermanoAnterior = elemento.previousSibling;
console.log(hermanoAnterior);
```

17. previousElementSibling
Selecciona el elemento hermano anterior de un elemento.

Descripción: Devuelve el hermano anterior que es un elemento.

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
const elementoHermanoAnterior = elemento.previousElementSibling;
console.log(elementoHermanoAnterior);
```