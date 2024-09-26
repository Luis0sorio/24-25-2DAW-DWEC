# Atributos de la Etiqueta ```<script>``` en HTML

La etiqueta ```<script>``` en HTML se utiliza para incluir código JavaScript en una página web. 

Esta etiqueta puede contener código JavaScript directamente o puede hacer referencia a un archivo JavaScript externo. 

Además, la etiqueta ```<script>``` tiene varios atributos que permiten controlar cómo se carga y se ejecuta el código JavaScript.

## Atributos Comunes de la Etiqueta ```<script>```

    | Atributo         | Descripción                                                                 | Ejemplo                                   |
|-------------------|-----------------------------------------------------------------------------|-------------------------------------------|
| `src`            | Especifica la URL del archivo JavaScript externo que se va a cargar.      | `<script src="script.js"></script>`      |
| `type`           | Define el tipo de contenido del script. Por defecto, es `text/javascript`. | `<script type="text/javascript">`        |
| `defer`          | Indica que el script debe ejecutarse después de que el documento HTML se haya analizado. | `<script src="script.js" defer></script>` |
| `async`          | Indica que el script puede ejecutarse de manera asíncrona.                | `<script src="script.js" async></script>` |

## Descripción Detallada de Cada Atributo

### src

- **Descripción**: Este atributo permite especificar la ubicación de un archivo JavaScript externo. Cuando se incluye un archivo externo, el navegador lo descarga y lo ejecuta.

Ejemplo:

```html
<script src="mi_script.js"></script>
```

### type

- **Descripción**: Este atributo se utiliza para definir el tipo de contenido del script. Aunque el valor por defecto es text/javascript, se puede especificar explícitamente o utilizar otros tipos MIME.

Ejemplo:

```javascript
<script type="text/javascript">
  console.log("Hola, mundo!");
</script>
```

### defer

- **Descripción**: Cuando este atributo está presente, indica que el script se debe ejecutar después de que el documento HTML se haya completamente analizado. Esto es útil para evitar que el script bloquee la carga de la página.

Ejemplo:

```html
<script src="mi_script.js" defer></script>
```

### async

- **Descripción**: Similar al atributo defer, pero los scripts con async se ejecutan tan pronto como se descargan, lo que puede ocurrir en cualquier momento durante el análisis del documento. Se recomienda para scripts que no dependen de otros scripts.

Ejemplo:

```html
<script src="mi_script.js" async></script>
```
