# Eventos de Documento
Estos eventos se relacionan con el documento HTML y la carga de la página.

- **DOMContentLoaded**: Ocurre cuando el documento ha sido completamente cargado.

Ejemplo: 

```javascript
document.addEventListener("DOMContentLoaded", function() { 
    /* acción */ 
});
```

- **load**: Se activa cuando todos los recursos de la página se han cargado.

Ejemplo: 

```javascript
window.addEventListener("load", function() { 
    /* acción */ 
});
```

- **beforeunload**: Ocurre antes de que el usuario abandone la página.

Ejemplo: 

```javascript
window.addEventListener("beforeunload", function(event) { 
    /* acción */ 
});
```

- **unload**: Se activa cuando la página se descarga.

Ejemplo: 

```javascript
window.addEventListener("unload", function() { 
    /* acción */ 
});
```