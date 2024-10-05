# ¿Qué es un nodo?

En el contexto del DOM, un nodo es una unidad de la estructura del documento. Todo en una página web (texto, elementos HTML, atributos, comentarios, etc.) se representa como un nodo. Los nodos se organizan en una estructura jerárquica, formando un árbol llamado árbol DOM.

## Tipos de nodos
Los nodos en el DOM se pueden clasificar en diferentes tipos. A continuación, se presentan los tipos más comunes de nodos:

1.	**Nodos de elementos**: Representan los elementos HTML. Cada etiqueta HTML se convierte en un nodo de elemento. Por ejemplo, ```<div>```, ```<p>```, ```<a>```, etc.

2.	**Nodos de texto**: Representan el texto dentro de un nodo de elemento. Cada fragmento de texto que aparece en el documento se convierte en un nodo de texto.

3.	**Nodos de comentario**: Representan los comentarios en el código HTML que no son visibles en la página, pero están presentes en el DOM.

4.	**Nodos de documento**: Este es el nodo raíz del árbol DOM y representa el documento completo.

5.	**Nodos de atributo**: Representan los atributos de los nodos de elementos (como id, class, src, etc.). Sin embargo, estos no son nodos de primer nivel en el árbol DOM.

## Estructura del árbol DOM

Para entender cómo se organizan los nodos, es útil visualizar la estructura del árbol DOM. Aquí hay un ejemplo de una simple estructura HTML y su correspondiente representación en el árbol DOM:

Ejemplo de HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de Nodos</title>
</head>
<body>
    <h1>Título Principal</h1>
    <p>Este es un párrafo de texto.</p>
    <div id="miDiv">
        <p>Este es un párrafo dentro de un div.</p>
        <a href="#">Un enlace</a>
    </div>
</body>
</html>
```

Estructura del árbol DOM

```
Document
│
├── html
│   ├── head
│   │   ├── title
│   │   └── "Ejemplo de Nodos" (texto)
│   └── body
│       ├── h1
│       │   └── "Título Principal" (texto)
│       ├── p
│       │   └── "Este es un párrafo de texto." (texto)
│       └── div#miDiv
│           ├── p
│           │   └── "Este es un párrafo dentro de un div." (texto)
│           └── a
│               └── "Un enlace" (texto)
```

En este árbol:
- Document es el nodo raíz.
- html es un nodo de elemento.
- head y body son nodos de elemento hijos del nodo html.
- Los elementos de texto dentro de las etiquetas (como "Título Principal" o "Este es un párrafo de texto") son nodos de texto.
