# DOM. Metodos manipulación

1. Crear y añadir elementos
document.createElement(tagName): Crea un nuevo elemento.

```javascript
const newDiv = document.createElement("div");
```

parentElement.appendChild(childElement): Añade un hijo al final de un elemento padre.

```javascript
const parent = document.getElementById("parent");
parent.appendChild(newDiv);
```

parentElement.insertBefore(newElement, referenceElement): Inserta un nuevo elemento antes de un elemento de referencia.

```javascript
const reference = document.getElementById("reference");
parent.insertBefore(newDiv, reference);
```

element.replaceChild(newChild, oldChild): Reemplaza un hijo existente con un nuevo elemento.

```javascript
parent.replaceChild(newDiv, oldDiv);
```

2. Eliminar elementos
element.remove(): Elimina un elemento del DOM.

```javascript
const element = document.getElementById("miElemento");
element.remove();
```

parentElement.removeChild(childElement): Elimina un hijo específico de un elemento padre.

```javascript
const parent = document.getElementById("parent");
parent.removeChild(child);
```

3. Modificar atributos
element.setAttribute(attribute, value): Establece un atributo en un elemento.

```javascript
const element = document.getElementById("miElemento");
element.setAttribute("data-info", "valor");
```

element.getAttribute(attribute): Obtiene el valor de un atributo.

```javascript
const value = element.getAttribute("data-info");
```

element.removeAttribute(attribute): Elimina un atributo de un elemento.

```javascript
element.removeAttribute("data-info");
```

4. Modificar contenido
element.innerHTML: Establece o obtiene el HTML interno de un elemento.

```javascript
element.innerHTML = "<strong>Texto en negrita</strong>";
```

element.textContent: Establece o obtiene el contenido de texto de un elemento.

```javascript
element.textContent = "Texto solo en texto plano";
```

element.value: Establece o obtiene el valor de un elemento de formulario (como un <input>).

```javascript
const input = document.getElementById("miInput");
input.value = "Nuevo valor";
```

5. Clases
element.classList.add(className): Añade una clase a un elemento.

```javascript
element.classList.add("nuevaClase");
```

element.classList.remove(className): Elimina una clase de un elemento.

```javascript
element.classList.remove("nuevaClase");
```

element.classList.toggle(className): Añade o elimina una clase dependiendo de si ya existe.

```javascript
element.classList.toggle("nuevaClase");
```